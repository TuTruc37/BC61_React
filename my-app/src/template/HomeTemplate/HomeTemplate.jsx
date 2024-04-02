import React from "react";
import Header from "../../layout/Header/Header";
import Footer from "../../layout/Footer/Footer";
import { Outlet } from "react-router-dom";

const HomeTemplate = () => {
  // Header ==> Nội dung bên trong ==> Footer
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default HomeTemplate;
