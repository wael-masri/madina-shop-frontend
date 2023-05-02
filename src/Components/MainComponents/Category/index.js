import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SideBarCategory from "../../../SubComponents/SideBarCategory";
import {
  Container,
  SideBar,
  SideProduct,
  Wrapper,
  WrapperProduct,
  WrapperEmptyData,
  EmptyData,
  IconFilter,
  IconFilterOpen,
} from "./Style";
import CardItem from "../../../SubComponents/CardItem";
import { ProductsLoading } from "../../../LoadingTemplates";
import {
  setDataSorting,
  setPageProducts,
} from "../../../Redux/Actions/DataStaticActions";
import noProduct from "../../../Assets/Images/noProduct.png";
import HeaderCategory from "./HeaderCategory";
import PaginationProduct from "./PaginationProduct";
const Category = () => {
  const [dataProduct, setDataProduct] = useState({});
  const [isOpenFilterPage, setIsOpenFilterPage] = useState(false);
  const dispatch = useDispatch();
  const [showing, setShowing] = useState("app");
  const productData = useSelector((state) => state.product);
  const paginationProduct = useSelector((state) => state.dataStatic);

  useEffect(() => {
    const editSomeData = () => {
      setDataProduct(productData.data);
    };
    editSomeData();
  }, [productData]);
  const handleOpenMenuFilter = () => {
    setIsOpenFilterPage(!isOpenFilterPage);
  };
  const numberOfPagesPagination = () => {
    let arrPages = [];
    if (dataProduct.paginationResult) {
      let numberOfPage = dataProduct.paginationResult.numberOfPages + 1;
      for (let i = 1; i < numberOfPage; i++) {
        arrPages.push(i);
      }
    }
    return arrPages;
  };
  const handleNext = () => {
    if (
      !(
        dataProduct.paginationResult.numberOfPages &&
        dataProduct.paginationResult.numberOfPages ===
          paginationProduct.pageProduct
      )
    ) {
      dispatch(setPageProducts(paginationProduct.pageProduct + 1));
    }
  };
  const handlePrev = () => {
    if (paginationProduct.pageProduct !== 1) {
      dispatch(setPageProducts(paginationProduct.pageProduct - 1));
    }
  };
  const handleChangeSort = (e) => {
    dispatch(setDataSorting(e.value));
  };
  return productData.loading ? (
    <ProductsLoading />
  ) : (
    <Container>
      <Wrapper>
        <SideProduct>
          <HeaderCategory
            handleChangeSort={handleChangeSort}
            showing={showing}
            dataProduct={dataProduct}
            setShowing={setShowing}
          />
          <WrapperProduct list={showing}>
            {dataProduct.data?.length !== 0 &&
              dataProduct.data?.map((value, index) => {
                if (
                  value.status &&
                  value.category.status &&
                  value.brand.status
                ) {
                  return <CardItem key={index} card={showing} data={value} />;
                }
              })}
          </WrapperProduct>
          <div>
            {dataProduct.data?.length === 0 && (
              <WrapperEmptyData>
                <EmptyData src={noProduct} alt="picPorduct" />
              </WrapperEmptyData>
            )}
          </div>
          {dataProduct.results &&
          dataProduct.data?.length !== 0 &&
          !(dataProduct.results < paginationProduct.limitProduct) ? (
            <PaginationProduct
              numberOfPagesPagination={numberOfPagesPagination}
              handleNext={handleNext}
              handlePrev={handlePrev}
              setPageProducts={setPageProducts}
              dataProduct={dataProduct}
            />
          ) : null}
        </SideProduct>
        <SideBar  hide={isOpenFilterPage}><SideBarCategory /></SideBar>
      </Wrapper>
      {isOpenFilterPage ? (
        <IconFilterOpen onClick={handleOpenMenuFilter} />
      ) : (
        <IconFilter onClick={handleOpenMenuFilter} />
      )}
    </Container>
  );
};

export default Category;
