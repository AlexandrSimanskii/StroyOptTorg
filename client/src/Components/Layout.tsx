import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <main>
      <Header />
      <div className="outlet">
        <Outlet />
      </div>
      <Footer />
    </main>
  );
};

export default Layout;
