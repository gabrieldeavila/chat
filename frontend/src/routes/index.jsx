import { BrowserRouter, Routes, Route } from "react-router-dom";

import React, { lazy, memo, Suspense } from "react";
import Navbar from "../components/Navbar";

import { RoutesContainer } from "./style";

const Home = lazy(() => import("../pages/Home"));

function RoutesWrapper() {
  return (
    <Suspense fallback="">
      <Navbar />
      <RoutesContainer>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </RoutesContainer>
    </Suspense>
  );
}

export default memo(RoutesWrapper);
