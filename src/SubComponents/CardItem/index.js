import React from "react";
import { setWishlistItem } from "../../Redux/Actions/DataStaticActions";
import CardList from "./CardList";
import CardApp from "./CardApp";
import { useDispatch, useSelector } from "react-redux";
const CardItem = ({ card, data }) => {
  const userProfile = useSelector((state) => state.dataStatic.userLogin);
  const dispatch = useDispatch();

  const toggleWishlistItem = () => {
    if (userProfile._id) {
      userProfile.wishList.filter((e) => e._id === data._id).length > 0
        ? setWishlistItem(dispatch, userProfile._id, {
            rmvWish: data._id,
          })
        : setWishlistItem(dispatch, userProfile._id, {
            pushWish: data._id,
          });
    }
  };

  return (
    <>
      {card && card === "list" ? (
        <CardList
          toggleWishlistItem={toggleWishlistItem}
          card={card}
          data={data}
        />
      ) : (
        <CardApp
          toggleWishlistItem={toggleWishlistItem}
          card={card}
          data={data}
        />
      )}
    </>
  );
};

export default CardItem;
