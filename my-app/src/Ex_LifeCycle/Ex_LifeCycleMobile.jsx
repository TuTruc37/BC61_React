import React, { useEffect } from "react";

const Ex_LifeCycleMobile = () => {
  useEffect(() => {
    // lệnh return trả về một hàm giúp chạy component will unmount trong react
    return () => {
      console.log("Tôi đã biến mất");
      alert("Khải đã tắt component mobile");
    };
  }, []);
  return <div>Ex_LifeCycleMobile</div>;
};

export default Ex_LifeCycleMobile;
