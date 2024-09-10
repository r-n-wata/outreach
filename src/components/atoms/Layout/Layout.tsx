import { Outlet } from "react-router-dom";
import ScrollToTop from "../ScrollToTop/ScrollToTop";

const Layout = () => {
  return (
    <>
      <ScrollToTop />
      <Outlet /> {/* This renders the current route's component */}
    </>
  );
};

export default Layout;
