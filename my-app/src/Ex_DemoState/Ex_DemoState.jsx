import React, { useState } from "react";
import Child from "./Child";
const Ex_DemoState = () => {
  // Yêu cầu: thực hiện tạo ra một biến chứa giá trị là số 1, sau đó tạo ra một button cứ click vào sẽ tăng giá trị thêm 1 đơn vị
  //   let number = 1;
  //state, phương thức giúp cập nhập state, các giá trị truyền vào trong useState sẽ là giá trị mặc định cho state
  let [number, setNumber] = useState(1);
  let [hoTen, setHoTen] = useState("");
  return (
    <div>
      <h1>Demo về State</h1>
      <p>Number: {number}</p>
      <button
        onClick={() => {
          //   number += 1;
          //   console.log(number);
          let newNumber = number + 1;
          setNumber(++number);
          //   setNumber(++number);
          //   setNumber(++number);
        }}
        className="py-2 px-4 text-white bg-orange-500 rounded"
      >
        Tăng đơn vị
      </button>
      {/* //Thực hiện tạo props hoTen cho component Child */}
      <Child hoTen={hoTen} setHoTen={setHoTen} />
    </div>
  );
};

export default Ex_DemoState;
