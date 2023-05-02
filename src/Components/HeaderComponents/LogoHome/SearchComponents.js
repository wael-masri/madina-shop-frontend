import React from 'react'
import {
    SearchForm1,
    InputSearch,
    IconSearch,
    WrapperContentSearching,
    EmptySearch,
    ItemSearch,
    LabelBottomSearch,
    LinkCustom,
  } from "./Style";
const SearchComponents = ({resultSearch,handleChangeSearch,isOpenSearchBox,setIsOpenSearchBox}) => {
 
 
 
  return (
    <SearchForm1>
    <InputSearch
      name="search"
      placeholder="Search entire store here.."
      onChange={handleChangeSearch}
      value={isOpenSearchBox}
    />
    <IconSearch />
    {isOpenSearchBox ? (
      <WrapperContentSearching>
        {resultSearch && resultSearch.length === 0 ? (
          <EmptySearch>No Data Searching</EmptySearch>
        ) : (
          <>
            {resultSearch &&
              resultSearch.map((val, index) => {
                return (
                  <LinkCustom
                    to="/product"
                    state={val._id}
                    key={index}
                    onClick={() => setIsOpenSearchBox("")}
                  >
                    {" "}
                    <ItemSearch>{val.title}</ItemSearch>
                  </LinkCustom>
                );
              })}
            <LabelBottomSearch>Serch Results</LabelBottomSearch>
          </>
        )}
      </WrapperContentSearching>
    ) : null}
  </SearchForm1>
  )
}

export default SearchComponents;