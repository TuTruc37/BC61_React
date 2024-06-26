import React from "react";
import meo from "../assets/meoMun.webp";
const Ex_Binding = () => {
  //Data binding là cơ chế cho phép sử dụng các giá trị như chuỗi, số được lưu trữ trong các biến lên giao diện thông qua {}
  //lưu ý với các đối tượng , không thực hiện truyền thẳng lên giao diện vì react không biết thực hiện hiển thị đối tượng như thế nào
  //được phép truyền các giá trị lên mảng chứa số hoặc chuỗi lên giao diện để hiện thị
  //   let sinhVien = {
  //     hoTen: "Trần Lâm",
  //     namSinh: "2000",
  //   };
  //   let soDiem = [1, 5, 8, 2, 9, 11, <div>Hello</div>];
  //Dom tới thẻ html cần hiển thị
  //sử dụng inner html để đưa lên giao diện
  const arrShoe = [
    {
      id: 1,
      name: "Adidas Prophere",
      alias: "adidas-prophere",
      price: 350,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      size: "[36,37,38,39,40,41,42]",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 995,
      deleted: false,
      categories:
        '[{"id":"ADIDAS","category":"ADIDAS"},{"id":"MEN","category":"MEN"},{"id":"WOMEN","category":"WOMEN"}]',
      relatedProducts: "[2,3,5]",
      feature: true,
      image: "https://shop.cyberlearn.vn/images/adidas-prophere.png",
    },
    {
      id: 2,
      name: "Adidas Prophere Black White",
      alias: "adidas-prophere-black-white",
      price: 450,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      size: "[36,37,38,39,40,41,42]",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 990,
      deleted: false,
      categories:
        '[{"id":"ADIDAS","category":"ADIDAS"},{"id":"MEN","category":"MEN"},{"id":"WOMEN","category":"WOMEN"}]',
      relatedProducts: "[1,4,6]",
      feature: false,
      image:
        "https://shop.cyberlearn.vn/images/adidas-prophere-black-white.png",
    },
    {
      id: 3,
      name: "Adidas Prophere Customize",
      alias: "adidas-prophere-customize",
      price: 375,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      size: "[36,37,38,39,40,41,42]",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 414,
      deleted: false,
      categories:
        '[{"id":"ADIDAS","category":"ADIDAS"},{"id":"MEN","category":"MEN"},{"id":"WOMEN","category":"WOMEN"}]',
      relatedProducts: "[4,5,7]",
      feature: true,
      image: "https://shop.cyberlearn.vn/images/adidas-prophere-customize.png",
    },
    {
      id: 4,
      name: "Adidas Super Star Red",
      alias: "adidas-super-star-red",
      price: 465,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      size: "[36,37,38,39,40,41,42]",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 542,
      deleted: false,
      categories:
        '[{"id":"ADIDAS","category":"ADIDAS"},{"id":"MEN","category":"MEN"},{"id":"WOMEN","category":"WOMEN"}]',
      relatedProducts: "[7,8,6]",
      feature: false,
      image: "https://shop.cyberlearn.vn/images/adidas-super-star-red.png",
    },
    {
      id: 5,
      name: "Adidas Swift Run",
      alias: "adidas-swift-run",
      price: 550,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      size: "[36,37,38,39,40,41,42]",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 674,
      deleted: false,
      categories:
        '[{"id":"ADIDAS","category":"ADIDAS"},{"id":"MEN","category":"MEN"},{"id":"WOMEN","category":"WOMEN"}]',
      relatedProducts: "[2,3,8]",
      feature: true,
      image: "https://shop.cyberlearn.vn/images/adidas-swift-run.png",
    },
    {
      id: 6,
      name: "Adidas Tenisky Super Star",
      alias: "adidas-tenisky-super-star",
      price: 250,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      size: "[36,37,38,39,40,41,42]",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 456,
      deleted: false,
      categories:
        '[{"id":"ADIDAS","category":"ADIDAS"},{"id":"MEN","category":"MEN"},{"id":"WOMEN","category":"WOMEN"}]',
      relatedProducts: "[4,2,3]",
      feature: false,
      image: "https://shop.cyberlearn.vn/images/adidas-tenisky-super-star.png",
    },
    {
      id: 7,
      name: "Adidas Ultraboost 4",
      alias: "adidas-ultraboost-4",
      price: 450,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      size: "[36,37,38,39,40,41,42]",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 854,
      deleted: false,
      categories:
        '[{"id":"ADIDAS","category":"ADIDAS"},{"id":"MEN","category":"MEN"},{"id":"WOMEN","category":"WOMEN"}]',
      relatedProducts: "[8,2,1]",
      feature: true,
      image: "https://shop.cyberlearn.vn/images/adidas-ultraboost-4.png",
    },
    {
      id: 8,
      name: "Adidas Yeezy 350",
      alias: "adidas-yeezy-350",
      price: 750,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      size: "[36,37,38,39,40,41,42]",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 524,
      deleted: false,
      categories:
        '[{"id":"ADIDAS","category":"ADIDAS"},{"id":"MEN","category":"MEN"},{"id":"WOMEN","category":"WOMEN"}]',
      relatedProducts: "[1,4,6]",
      feature: false,
      image: "https://shop.cyberlearn.vn/images/adidas-yeezy-350.png",
    },
    {
      id: 9,
      name: "Nike Adapt BB",
      alias: "nike-adapt-bb",
      price: 630,
      description:
        "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
      size: "[36,37,38,39,40,41,42]",
      shortDescription: "Paul George is the rare high-percentage shooter",
      quantity: 599,
      deleted: false,
      categories:
        '[{"id":"NIKE","category":"NIKE"},{"id":"MEN","category":"MEN"},{"id":"WOMEN","category":"WOMEN"}]',
      relatedProducts: "[10,11,13]",
      feature: true,
      image: "https://shop.cyberlearn.vn/images/nike-adapt-bb.png",
    },
    {
      id: 10,
      name: "Nike Air Max 97",
      alias: "nike-air-max-97",
      price: 650,
      description:
        "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
      size: "[36,37,38,39,40,41,42]",
      shortDescription: "Paul George is the rare high-percentage shooter",
      quantity: 984,
      deleted: false,
      categories:
        '[{"id":"NIKE","category":"NIKE"},{"id":"MEN","category":"MEN"},{"id":"WOMEN","category":"WOMEN"}]',
      relatedProducts: "[9,14,15]",
      feature: false,
      image: "https://shop.cyberlearn.vn/images/nike-air-max-97.png",
    },
    {
      id: 11,
      name: "Nike Air Max 97 Blue",
      alias: "nike-air-max-97-blue",
      price: 450,
      description:
        "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
      size: "[36,37,38,39,40,41,42]",
      shortDescription: "Paul George is the rare high-percentage shooter",
      quantity: 875,
      deleted: false,
      categories:
        '[{"id":"NIKE","category":"NIKE"},{"id":"MEN","category":"MEN"},{"id":"WOMEN","category":"WOMEN"}]',
      relatedProducts: "[10,12,17]",
      feature: true,
      image: "https://shop.cyberlearn.vn/images/nike-air-max-97-blue.png",
    },
    {
      id: 12,
      name: "Nike Air Max 270 React",
      alias: "nike-air-max-270-react",
      price: 750,
      description:
        "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
      size: "[36,37,38,39,40,41,42]",
      shortDescription: "Paul George is the rare high-percentage shooter",
      quantity: 445,
      deleted: false,
      categories:
        '[{"id":"NIKE","category":"NIKE"},{"id":"MEN","category":"MEN"},{"id":"WOMEN","category":"WOMEN"}]',
      relatedProducts: "[11,9,15,16]",
      feature: false,
      image: "https://shop.cyberlearn.vn/images/nike-air-max-270-react.png",
    },
    {
      id: 13,
      name: "Nike Flyknit",
      alias: "nike-flyknit",
      price: 350,
      description:
        "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
      size: "[36,37,38,39,40,41,42]",
      shortDescription: "Paul George is the rare high-percentage shooter",
      quantity: 367,
      deleted: false,
      categories:
        '[{"id":"NIKE","category":"NIKE"},{"id":"MEN","category":"MEN"},{"id":"WOMEN","category":"WOMEN"}]',
      relatedProducts: "[12,14,17,11]",
      feature: true,
      image: "https://shop.cyberlearn.vn/images/nike-flyknit.png",
    },
    {
      id: 14,
      name: "Nike React Element",
      alias: "nike-react-element",
      price: 480,
      description:
        "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
      size: "[36,37,38,39,40,41,42]",
      shortDescription: "Paul George is the rare high-percentage shooter",
      quantity: 589,
      deleted: false,
      categories:
        '[{"id":"NIKE","category":"NIKE"},{"id":"MEN","category":"MEN"},{"id":"WOMEN","category":"WOMEN"}]',
      relatedProducts: "[16,15,13]",
      feature: false,
      image: "https://shop.cyberlearn.vn/images/nike-react-element.png",
    },
    {
      id: 15,
      name: "Nike Shox TL",
      alias: "nike-shox-tl",
      price: 990,
      description:
        "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
      size: "[36,37,38,39,40,41,42]",
      shortDescription: "Paul George is the rare high-percentage shooter",
      quantity: 456,
      deleted: false,
      categories:
        '[{"id":"NIKE","category":"NIKE"},{"id":"MEN","category":"MEN"},{"id":"WOMEN","category":"WOMEN"}]',
      relatedProducts: "[16,14,12]",
      feature: true,
      image: "https://shop.cyberlearn.vn/images/nike-shox-tl.png",
    },
    {
      id: 16,
      name: "Nike SP Dunk",
      alias: "nike-sp-dunk",
      price: 450,
      description:
        "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
      size: "[36,37,38,39,40,41,42]",
      shortDescription: "Paul George is the rare high-percentage shooter",
      quantity: 582,
      deleted: false,
      categories:
        '[{"id":"NIKE","category":"NIKE"},{"id":"MEN","category":"MEN"},{"id":"WOMEN","category":"WOMEN"}]',
      relatedProducts: "[15,14,13]",
      feature: false,
      image: "https://shop.cyberlearn.vn/images/nike-sp-dunk.png",
    },
    {
      id: 17,
      name: "Van Old School",
      alias: "van-old-school",
      price: 150,
      description:
        "The Vans Coastal Classic Slip-On features sturdy low profile canvas and textile uppers, padded collars, elastic side accents, and signature rubber waffle outsoles.\r\n",
      size: "[36,37,38,39,40,41,42]",
      shortDescription:
        "\r\nThe Vans Coastal Classic Slip-On features sturdy low profile canvas and textile uppers",
      quantity: 654,
      deleted: false,
      categories:
        '[{"id":"VANS_CONVERSE","category":"VANS CONVERSE"},{"id":"MEN","category":"MEN"},{"id":"WOMEN","category":"WOMEN"}]',
      relatedProducts: "[18,19,1,2,3]",
      feature: true,
      image: "https://shop.cyberlearn.vn/images/van-old-school.png",
    },
    {
      id: 18,
      name: "Vans black black",
      alias: "vans-black-black",
      price: 100,
      description:
        "The Vans Coastal Classic Slip-On features sturdy low profile canvas and textile uppers, padded collars, elastic side accents, and signature rubber waffle outsoles.\r\n",
      size: "[36,37,38,39,40,41,42]",
      shortDescription:
        "\r\nThe Vans Coastal Classic Slip-On features sturdy low profile canvas and textile uppers",
      quantity: 985,
      deleted: false,
      categories:
        '[{"id":"VANS_CONVERSE","category":"VANS CONVERSE"},{"id":"MEN","category":"MEN"},{"id":"WOMEN","category":"WOMEN"}]',
      relatedProducts: "[19,17,4,5,6]",
      feature: false,
      image: "https://shop.cyberlearn.vn/images/vans-black-black.png",
    },
    {
      id: 19,
      name: "Converse Chuck Taylor",
      alias: "converse-chuck-taylor",
      price: 130,
      description:
        "The Vans Coastal Classic Slip-On features sturdy low profile canvas and textile uppers, padded collars, elastic side accents, and signature rubber waffle outsoles.",
      size: "[30,31,32]",
      shortDescription:
        "The Vans Coastal Classic Slip-On features sturdy low profile canvas and textile uppers, padded collar",
      quantity: 300,
      deleted: false,
      categories:
        '[{"id":"VANS_CONVERSE","category":"VANS CONVERSE"},{"id":"MEN","category":"MEN"},{"id":"WOMEN","category":"WOMEN"}]',
      relatedProducts: "[18,17,9,10]",
      feature: false,
      image: "https://shop.cyberlearn.vn/images/nike-air-max-97.png",
    },
  ];
  const renderArrShoes = () => {
    let newArrShoe = [];
    newArrShoe = arrShoe.map((shoe, index) => {
      console.log(shoe); //từng phần tử trong mảng arrShoe
      return (
        <div key={index}>
          <img src={shoe.image} alt="" />
          <h2>{shoe.name}</h2>
          <p>{shoe.price}</p>
          <p>{shoe.quantity}</p>
        </div>
      );
    });
    // console.log(newArrShoe);
    return newArrShoe;
  };
  return (
    //   {/* Sinh viên {sinhVien.hoTen} sinh năm {sinhVien.namSinh}
    //   <p> {soDiem}</p> */}
    // <div>{renderArrShoes()}</div>
    <div>
      <div className="grid grid-cols-4 gap-5">
        {arrShoe.map((shoe, index) => {
          console.log(shoe); //từng phần tử trong mảng arrShoe
          return (
            <div className="border border-black p-5 rounded" key={index}>
              <img src={shoe.image} alt="" />
              <h2 className="text-2xl">{shoe.name}</h2>
              <p>Giá tiền: {shoe.price}</p>
              <p>Số lượng: {shoe.quantity}</p>
            </div>
          );
        })}
      </div>
      <div>
        {/* lưu ý khi import  hình vào sử dụng: chỉ truy cập được các hình ảnh lưu trữ nằm trong thư mục src, không cho phép truy cập ra ngoài phạm vi thư mục src */}
        <img src={meo} alt="" />
        {/* lưu ý khi sử dụng hình ảnh thông qya đường dẫn tĩnh: vị trí bắt đầu đường dẫn tính từ file html và chỉ đi được tới các thư mục bên ngoài, không truy cập vào thư mục src */}
        <img src="./public/meoMun.webp" alt="" />
      </div>
    </div>
  );
};

export default Ex_Binding;
