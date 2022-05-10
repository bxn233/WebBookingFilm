import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import DemoGlass from "../../components/DemoGlass/DemoGlass";
import MultipleSlick from "../../components/RSlick/MultipleSlick";
import { getDanhSachPhimAction } from "../../redux/actions/QuanLiPhimAction";
import { getDanhSachRapAction } from "../../redux/actions/QuanLiRapAction";
import NewHomeCarousel from "../../templates/Layout/HomeCarousel/NewHomeCarousel";
import EventHome from "./Events/EventHome";
import HeThongRapChieu from "./HeThongRapChieu/HeThongRapChieu";
import HomeMenu from "./HomeMenu/HomeMenu";
import Question from "./Question/Question";

export default function Home(props) {
  const { danhSachPhimDefault } = useSelector(
    (state) => state.QuanLiPhimReducer
  );
  console.log("danhSachPhim", danhSachPhimDefault);
  const { heThongRapChieu } = useSelector((state) => state.QuanLiRapReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDanhSachPhimAction());
    dispatch(getDanhSachRapAction());
    window.scrollTo(0, 0);
  }, []);
  return (
    <div style={{ backgroundColor: "#222" }} className='lg:pt-20 pt-0'>
      <NewHomeCarousel />
      {/* <div className='overflow-hidden mb-5 rounded-xl mt-5' style={{height: 'auto'}}>

          <img src='./img/event.png' alt='event' style={{ width: '100%' }} className=' object-cover' />
        </div> */}
      <div className="container">
        <EventHome />
      </div>
      <MultipleSlick
        danhSachPhimDefault={danhSachPhimDefault}
        dangChieu={true}
        url="url(https://static.mservice.io/img/momo-upload-api-210701105436-637607336767432408.jpg)"
        title="Phim đang chiếu"
        colorTitle="rgb(192, 182, 135)"
      />
      <MultipleSlick
        danhSachPhimDefault={danhSachPhimDefault}
        dangChieu={false}
        url=""
        title="Phim sắp chiếu"
        colorTitle="rgb(192, 182, 135)"
      />
      <HomeMenu heThongRapChieu={heThongRapChieu} />
      <HeThongRapChieu />
      <Question />
    </div>
  );
}
