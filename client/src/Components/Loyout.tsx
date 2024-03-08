import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Loyout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Loyout;
