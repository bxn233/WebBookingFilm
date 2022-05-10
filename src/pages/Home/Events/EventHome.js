import React from "react";
import Slider from "react-slick";
import styled from "styled-components";

const arrImgEvent = [
  {
    id: 1,
    hinhAnh:
      "https://www.bhdstar.vn/wp-content/uploads/2018/03/Web-HappyDay.png",
  },
  {
    id: 2,
    hinhAnh:
      "https://www.bhdstar.vn/wp-content/uploads/2018/03/Suat-Khuya-Web.jpg",
  },
  {
    id: 3,
    hinhAnh: "https://www.bhdstar.vn/wp-content/uploads/2018/03/U22-web-1.png",
  },
  {
    id: 4,
    hinhAnh:
      "https://www.bhdstar.vn/wp-content/uploads/2018/03/Package-U22.png",
  },
];
const StyledSlider = styled(Slider)`
  .slick-dots.slick-thumb {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .slick-dots.slick-thumb li {
    width: 6px;
    height: 6px;
    margin: 0 3px;
    border-radius: 999px;
    transition: all 0.5s ease-in-out;
    will-change: width;
    background-color: #666;
  }

  .slick-dots.slick-thumb li.slick-active {
    background-color: rgb(192, 182, 135);
    width: 24px;
  }
  .slick-slide.slick-center {
    transform: scale(1.25);
    transition: all 0.5s ease-in-out;
  }
  .slick-prev:before,
 .slick-next:before {
   display: none;
 }
`;
export default function EventHome() {
  const settings = {
    customPaging: function (i) {
      return <div className="dot"></div>;
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    className: "center",
    centerMode: true,
    infinite: true,
    slidesToShow: 3,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
  const renderEvent = () => {
    return arrImgEvent.map((item, index) => (
      <div key={index} className="p-6 rounded-lg overflow-hidden cursor-pointer">
        <div
          style={{
            ...settings,
            background: `url(${item.hinhAnh}) 100% center no-repeat`,
            height: "160px",
            width: "100%",
            backgroundSize: "cover",
          }}
          className="rounded-xl overflow-hidden"
        >
          <img
            src={item.hinhAnh}
            className="opacity-0"
            alt={item.hinhAnh}
          />
        </div>
      </div>
    ));
  };
  return (
    <div className="pb-10 mt-5">
      <h1
        className="w-full text-center text-2xl lg:text-3xl font-bold mb-10 "
        style={{ color: "rgb(192, 182, 135)",
        fontFamily: '"Nunito", sans-serif' }}
      >
        Sự kiện & Ưu đãi
      </h1>
      <StyledSlider autoplay {...settings}>
        {renderEvent()}
      </StyledSlider>
    </div>
  );
}
