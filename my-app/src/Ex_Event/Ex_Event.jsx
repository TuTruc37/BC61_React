import React from "react";

const Ex_Event = () => {
  const handleClick = (event) => {
    console.log(event.target.innerHTML); //'bấm em đi
    //   dom tới phần tử có id demo_event để truyền nội dung
    document.getElementById("demo_event").innerHTML = "Em đã bị bấm";
  };
  const hienThiTen = (name) => {
    alert(name);
  };
  return (
    <div>
      <h1>Demo Event trong react</h1>
      <button
        // onClick={(event) => {
        //   console.log(event.target.innerHTML); //'bấm em đi
        //   //   dom tới phần tử có id demo_event để truyền nội dung
        //   document.getElementById("demo_event").innerHTML = "Em đã bị bấm";
        // }}
        //    onClick={handleClick}
        onClick={() => {
          hienThiTen("Quang Khải");
        }}
      >
        Bấm em đi
      </button>
      <p id="demo_event"></p>
      <input
        onChange={(event) => {
          console.log(event.target.value);
        }}
        type="text"
        name=""
        id=""
        placeholder="Vui lòng nhập tên"
      />
    </div>
  );
};

export default Ex_Event;
