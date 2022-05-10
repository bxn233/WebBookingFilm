import React, { useEffect } from "react";
import CallIcon from "@mui/icons-material/Call";
import { Breadcrumbs, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function Contacts() {
  useEffect(() => {
    window.scrollTo(0, 0);

  }, [])
  return (
    <div className="pt-20" style={{ backgroundColor: "#222" }}>
      <h1
        className="w-full text-center text-2xl lg:text-3xl font-bold mt-10 mb-5 "
        style={{
          color: "rgb(192, 182, 135)",
          fontFamily: '"Nunito", sans-serif',
        }}
      >
        Thông tin liên hệ & Đóng góp ý kiến
      </h1>
      {/* breadcumbs */}
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
          <Typography
            sx={{ display: "flex", alignItems: "center" }}
            color="text.primary"
          >
            <CallIcon
              sx={{ mr: 0.5 }}
              fontSize="inherit"
              style={{ color: "rgb(192, 182, 135)" }}
            />
            <span className="text-sm text-white">Liên hệ</span>
          </Typography>
        </Breadcrumbs>
      </div>
      <div className="container mt-5 rounded-xl overflow-hidden pb-20">
        <section className="text-gray-600 body-font relative rounded-xl">
          <div className="absolute inset-0 bg-gray-300 rounded-xl">
            <iframe
              className="rounded-xl"
              width="100%"
              height="100%"
              frameBorder={0}
              marginHeight={0}
              marginWidth={0}
              title="map"
              scrolling="no"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d980.0170816771513!2d106.72000285938768!3d10.72921352833681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f652d5a6a2d%3A0xefc08315b5387d37!2sPhu%20My%20Hung%20Tower!5e0!3m2!1svi!2s!4v1645420229214!5m2!1svi!2s"
              style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
            />
          </div>
          <div className="container px-5 py-24 mx-auto flex ">
            <div
              className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md"
              style={{ backgroundColor: "#333" }}
            >
              <h2
                className=" text-xl font-bold mb-1 title-font"
                style={{ color: "rgb(192, 182, 135)" }}
              >
                Đóng góp ý kiến
              </h2>
              <p className="leading-relaxed mb-5 text-white">
                Nếu bạn có bất kì ý kiến đánh giá, góp ý thì hãy diền đầy đủ vào
                các mục dưới đây nhé !!!
              </p>
              <div className="relative mb-4">
                <label htmlFor="email" className="leading-7 text-sm text-white">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="message"
                  className="leading-7 text-sm text-white"
                >
                  Nội dung
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  defaultValue={""}
                />
              </div>
              <button
                className="text-white cursor-pointer  border-0 py-2 px-6 focus:outline-none hover:bg-opacity-80 rounded text-lg"
                style={{ backgroundColor: "rgb(192, 182, 135)" }}
              >
                Gửi
              </button>
              <p className="text-xs text-white mt-3">
                Trước khi gứi ý kiến đóng góp thí bạn nên kiểm tra thật kĩ Email
                nhé !!!
              </p>
            </div>
          </div>
        </section>
      </div>
      <div className="container grid lg:grid-cols-2 grid-cols-1 gap-3 pb-16">
        <div
          className="p-3 rounded-lg flex flex-col items-start h-fit"
          style={{ backgroundColor: "#333" }}
        >
          <h2
            className="text-2xl font-bold p-0 mb-4"
            style={{ color: "rgb(192, 182, 135)" }}
          >
            Liên hệ với MBO Cinema
          </h2>
          <p className="text-md text-white mr-2">
            Bạn đang gặp khó khăn cần được hỗ trợ hay cần đóng góp ý kiến cho bộ
            phận chăm sóc khách hàng? Hãy liên hệ với MBO Cinema qua bộ phận
            chăm sóc khách hàng. Chúng tôi sẽ giải quyết vấn đề của bạn nhanh
            nhất có thể!
          </p>
          <span className="text-white text-md mb-2">
            Hotline CSKH <span>24/7</span> (1000đ/phút)
          </span>
          <button
            style={{ border: "1px solid rgb(255, 255, 255" }}
            className="text-white p-2 rounded-lg mb-6"
          >
            <CallIcon
              className="mr-2"
              style={{ fontSize: "24", color: "rgb(192, 182, 135)" }}
            />
            Gọi ngay
          </button>
          <p className="text-white text-md mb-2">Email hỗ trợ</p>
          <span className="text-white text-md mb-2">bxn230399@gmail.com</span>
        </div>
        <div
          className="p-3 rounded-lg flex flex-col items-start h-fit"
          style={{ backgroundColor: "#333" }}
        >
          <h2
            className="text-2xl font-bold p-0 mb-4"
            style={{ color: "rgb(192, 182, 135)" }}
          >
            Địa chỉ
          </h2>
          <h3
            className="text-md font-semibold mb-4"
            style={{ color: "rgb(192, 182, 135)" }}
          >
            Tại TP.HCM
          </h3>
          <p className="text-md text-white mb-4">
            <span className="font-semibold text-gray-400">Trung tâm CSKH:</span> Tầng M, Tòa
            nhà Petroland, Số 12 Tân Trào, Phường Tân Phú, Quận 7, Thành phố Hồ
            Chí Minh
          </p>
          <p className="text-md text-white mb-4">
            <span className="font-semibold text-gray-400">Văn phòng:</span> Lầu 6, Toà nhà Phú
            Mỹ Hưng, số 8 Hoàng Văn Thái, khu phố 1, Phường Tân Phú, Quận 7,
            Thành phố Hồ Chí Minh
          </p>
          <span className="text-md text-white">Tel: <span style={{color: "rgb(192, 182, 135)"}} className='hover:underline hover:cursor-pointer'>0868-986-022</span></span>
        </div>
      </div>
    </div>
  );
}
