import "./style/main.scss";
import Home from "../src/pages/Home.tsx";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About.tsx";
import { Suspense } from "react";
import Layout from "./Components/Layout.tsx";
import NotFound from "./pages/NotFound.tsx";
import Catalog from "./pages/Catalog.tsx";

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
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
