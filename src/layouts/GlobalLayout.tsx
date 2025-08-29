import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../components";

const GlobalLayout: React.FC = () => {
  return (
    <section className="h-screen bg-background-primary flex flex-col justify-between">
      <Header />
      <section className="h-full flex">
        <Outlet />
      </section>
    </section>
  );
};

export default GlobalLayout;
