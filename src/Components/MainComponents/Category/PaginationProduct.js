import React from "react";
import {
  WrapperPagination,
  ButtonPrev,
  ButtonNext,
  ButtonPage,
  IconNext,
  IconPrev,
} from "./Style";
import { useDispatch, useSelector } from "react-redux";
const PaginationProduct = ({
  handlePrev,
  setPageProducts,
  dataProduct,
  handleNext,
  numberOfPagesPagination,
}) => {
  const dispatch = useDispatch();

  const paginationProduct = useSelector((state) => state.dataStatic);
  return (
    <WrapperPagination>
      <ButtonPrev
        stopEventt={paginationProduct.pageProduct === 1 ? 1 : 0}
        onClick={() => handlePrev()}
      >
        <IconPrev />
        Prev
      </ButtonPrev>

      {numberOfPagesPagination().map((val, index) => {
        return (
          <ButtonPage
            key={index}
            focus={val === paginationProduct.pageProduct ? 1 : 0}
            onClick={() => dispatch(setPageProducts(val))}
          >
            {val}
          </ButtonPage>
        );
      })}
      <ButtonNext
        stopEventt={
          paginationProduct.pageProduct ===
          dataProduct.paginationResult?.numberOfPages
            ? 1
            : 0
        }
        onClick={() => handleNext()}
      >
        Next
        <IconNext />
      </ButtonNext>
    </WrapperPagination>
  );
};

export default PaginationProduct;
