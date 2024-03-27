import React from "react";

const Child = (props) => {
  //   console.log(props);
  return (
    <div>
      <div>
        <label
          htmlFor="first_name"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Họ tên
        </label>
        <input
          type="text"
          onChange={(event) => {
            props.setHoTen(event.target.value);
          }}
          id="first_name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="Vui lòng nhập tên"
        />
        {/* Thực hiện tạo một state dùng để chứa họ tên người nhập dữ liệu, state có thể đặt tên là hoTen, sau đó thực hiện tạo sự kiện giúp cập nhật giá trị của state thông qua việc người dùng thay đổi dữ liệu input và truyền vào thẻ p tạo ra đoạn nội dung vd. Hôm nay có Quang Khải đi học  */}

        <p id="content">Hôm nay có bạn {props.hoTen} đi học</p>
      </div>
    </div>
  );
};

export default Child;
