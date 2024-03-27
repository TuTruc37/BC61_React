import React from "react";

const Header = () => {
  //cơ chế data binding
  // Cơ chế giúp đưa các giá trị từ biến, hàm lên giao diện , cách sử dụng gọi một {} và truyền giá trị từ biến hoặc hàm return về vào bên trong
  let hoTen = "Đỗ Quang Khải";
  let style = { backgroundColor: "pink", padding: "40px 20px" };
  //thẻ fragment (<></>) giúp kết hợp layout và trả về 2 div cha cùng một lúc
  return (
    <>
      <div style={style}>
        {/* <div> Tôi đang đi học {hoTen}</div>
        <div>Hello</div> */}
        <h1>Header component</h1>
      </div>
    </>
  );
};

export default Header;
