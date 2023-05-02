import React, { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import secureLocalStorage from "react-secure-storage";
import {
  WrapperMenu,
  ImageProfile,
  IconMenu,
  WrapperMenuList,
  WrapperHeaderList,
  WrapperHeaderImage,
  WrapperHeaderInfo,
  ImageList,
  EmailList,
  NameList,
  LineList,
  ItemList,
} from "./Style";
import noImage from "../../../Assets/Images/noImage.png";
import { useDispatch, useSelector } from "react-redux";
import { logOutAccount } from "../../../Redux/Actions/DataStaticActions";
import { clearAccount } from "../../../Redux/Actions/CartActions";
const MenuList = ({ isOpenMenu, setIsOpenMenu }) => {
  const userLogin = useSelector((state) => state.dataStatic.userLogin);
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const wrapperRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpenMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);
  const logout = () => {
    window.open(`${process.env.REACT_APP_API_URL}/api/auth/logout`, "_self");
  };
  const signOutAccount = () => {
    dispatch(logOutAccount());
    dispatch(clearAccount());
    secureLocalStorage.clear();
    logout();
    setIsOpenMenu(false);
  };

  return (
    <WrapperMenu ref={wrapperRef}>
      {userLogin.imageGoogle || userLogin.profileImage ?
      <ImageProfile
      onClick={() => setIsOpenMenu(!isOpenMenu)}
      src={
        userLogin.imageGoogle ? userLogin.imageGoogle : userLogin.profileImage
      }
      alt="profile"
    />
      :   <ImageProfile
      onClick={() => setIsOpenMenu(!isOpenMenu)}
      src={
        noImage
      }
      alt="profile"
    />}
      
      <IconMenu onClick={() => setIsOpenMenu(!isOpenMenu)} />
      {isOpenMenu ? (
        <WrapperMenuList>
          <WrapperHeaderList>
            <WrapperHeaderImage>
            {userLogin.imageGoogle || userLogin.profileImage ?   <ImageList
                src={
                  userLogin.imageGoogle
                    ? userLogin.imageGoogle
                    : userLogin.profileImage
                }
                alt="profile"
              /> : 
              <ImageList
              src={noImage}
              alt="profile"
            /> }
            
            </WrapperHeaderImage>
            <WrapperHeaderInfo>
              <NameList>{userLogin.name}</NameList>
              <EmailList>{userLogin.email}</EmailList>
            </WrapperHeaderInfo>
          </WrapperHeaderList>
          <LineList />
          <ItemList
            onClick={() => {
              navigate("/cart");
              setIsOpenMenu(!isOpenMenu);
            }}
            active={splitLocation[1] === "cart" ? "active" : null}
          >
            My Cart
          </ItemList>
          <ItemList
            onClick={() => {
              navigate("/wishlist");
              setIsOpenMenu(!isOpenMenu);
            }}
            active={splitLocation[1] === "wishlist" ? "active" : null}
          >
            My Wishlist
          </ItemList>

          <ItemList
            onClick={() => {
              navigate("/order");
              setIsOpenMenu(!isOpenMenu);
            }}
            active={splitLocation[1] === "order" ? "active" : null}
          >
            My Orders
          </ItemList>
          <LineList />

          {userLogin.googleId ? null : (
            <ItemList
              onClick={() => {
                navigate("/profile");
                setIsOpenMenu(!isOpenMenu);
              }}
              active={splitLocation[1] === "profile" ? "active" : null}
            >
              Account Settings
            </ItemList>
          )}
          <ItemList
            onClick={() => {
              navigate("/help");
              setIsOpenMenu(!isOpenMenu);
            }}
            active={splitLocation[1] === "help" ? "active" : null}
          >
            Help
          </ItemList>
          <ItemList logout="true" onClick={() => signOutAccount()}>
            Log Out
          </ItemList>
        </WrapperMenuList>
      ) : null}
    </WrapperMenu>
  );
};

export default MenuList;
