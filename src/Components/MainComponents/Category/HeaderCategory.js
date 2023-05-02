import React from "react";
import {
  WrapperHeaderProducts,
  TextHeader,
  ButtonsHeader,
  WrapperSelectSort,
  WrapperIconsList,
  IconApp,
  IconList,
} from "./Style";
import CustomSelect from "../../../SubComponents/CustomSelect";
import { useSelector } from "react-redux";
const HeaderCategory = ({
  dataProduct,
  handleChangeSort,
  showing,
  setShowing,
}) => {
  const dataStatic = useSelector((state) => state.dataStatic);
  const paginationProduct = useSelector((state) => state.dataStatic);
  return (
    <WrapperHeaderProducts>
      {dataProduct.data?.length !== 0 ? (
        <TextHeader>
          Showing{" "}
          {1 +
            paginationProduct.limitProduct * paginationProduct.pageProduct -
            paginationProduct.limitProduct}{" "}
          -{" "}
          {dataProduct.resultsLimit +
            paginationProduct.pageProduct * paginationProduct.limitProduct -
            paginationProduct.limitProduct}{" "}
          of {dataProduct.results} Results
        </TextHeader>
      ) : (
        <TextHeader>Showing 0 - 0 of 0 Results</TextHeader>
      )}

      <ButtonsHeader>
        <WrapperSelectSort>
          <CustomSelect
            isMulti={false}
            autoFocus={true}
            placeholder="Newess"
            value={dataStatic.dataOptionsCategory.find(
              (c) => c.value === dataStatic.dataSorting
            )}
            data={dataStatic.dataOptionsCategory}
            handleChange={handleChangeSort}
          />
        </WrapperSelectSort>
        <WrapperIconsList
          focus={showing === "app" ? 1 : 0}
          onClick={() => setShowing("app")}
        >
          <IconApp />
        </WrapperIconsList>
        <WrapperIconsList
          focus={showing === "list" ? 1 : 0}
          onClick={() => setShowing("list")}
        >
          <IconList />
        </WrapperIconsList>
      </ButtonsHeader>
    </WrapperHeaderProducts>
  );
};

export default HeaderCategory;
