import React from "react";
import { BrowserRouter, Routes } from "react-router-dom";
import StudioRouter from "./StudioRouter";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <StudioRouter />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
