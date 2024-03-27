import React from "react";
// import css vào component
// import "./navigation.css";
// import modules css vào component
//style là tên tự đặt cho các giá trị bên trong module CSS
import style from "./navigation.module.css";
const Navigation = () => {
  //   return <div className="navigation">Navigation</div>;
  return <div className={style.navigation}>Navigation</div>;
};

export default Navigation;
