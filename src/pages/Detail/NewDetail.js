import React, { useEffect } from "react";
import HomeIcon from "@mui/icons-material/Home";
import TheatersIcon from "@mui/icons-material/Theaters";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import MovieIcon from "@mui/icons-material/Movie";
import { NavLink } from "react-router-dom";
import { Breadcrumbs, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getThongTinLichChieuPhim } from "../../redux/actions/QuanLiRapAction";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Rate } from "antd";
import { AimOutlined, DownOutlined } from "@ant-design/icons";
import { styled } from "@mui/material/styles";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import TabDetailChild from "./TabDetailChild";
import { getDanhSachPhimAction } from "../../redux/actions/QuanLiPhimAction";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import moment from "moment";
import danhSachPhimStatic from '../../assets/data/danhSachPhim.json'

const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  "& .MuiTabs-indicator": {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  "& .MuiTabs-indicatorSpan": {
    maxWidth: 60,
    width: "100%",
    backgroundColor: "transparent",
  },
  borderBottom: "1px solid #ccc",
});
const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    fontWeight: 700,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(0),
    color: "rgba(0, 0, 0,0.7)",
    "&.Mui-selected": {
      color: "rgb(192, 182, 135)",
    },
    "&.Mui-focusVisible": {
      backgroundColor: "#fff",
    },
    paddingTop: theme.typography.pxToRem(10),
  })
);
export default function NewDetail(props) {
  const dispatch = useDispatch();

  const { danhSachPhimDefault } = useSelector(
    (state) => state.QuanLiPhimReducer
  );

  const { filmDetail } = useSelector((state) => state.QuanLiPhimReducer);

  let index = danhSachPhimDefault?.findIndex(phim => phim.maPhim === filmDetail.maPhim) 
  if(index !== -1) {
    danhSachPhimDefault.splice(index,1)
  }

  useEffect(() => {
    const { id } = props.match.params;
    dispatch(getThongTinLichChieuPhim(id));
    dispatch(getDanhSachPhimAction());
    window.scrollTo(0, 0);
  }, []);

  console.log("filmDetail", filmDetail);

  const [value, setValue] = React.useState("0");

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  const renderDanhSachPhim = () => {
    return danhSachPhimStatic.content
      .filter((phim) => phim.dangChieu === true)
      .slice(0, 6)
      .map((phim, index) => (
        <div onClick={() => {
          console.log('id', phim.maPhim)
          dispatch(getThongTinLichChieuPhim(phim.maPhim));
          window.scrollTo(0, 0);
        }}  key={index} className="my-2 p-2 cursor-pointer">
          <div
            
            className="flex rounded-lg hover:scale-105"
            style={{ backgroundColor: "#333", transition: "all 0.3s ease-out" }}
          >
            <img
              src={phim.hinhAnh}
              alt={phim.maPhim}
              className="w-20 rounded-l-lg"
              style={{minHeight:'128px'}}
            />
            <div className="p-2 flex flex-col justify-between">
              <div>
                <h3
                  className="text-base font-bold"
                  style={{ color: "rgb(192, 182, 135)" }}
                >
                  {phim.tenPhim}
                </h3>
                <p className="text-sm text-white">
                  Ngày chiếu: {moment(phim.ngayKhoiChieu).format("DD/MM/YYYY")}
                </p>
              </div>
              <div className="flex items-center text-white">
                <ThumbUpIcon style={{ fontSize: "16px", color: "rgb(192, 182, 135)" }} className='mr-2' />
                <span className="text-base ">{phim.danhGia * 10}</span>%
              </div>
            </div>
          </div>
        </div>
      ));
  };

  const newFilmDetail = danhSachPhimStatic.content.filter(film => film.maPhim.toString() === props.match.params.id)[0]
  console.log('nfd', newFilmDetail)
  return (
    <div className="lg:pt-20 pt-0" style={{ backgroundColor: "#222" }}>
      {/* BreadBcrumbs */}
      <div className="container py-3" role="presentation">
        <Breadcrumbs
          separator={
            <span>
              <ArrowForwardIosIcon
                style={{ color: "rgb(192, 182, 135)", fontSize: "12px" }}
              />
            </span>
          }
          aria-label="breadcrumb"
        >
          <NavLink to="/" className="flex items-center hover:underline">
            <HomeIcon
              className=" mr-1"
              style={{ fontSize: "24px", color: "rgb(192, 182, 135)" }}
            />
          </NavLink>
          <NavLink to="/news" className="flex items-center">
            <TheatersIcon
              className=" mr-1"
              style={{ fontSize: "20px", color: "rgb(192, 182, 135)" }}
            />
            <span className="text-white text-sm">Lịch chiếu</span>
          </NavLink>
          <Typography
            sx={{ display: "flex", alignItems: "center" }}
            color="text.primary"
          >
            <MovieIcon
              sx={{ mr: 0.5 }}
              fontSize="inherit"
              style={{ color: "rgb(192, 182, 135)" }}
            />
            <span className="text-sm text-white">
              {newFilmDetail.tenPhim?.length > 10
                ? `${newFilmDetail.tenPhim.slice(0, 10)}...`
                : newFilmDetail.tenPhim}
            </span>
          </Typography>
        </Breadcrumbs>
      </div>

      {/* Detail */}
      <div
        style={{
          backgroundImage: `url(${newFilmDetail.maPhim === 1854 ? 'https://upload.wikimedia.org/wikipedia/en/7/73/Fifty_Shades_of_Grey_poster.jpg': newFilmDetail.bg})`,
          height: "600px",
          width: "100%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          style={{ backgroundColor: "rgba(0,0,0,0.8)" }}
          className="w-full h-full"
        >
          <div className="container h-full flex ">
            <div className="h-full flex items-center relative w-3/12">
              <img
                src={newFilmDetail.maPhim === 1854 ? 'https://upload.wikimedia.org/wikipedia/en/7/73/Fifty_Shades_of_Grey_poster.jpg': newFilmDetail.hinhAnh}
                width={260}
                height={380}
                alt={newFilmDetail.maPhim}
              />
              <div
                width={100}
                height={100}
                className="absolute left-1/2"
                style={{ transform: "translateX(-50%)" }}
              >
                <PlayArrowIcon
                  className="text-gray-50 hover:scale-110 cursor-pointer rounded-full"
                  style={{
                    fontSize: "70px",
                    transition: "all 0.3s ease-out",
                    border: "2px solid #fff",
                  }}
                  onClick={() => {
                    dispatch({
                      type: "DISPLAY_TRAILER",
                      url: newFilmDetail.trailer,
                    });
                  }}
                />
              </div>
            </div>
            <div className="py-12 pl-8 h-full w-9/12 flex">
              <div className="lg:w-3/5 w-full rounded-xl py-4 flex flex-col justify-between h-full">
                <div>
                  <span
                    className="text-white p-1 rounded-lg"
                    style={{ backgroundColor: "rgb(155, 35, 35)" }}
                  >
                    C18
                  </span>
                  <h1
                    className=" text-4xl text-white font-bold my-2 text-shadow-sm"
                    style={{ color: "rgb(192, 182, 135)" }}
                  >
                    {newFilmDetail.tenPhim}
                  </h1>
                  <div className="flex mb-2 items-center">
                    <span
                      className="px-2 py-1 rounded-lg font-black mr-2 text-base text-gray-900"
                      style={{ backgroundColor: "rgb(245,197,24)" }}
                    >
                      IMDb
                    </span>
                    <span className="text-base text-white font-bold">
                      <span className="text-lg">{newFilmDetail.danhGia}</span>/10
                    </span>
                  </div>
                  <div className="flex">
                    <Rate
                      allowHalf
                      defaultValue={0}
                      style={{ fontSize: "20px", color: "orange" }}
                    />
                    <span className="hidden ml-3 pl-3 py-2 border-l-2 lg:flex border-gray-200 space-x-2s">
                      <a style={{ color: "rgb(192, 182, 135)" }}>
                        <svg
                          fill="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                        </svg>
                      </a>
                      <a style={{ color: "rgb(192, 182, 135)" }}>
                        <svg
                          fill="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                        </svg>
                      </a>
                      <a style={{ color: "rgb(192, 182, 135)" }}>
                        <svg
                          fill="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                        </svg>
                      </a>
                    </span>
                  </div>
                  <h2
                    className="text-2xl font-bold "
                    style={{ color: "rgb(192, 182, 135)" }}
                  >
                    Nội dung
                  </h2>
                  <p
                    className="leading-relaxed text-justify text-shadow-sm overflow-hidden"
                    style={{ color: "rgb(253,252, 240)" }}
                  >
                    {newFilmDetail.moTa}
                  </p>
                </div>

                <div className="flex justify-start">
                  <button
                    className="flex text-white bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 border-0 py-2 px-6 focus:outline-none hover:opacity-70 rounded"
                    onClick={() => {
                      dispatch({
                        type: "DISPLAY_TRAILER",
                        url: newFilmDetail.trailer,
                      });
                    }}
                  >
                    Play Trailer
                  </button>
                  <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="w-2/5 pl-20 flex-col hidden lg:flex justify-center">
                <h1
                  className="text-3xl pl-3 font-bold"
                  style={{ color: "rgb(192, 182, 135)" }}
                >
                  Rating
                </h1>
                <div
                  className={`mx-auto c100 p${
                    newFilmDetail.danhGia * 10
                  } orange ml-40`}
                >
                  <span>{newFilmDetail.danhGia * 10}%</span>
                  <div className="slice">
                    <div className="bar" />
                    <div className="fill" />
                  </div>
                </div>
                <div className="flex mb-4">
                  <Rate
                    disabled
                    allowHalf
                    value={newFilmDetail.danhGia / 2}
                    style={{ color: "orange" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lich chiếu phim */}
      <div className="container flex mt-5">
        <div className="lg:w-2/3 w-full">
          <div className="flex items-center justify-between flex-wrap  mb-5">
            <h1
              className="md:text-3xl text-2xl font-bold w-full lg:w-fit p-0 m-0 mb-4"
              style={{ color: "rgb(192, 182, 135)" }}
            >
              Lịch chiếu {newFilmDetail.tenPhim}
            </h1>
            <div className="flex text-base p-2 items-center w-full lg:w-fit mb-4">
              <span className="mr-5 text-white">Vị trí</span>
              <div
                className="flex items-center h-12 px-3 border-2 border-gray-300 rounded-lg mr-5"
                style={{ borderColor: "rgb(192, 182, 135)" }}
              >
                <i
                  className="fa fa-map-marker mr-2"
                  style={{ fontSize: "30px", color: "rgb(192, 182, 135)" }}
                ></i>
                <span className="text-white">Bà Rịa - Vũng Tàu</span>
                <DownOutlined
                  style={{ fontSize: "12px", color: "rgb(192, 182, 135)" }}
                />
              </div>
              <div
                className="flex items-center h-12 px-3 border-2 border-gray-300 rounded-lg"
                style={{ borderColor: "rgb(192, 182, 135)" }}
              >
                <AimOutlined
                  style={{
                    fontSize: "20px",
                    color: "rgb(192, 182, 135)",
                    marginRight: "8px",
                  }}
                />
                <span className="text-white">Gần bạn</span>
              </div>
            </div>
          </div>
          <div className="border-2 border-gray-300 rounded-lg bg-white">
            <Box sx={{ width: "100%", typography: "body1" }}>
              <TabContext value={value}>
                <Box sx={{ width: "100%" }}>
                  <StyledTabs value={value} onChange={handleChange}>
                    {filmDetail.heThongRapChieu?.map((rap, index) => {
                      return (
                        <StyledTab
                          key={index}
                          value={index.toString()}
                          icon={
                            <div
                              className="focus:border-red-400 border-2 border-gray-200 flex items-center justify-center mb-2 rounded-xl"
                              style={{
                                width: 50,
                                height: 50,
                                borderColor: `${
                                  index.toString() === value
                                    ? "rgb(192, 182, 135)"
                                    : ""
                                }`,
                              }}
                            >
                              <img
                                src={rap.logo}
                                className="rounded-full"
                                width="35"
                                alt={rap.maHeThongRap}
                              />
                            </div>
                          }
                          label={
                            rap.tenHeThongRap === "cgv"
                              ? "CGV"
                              : rap.tenHeThongRap.length > 8
                              ? `${rap.tenHeThongRap.slice(0, 8)}...`
                              : rap.tenHeThongRap
                          }
                        />
                      );
                    })}
                  </StyledTabs>
                </Box>
                {filmDetail.heThongRapChieu?.map((heThongRap, index) => {
                  console.log("a", heThongRap.cumRapChieu);
                  return (
                    <TabPanel
                      value={index.toString()}
                      key={index}
                      style={{ padding: 0 }}
                    >
                      <TabDetailChild cumRapChieu={heThongRap.cumRapChieu} />
                    </TabPanel>
                  );
                })}
              </TabContext>
            </Box>
          </div>
          <hr className="mt-12" />
          <div className="mt-10">
            <h2
              className="text-2xl font-bold"
              style={{ color: "rgb(192, 182, 135)" }}
            >
              Cộng đồng MBO Cinema nghĩ gì?
            </h2>
            <p className="text-base text-white">Chưa có bình luận</p>
          </div>
          <hr className="mt-10" />
          <div className="my-10 flex flex-wrap">
            <h2
              className="w-full text-2xl font-bold mb-5"
              style={{ color: "rgb(192, 182, 135)" }}
            >
              Diễn viên và đoàn làm phim
            </h2>
            <div className="flex px-1 flex-col items-center w-1/5">
              <img
                className="rounded-full w-24 h-24 object-cover object-center"
                src="https://img-cache.coccoc.com/image?url=https://upload.wikimedia.org/wikipedia/commons/e/e8/Chris_Hemsworth_by_Gage_Skidmore_2_(cropped).jpg&f=w"
                alt="dienvien"
              />
              <p className="text-base text-white mt-2">Chris Hemsworth</p>
            </div>
            <div className="flex px-1 flex-col items-center w-1/5">
              <img
                className="rounded-full w-24 h-24 object-cover object-center"
                src="https://cdn.vox-cdn.com/thumbor/dVsnOnMizyCQMUGAT6Vb6WBiByY=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/18314696/1141751041.jpg.jpg"
                alt="dienvien"
              />
              <p className="text-base text-white mt-2">Scarlett Johansson</p>
            </div>
            <div className="flex px-1 flex-col items-center w-1/5">
              <img
                className="rounded-full w-24 h-24 object-cover object-center"
                src="https://img-cache.coccoc.com/image?url=https://upload.wikimedia.org/wikipedia/commons/1/11/Mark_Ruffalo_(36201774756)_(cropped).jpg&f=w"
                alt="dienvien"
              />
              <p className="text-base text-white mt-2">Mark Ruffalo</p>
            </div>
            <div className="flex px-1 flex-col items-center w-1/5">
              <img
                className="rounded-full w-24 h-24 object-cover object-center"
                src="https://api.time.com/wp-content/uploads/2014/03/479748569.jpg"
                alt="dienvien"
              />
              <p className="text-base text-white mt-2">Chris Evans</p>
            </div>
            <div className="flex px-1 flex-col items-center w-1/5">
              <img
                className="rounded-full w-24 h-24 object-cover object-center"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvQAk2v-cHJUj1KK_XF6X0K1g6i52qXJIW9w&usqp=CAU"
                alt="dienvien"
              />
              <p className="text-base text-white mt-2">Robert Downey</p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 hidden lg:block px-10">
          <h1
            className="md:text-3xl text-2xl font-bold mt-3 mb-7 text-center"
            style={{ color: "rgb(192, 182, 135)" }}
          >
            Phim đang chiếu
          </h1>
          {renderDanhSachPhim()}
        </div>
      </div>
    </div>
  );
}
