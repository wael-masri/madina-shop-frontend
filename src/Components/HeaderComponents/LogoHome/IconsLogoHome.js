import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  IconsWrapper,
  TopIcons,
  WishlistIcon,
  CartIcon,
  BadgeIcon,
  WrapperLink,
} from "./Style";
import MenuList from "./MenuList";
const IconsLogoHome = ({ splitLocation, numberOfWishlist }) => {
  const cartData = useSelector((state) => state.cart.data);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const userWishlist = useSelector((state) => state.dataStatic.userLogin);
  return (
    <IconsWrapper>
      <BadgeIcon badgeContent={numberOfWishlist}>
        <WrapperLink to="/wishlist">
          <WishlistIcon
            active={splitLocation[1] === "wishlist" ? "active" : null}
          />
        </WrapperLink>
      </BadgeIcon>

      <BadgeIcon badgeContent={cartData && cartData.numOfCartItems}>
        <WrapperLink to="/cart">
          <CartIcon active={splitLocation[1] === "cart" ? "active" : null} />
        </WrapperLink>
      </BadgeIcon>
      {userWishlist && userWishlist._id ? (
        <MenuList setIsOpenMenu={setIsOpenMenu} isOpenMenu={isOpenMenu} />
      ) : (
        <TopIcons to="/login">Login</TopIcons>
      )}
    </IconsWrapper>
  );
};

export default IconsLogoHome;
