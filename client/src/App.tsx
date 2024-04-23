import "./style/main.scss";
import Home from "../src/pages/Home.tsx";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About.tsx";
import { Suspense } from "react";

import Layout from "./Components/Layout.tsx";
import NotFound from "./pages/NotFound.tsx";
import Catalog from "./pages/Catalog.tsx";
import Contacts from "./pages/Contacts.tsx";
import Reviews from "./pages/Reviews.tsx";
import Register from "./pages/Register.tsx";
import Return from "./pages/Return.tsx";
import PaymentPage from "./pages/PaymentPage.tsx";
import Delivery from "./pages/Delivery.tsx";
import Answear from "./pages/Answear.tsx";
import Blog from "./pages/Blog.tsx";
import Cart from "./pages/Cart.tsx";
import NewsPage from "./pages/NewsPage.tsx";
import Product from "./pages/Product.tsx";
import Login from "./pages/Login.tsx";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<p>Loading</p>}>
              <Layout />
            </Suspense>
          }
        >
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/return" element={<Return />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/register" element={<Register />} />
          <Route path="/answear" element={<Answear />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
