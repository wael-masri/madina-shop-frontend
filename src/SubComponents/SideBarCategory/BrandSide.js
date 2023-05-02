import React from "react";
import { TitleSideBar, BrandTitle, CheckIcon } from "./Style";
import { useDispatch, useSelector } from "react-redux";
import { CategoryList } from "../../LoadingTemplates";
import {
  resetBrandFilter,
  setBrandFilter,
} from "../../Redux/Actions/DataStaticActions";

const BrandSide = () => {
  const Brands = useSelector((state) => state.brand);
  const dataStatic = useSelector((state) => state.dataStatic);
  const dispatch = useDispatch();

  return (
    <>
      {Brands.loading ? (
        <>
          <TitleSideBar>Brands</TitleSideBar>
          <CategoryList />{" "}
        </>
      ) : (
        <>
          <TitleSideBar>Brands</TitleSideBar>
          <BrandTitle
            focused={dataStatic.brandFilter.length === 0? 1 : 0}
            onClick={() => dispatch(resetBrandFilter())}
          >
            All
            <CheckIcon focused={dataStatic.brandFilter.length === 0? 1 : 0} />
          </BrandTitle>
          {Brands.data.data &&
            Brands.data.data.map((val, index) => {
              return (
                <BrandTitle
                  key={val._id}
                  onClick={() => dispatch(setBrandFilter(val._id))}
                  focused={dataStatic.brandFilter.includes(val._id)? 1 : 0}
                >
                  {val.name}
                  <CheckIcon
                    focused={dataStatic.brandFilter.includes(val._id)? 1 : 0}
                  />
                </BrandTitle>
              );
            })}
        </>
      )}
    </>
  );
};

export default BrandSide;
