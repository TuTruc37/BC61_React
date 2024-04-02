import React, { useEffect, useState } from "react";
import axios from "axios";
import Ex_LifeCycleMobile from "./Ex_LifeCycleMobile";
const Ex_LifeCycle = () => {
  // useState luôn luôn để trên đầu
  const [number, setNumber] = useState(1); // (underfined)
  // cho 1 mảng rỗng xog rồi cập nhập mảng mới cho nó, mảng rỗng vẫn chạy được hàm map nhưng không có dữ liệu hiện ra
  const [arrShoe, setArrShoe] = useState([]);
  const [detail, setDetail] = useState({});
  const [checkDevice, setCheckDevice] = useState("");
  // useEffect chạy quá trình mounting khi component bắt đầu hiển thị lên giao diện
  useEffect(() => {
    console.log("Tôi là didmount của component");
    // gọi tới phần tử và dom
    // document.querySelector(".demo").innerHTML = "abc";
    getAllShoe();
  }, []);
  // useEffect chạy quá trình didupdate khi component rerender giao diện (detail)
  useEffect(() => {
    getShoeById();
  }, [number]); //khi nào mà number của chúng ta nó thay đổi mình sẽ tự thay đổi cập nhập dữ liệu cho nó

  // useEffect chạy quá trình didupdate và didmount khi có trạng thái rerender từ component (mobile)
  useEffect(() => {
    // tạo state quản lý chiều dài thiết bị đang sử dụng
    // sử dụng sự kiện resize để check trạng thái xem khi nào người dùng sử dụng mobile, khi nào người dùng sử dụng laptop
    // cập nhập lại trạng thái cho state và sau đó thực hiện kiểm tra để hiển thị component tương ứng với từng thiết bị
    const handleResizeDevice = (event) => {
      let widthDevice = window.innerWidth;
      console.log(widthDevice);
      if (widthDevice < 576) {
        setCheckDevice("mobile");
      } else {
        setCheckDevice("laptop");
      }
    };
    window.addEventListener("resize", handleResizeDevice);
  });
  console.log(checkDevice);
  const handleRender = () => {
    console.log("Tôi là render lên giao diện");
    return "abc";
  };
  const getAllShoe = async () => {
    const res = await axios({
      url: "https://shop.cyberlearn.vn/api/Product",
      method: "GET",
    });
    console.log(res);
    // setState cập nhập dữ liệu để state chạy hàm map đưa lên giao diện
    setArrShoe(res.data.content);

    // let content = "";
    // for (let item of res.data.content) {
    //   content += `<div>
    //         <h2>${item.name}</h2>
    //         <p>${item.quantity}</p>
    //       </div>`;
    // }
    // document.querySelector(".demo").innerHTML = content;
    // const content = res.data.content.map((item, index) => {
    //   return (
    //     <div>
    //       <h2>{item.name}</h2>
    //       <p>{item.quantity}</p>
    //     </div>
    //   );
    // });
    // return content;
  };
  // getAllShoe();
  // lấy chi tiểt giày
  const getShoeById = async () => {
    const res = await axios({
      url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${number}`,
      // method: "GET",
    });
    console.log(res);
    setDetail(res.data.content);
  };

  return (
    <div>
      {handleRender()}
      <p>Giá trị state: {number}</p>
      <button
        onClick={() => {
          setNumber(number + 1);
        }}
        className="py-2 px-5 bg-orange-500 text-white"
      >
        Tăng giá trị state
      </button>

      {/* detail */}
      <div className="flex">
        {/* image */}
        <div className="image_detail">
          <img src={detail.image} alt="" />
        </div>
        {/* content */}
        <div className="content_detail">
          <h2>{detail.name}</h2>
          <p>{detail.quantity}</p>
        </div>
      </div>
      {/* check xem thiết bị mobile */}
      {checkDevice == "mobile" ? (
        <Ex_LifeCycleMobile />
      ) : (
        <div className="demo grid grid-cols-4">
          {/* ? là optional training nếu arrShoe có thì ta mới chạy hàm map có thể kiểm tra  useState khi nào thoát khỏi underfine */}
          {arrShoe?.map((item, index) => {
            return (
              <div key={index}>
                <img src={item.image} alt="" />
                <h2>{item.name}</h2>
                <p>{item.quantity}</p>
                <button
                  onClick={() => {
                    setNumber(item.id);
                  }}
                  className="bg-black text-white py-2 px-5 rounded"
                >
                  Xem chi tiết
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Ex_LifeCycle;

// import React from "react";
// import { useEffect } from "react";
// import axios from "axios";
// import { useState } from "react";
// const Ex_LifeCycle = () => {
//   const [number, setNumber] = useState(1);
//   // useEffect sẽ có 3 trạng thái

//   //   Trạng thái mounting (didmount)==> trạng thái này sẽ chạy một lần duy nhất khi component hiển thị ==> gọi dữ liệu cho component
//   useEffect(() => {
//     console.log("Tôi là trạng thái mounting");
//     axios({
//       method: "GET",
//       url: "https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
//       headers: {
//         tokenCybersoft:
//           "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA2MSIsIkhldEhhblN0cmluZyI6IjI4LzA5LzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcyNzQ4MTYwMDAwMCIsIm5iZiI6MTY5ODUxMjQwMCwiZXhwIjoxNzI3NjI5MjAwfQ.uWn4XmIr3aGBNm4QCi5Q5RFxVqNTwws8-EDFxQQud_I",
//       },
//     })
//       .then((res) => {
//         console.log(res);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);
//   return (
//     <div>
//       <p>Số: {number}</p>
//       <button
//         onClick={() => {
//           setNumber(3);
//         }}
//       >
//         Tăng
//       </button>
//     </div>
//   );
// };

// export default Ex_LifeCycle;
