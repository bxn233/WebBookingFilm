import React from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import styleCarousel from "./NewHomeCarousel.module.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styleCarousel["slick-prev"]}`}
      style={{
        ...style,
        display: "block",
        position: "absolute",
        right: "100px",
        top: "45%",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styleCarousel["slick-prev"]}`}
      style={{
        ...style,
        display: "block",
        position: "absolute",
        left: "50px",
        top: "45%",
        zIndex: 10,
      }}
      onClick={onClick}
    />
  );
}
const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

export default function NewHomeCarousel() {
  let { bannerList } = useSelector((state) => state.CarouselReducer);
  console.log("newbannerList", bannerList);

  const renderBanner = () => {
    return bannerList.map((item, index) => (
      <div key={index} className='overflow-hidden h-48 md:h-64 lg:h-80 xl:h-96'>
        <div
          className="h-48 md:h-64 lg:h-80 xl:h-96 overflow-hidden"
          style={{
            ...settings,
            background: `url(${item.hinhAnh}) 100% center no-repeat`,
            width: "100%",
            backgroundSize: "cover",
          }}
        >
        </div>
      </div>
    ));
  };
  return (
    <div>
      <Slider autoplay {...settings}>
        {renderBanner()}
      </Slider>
    </div>
  );
}
