import { BrowserRouter, Routes, Route } from "react-router-dom";

import React, { lazy, memo, Suspense } from "react";
import Navbar from "../components/Navbar";

import { RoutesContainer } from "./style";

const Home = lazy(() => import("../pages/Home"));
const Chat = lazy(() => import("../pages/Chat"));

function RoutesWrapper() {
  return (
    <Suspense fallback="">
      <RoutesContainer>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chat" element={<Chat />} />
          </Routes>
        </BrowserRouter>
      </RoutesContainer>
    </Suspense>
  );
}

export default memo(RoutesWrapper);
