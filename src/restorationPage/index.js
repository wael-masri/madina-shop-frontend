import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname,state } = useLocation();
  const paginationProductPage = useSelector(state => state.dataStatic.pageProduct);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname,state,paginationProductPage]);

  return null;
}