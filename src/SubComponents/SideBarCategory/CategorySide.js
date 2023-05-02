import React, { useEffect } from "react";
import { TitleSideBar, SubCategoriesTitle } from "./Style";
import { useDispatch, useSelector } from "react-redux";
import { CategoryList } from "../../LoadingTemplates";
import { setCategoryFilter } from "../../Redux/Actions/DataStaticActions";


const CategorySide = () => {
  const CategoriesData = useSelector((state) => state.category);
  const dataStatic = useSelector((state) => state.dataStatic);
  const dispatch = useDispatch();
  
  

  return (
    <>
      {CategoriesData.loading ? (
        <>
          <TitleSideBar>Product Categories</TitleSideBar>
          <CategoryList />{" "}
        </>
      ) : (
        <>
          <TitleSideBar>Product Categories</TitleSideBar>
          <SubCategoriesTitle
            onClick={() => dispatch(setCategoryFilter(""))}
            focused={"" === dataStatic.categoryFilter? 1 : 0}
          >
            All Products
          </SubCategoriesTitle>
          {CategoriesData.data.data &&
            CategoriesData.data.data.map((val, index) => {
              return (
                <SubCategoriesTitle
                  key={val._id}
                  onClick={() => {dispatch(setCategoryFilter(val._id))}}
                  focused={val._id === dataStatic.categoryFilter? 1 : 0}
                >
                  {val.name} ({val.numberOfProduct})
                </SubCategoriesTitle>
              );
            })}
        </>
      )}
    </>
  );
};

export default CategorySide;
