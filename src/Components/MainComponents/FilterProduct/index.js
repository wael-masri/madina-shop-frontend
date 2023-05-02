import React from "react";
import { AnimatePresence } from "framer-motion";
import BigTitle from "../../../SubComponents/BigTitle";
import {
  Container,
  WrapperLinks,
  Links,
  WrapperTitle,
  Wrapper,
  WrapperItem,
  Product,
} from "./Style";
import CardItem from "../../../SubComponents/CardItem";
import { useDispatch, useSelector } from "react-redux";
import { setDataFilterHome } from "../../../Redux/Actions/DataStaticActions";
import { FilteredHomeItem } from "../../../LoadingTemplates";
const FilterProduct = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product);
  const filteredValue = useSelector(state => state.dataStatic.filterHomeData);
  const filterProductByCat = (cat) => {
    dispatch(setDataFilterHome(cat));
  };

  return (
    <Container>
      <Wrapper>
        <WrapperTitle>
          <BigTitle title="New Arrivales" />
        </WrapperTitle>
        <WrapperLinks>
          <Links
            to=""
            active={filteredValue === "63986228a128a69dfb26c40b" ? "active" : null}
            onClick={() => filterProductByCat("63986228a128a69dfb26c40b")}
          >
            Car & Drive
          </Links>
          <Links
            to=""
            active={filteredValue === "63986269a128a69dfb26c411" ? "active" : null}
            onClick={() => filterProductByCat("63986269a128a69dfb26c411")}
          >
            Mobiles
          </Links>
          <Links
            to=""
            active={filteredValue === "639862bda128a69dfb26c41a" ? "active" : null}
            onClick={() => filterProductByCat("639862bda128a69dfb26c41a")}
          >
            Fashion
          </Links>
        </WrapperLinks>
      </Wrapper>
      {products.loadingFiltered ? (
        <FilteredHomeItem />
      ) : (
        <WrapperItem>
          {products.dataFiltered &&
            products.dataFiltered.map((value, index) => {
              return (
                <AnimatePresence key={index}>
                  <Product
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <CardItem data={value} />
                  </Product>
                </AnimatePresence>
              );
            })}
        </WrapperItem>
      )}
    </Container>
  );
};

export default FilterProduct;
