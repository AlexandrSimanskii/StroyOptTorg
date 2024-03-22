import "./style/main.scss";
import Home from "../src/pages/Home.tsx";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About.tsx";
import { Suspense } from "react";
import Loyout from "./Components/Loyout.tsx";
import NotFound from "./pages/NotFound.tsx";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<p>Loading</p>}>
              <Loyout />
            </Suspense>
          }
        >
          <Route path="about" element={<About />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
