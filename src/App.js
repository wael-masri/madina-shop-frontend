import { Routes, Route, Outlet } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { useSelector } from "react-redux";
import { darkMode, lightMode } from "./Assets/CustomCss/ThemeColors";
import { GlobaleStyles } from "./Assets/CustomCss/GlobalStyles";
import HeaderFooter from "./Components/HeaderFooter";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ProtectRoutes, PublicRoutes, NormalRoutes } from "./Routes";
import ContentFooter from "./Components/ContentFooter";
import {
  BlogPage,
  CartPage,
  CategoryPage,
  CheckoutPage,
  ContactPage,
  HomePage,
  LoginPage,
  NotFoundPage,
  OrderPage,
  PendingAccountVerify,
  ProductPage,
  ProfilePage,
  RegisterPage,
  WishlistPage,
} from "./Pages";

function App() {
  const BooleanData = useSelector((state) => state.booleanData);

  //with nav
  const RoutesPages = () => {
    return (
      <HeaderFooter>
        <Outlet />
      </HeaderFooter>
    );
  };
  //without nav
  const RoutesPagesWithoutNavFooter = () => {
    return (
      <ContentFooter>
        <Outlet />
      </ContentFooter>
    );
  };

  // routes for conditions
  const ProtectRoute1 = () => {
    return (
      <>
        <Route path="/" element={<RoutesPages />}>
          <Route index element={<HomePage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Route>
        <Route path="/" element={<RoutesPagesWithoutNavFooter />}>
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/order" element={<OrderPage />} />
        </Route>
      </>
    );
  };
  const ProtectRoute2 = () => {
    return (
      <>
        <Route path="/" element={<RoutesPagesWithoutNavFooter />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/verifyEmail" element={<PendingAccountVerify />} />
        </Route>
      </>
    );
  };
  const PublicRoute = () => {
    return (
      <>
        <Route path="/" element={<RoutesPages />}>
          <Route index element={<HomePage />} />
          <Route path="/category" element={<CategoryPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/wishlist" element={<WishlistPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/product" element={<ProductPage />} />
        </Route>
        <Route path="/" element={<RoutesPagesWithoutNavFooter />}></Route>
      </>
    );
  };
  return (
    <>
      <ThemeProvider theme={BooleanData.isMode ? darkMode() : lightMode()}>
        <GlobaleStyles />
        <Routes>
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/" element={<NormalRoutes />}>
            {PublicRoute()}
          </Route>
          <Route path="/" element={<PublicRoutes />}>
            {ProtectRoute2()}
          </Route>
          <Route path="/" element={<ProtectRoutes />}>
            {ProtectRoute1()}
          </Route>
        </Routes>
        <ToastContainer
          enableMultiContainer
          containerId={"F"}
          toastStyle={{
            backgroundColor: "#ea1c26",
            color: "#fff",
          }}
          hideProgressBar
          position={toast.POSITION.BOTTOM_RIGHT}
          closeButton={false}
          autoClose={1000}
        />
        <ToastContainer
          enableMultiContainer
          containerId={"S"}
          toastStyle={{
            backgroundColor: "#4FBF26",
            color: "#fff",
          }}
          hideProgressBar
          position={toast.POSITION.TOP_RIGHT}
          closeButton={false}
          autoClose={1000}
        />
      </ThemeProvider>
    </>
  );
}

export default App;
