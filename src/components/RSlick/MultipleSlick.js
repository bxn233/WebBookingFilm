import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { set } from "lodash";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import danhSachPhimStatic from '../../assets/data/danhSachPhim.json'
import {
  SET_DANH_SACH_PHIM_DANG_CHIEU,
  SET_DANH_SACH_PHIM_SAP_CHIEU,
} from "../../redux/actions/type/QuanLiPhimType";
import Film from "../Film/Film";
import styleSlick from "./MultipleSlick.module.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styleSlick["slick-prev"]}`}
      style={{ ...style }}
      onClick={onClick}
    >
      <RightOutlined />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styleSlick["slick-prev"]}`}
      style={{ ...style }}
      onClick={onClick}
    >
      <LeftOutlined />
    </div>
  );
}
export default function MultipleSlick(props) {
  const [slick, setSlick] = useState("");
  //   const { dangChieu, sapChieu } = useSelector(
  //     (state) => state.QuanLiPhimReducer
  //   );
  //   console.log("SC_1", sapChieu);
  //   console.log("DC_1", dangChieu);

  //   let activeDC = dangChieu === true ? "activeFilm" : "noneActiveFilm";
  //   let activeSC = sapChieu === true ? "activeFilm" : "noneActiveFilm";

  //   console.log(activeDC, activeSC);

  const dispatch = useDispatch();
  const { danhSachPhimDefault, dangChieu, url, title, colorTitle } = props;
  let index = danhSachPhimStatic.content.findIndex(phim => phim.maPhim === 10494)
  if(index !== -1) {
    danhSachPhimStatic.content.splice(index, 1)
  }
  console.log('danhSachPhimDefault', danhSachPhimDefault)
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "35px",
    slidesToShow: 5,
    speed: 500,
    rows: 1,
    slidesPerRow: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const renderDanhSachPhim = () => {
    return danhSachPhimStatic.content
      .filter((phim) => phim.dangChieu === dangChieu)
      .map((phim, index) => (
        <div key={index} className="px-1">
          <Film phim={phim} />
        </div>
      ));
  };

  const controlSlick = (e) => {
    setSlick(e);
  };
  return (
    <div
      style={{
        height: 600,
      }}
    >
      <div
        className=""
        style={{
          backgroundImage: `${url}`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          padding: "50px 0 60px 0",
          height: '100%'
        }}
      >
        {/* <div className="mb-5 overflow-hidden rounded-xl">
        <img src="./img/movieselection.png" alt="movieselection" />
      </div>
      <button
        onClick={() => {
          dispatch({
            type: SET_DANH_SACH_PHIM_DANG_CHIEU,
          });
        }}
        type="button"
        className={` relative px-8 py-4 ml-4 overflow-hidden font-semibold rounded border-gray-800 border-2 mb-5 ${styleSlick[activeDC]}`}
      >
        Phim đang chiếu
        <span className="absolute top-0 right-0 px-5 py-1 text-xs tracking-wider text-center uppercase whitespace-no-wrap origin-bottom-left transform rotate-45 -translate-y-full translate-x-1/3 bg-red-500 mb-4">
          Hot
        </span>
      </button>
      <button
        onClick={() => {
          dispatch({
            type: SET_DANH_SACH_PHIM_SAP_CHIEU,
          });
        }}
        type="button"
        className={` relative px-8 py-4 ml-4 overflow-hidden font-semibold rounded border-gray-800 border-2 mb-5 ${styleSlick[activeSC]}`}
      >
        Phim sắp chiếu
      </button> */}

        <div className="container relative">
          <div
            className=" absolute"
            style={{ zIndex: "20", left: "8.7%", top: "50%" }}
          >
            <SamplePrevArrow
              className="text-black bg-white flex items-center justify-center p-3 shadow-lg cursor-pointer"
              style={{ fontSize: "30px", borderRadius: "999px" }}
              onClick={() => slick.slickPrev()}
            />
          </div>
          <div
            className=" absolute"
            style={{ zIndex: "20", right: "8.7%", top: "50%" }}
          >
            <SampleNextArrow
              className="text-black bg-white flex items-center justify-center p-3 shadow-lg cursor-pointer"
              style={{ fontSize: "30px", borderRadius: "999px" }}
              onClick={() => slick.slickNext()}
            />
          </div>
          <h1
            className="w-full text-center text-2xl lg:text-3xl font-bold mb-10"
            style={{ color: `${colorTitle}` }}
          >
            {title}
          </h1>
          <div className="w-full">
            <Slider ref={(e) => controlSlick(e)} {...settings}>
              {renderDanhSachPhim()}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}
