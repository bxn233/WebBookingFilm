import { Rate } from "antd";
import React from "react";

const heThongRap = [
  {
    tenRap: "CGV",
    moTa: "Hệ thống rạp chiều lớn nhất Việt Nam",
    rate: 5,
    danhGia: 791,
    soLuong: 86,
    hinhAnh: 'https://momo.vn/_next/image?url=https%3A%2F%2Fstatic.mservice.io%2Fplacebrand%2Fs%2Fmomo-upload-api-190709165424-636982880641515855.jpg&w=96&q=75'
  },
  {
    tenRap: "Lotte Cinema",
    moTa: "Hệ thống rạp chiếu phim từ Hàn Quốc",
    rate: 5,
    danhGia: 975,
    soLuong: 48,
    hinhAnh: 'https://momo.vn/_next/image?url=https%3A%2F%2Fstatic.mservice.io%2Fblogscontents%2Fmomo-upload-api-210604170617-637584231772974269.png&w=96&q=75'
  },
  {
    tenRap: "Galaxy Cinema",
    moTa: "Mang Hollywood đến gần bạn",
    rate: 5,
    danhGia: 419,
    soLuong: 18,
    hinhAnh: 'https://momo.vn/_next/image?url=https%3A%2F%2Fstatic.mservice.io%2Fcinema%2Fmomo-upload-api-211123095138-637732578984425272.png&w=96&q=75'
  },
  {
    tenRap: "BHD Star",
    moTa: "Hệ thống rạp chiếu phim hiện đại",
    rate: 5,
    danhGia: 261,
    soLuong: 10,
    hinhAnh: 'https://momo.vn/_next/image?url=https%3A%2F%2Fstatic.mservice.io%2Fblogscontents%2Fmomo-upload-api-210604170453-637584230934981809.png&w=96&q=75'
  },
  {
    tenRap: "Cinestar",
    moTa: "Hệ thống rạp chiếu phim giá rẻ, hiện đại bậc nhất",
    rate: 5,
    danhGia: 482,
    soLuong: 6,
    hinhAnh: 'https://momo.vn/_next/image?url=https%3A%2F%2Fstatic.mservice.io%2Fblogscontents%2Fmomo-upload-api-210604170530-637584231309495829.png&w=96&q=75'
  },
  {
    tenRap: "Mega GS",
    moTa: "Rạp chiếu phim tiêu chuẩn quốc tế tại Việt Nam",
    rate: 5,
    danhGia: 163,
    soLuong: 2,
    hinhAnh: 'https://momo.vn/_next/image?url=https%3A%2F%2Fstatic.mservice.io%2Fblogscontents%2Fmomo-upload-api-210604170511-637584231119272266.png&w=96&q=75'
  },
];

export default function HeThongRapChieu() {
  return (
    <div
      className="pt-12 pb-16"
      style={{ backgroundColor: "#222" }}
    >
      <h2
        className="w-full text-center text-2xl lg:text-3xl font-bold"
        style={{ color: "rgb(192, 182, 135)" }}
      >
        Hệ thống rạp chiếu phim
      </h2>
      <p className="text-lg text-center font-normal text-white">
        Danh sách hệ thống rạp chiếu phim lớn có mặt khắp cả nước
      </p>
      <div className="container flex flex-wrap">
        {heThongRap.map((rap, index) => {
          return (
            <div key={index} className="w-full sm:w-1/2 p-2">
              <div
                className="bg-white flex rounded-lg pb-3 items-center cursor-pointer hover:scale-105"
                style={{ border: "1px solid rgba(0,0,0,0.1)", transition: 'all 0.3s ease-in-out'}}
              >
                <div className="w-2/12 flex items-center justify-center">
                  <img
                    src={rap.hinhAnh}
                    alt="cgv"
                    width={70}
                    height={70}
                  />
                </div>
                <div className="w-10/12">
                  <h2
                    className="pt-2 text-xl  font-black"
                    style={{ color: "rgb(192, 182, 135)" }}
                  >
                    {rap.tenRap}
                  </h2>
                  <p className="text-sm text-gray-400 mb-1 ">
                    {rap.moTa}
                  </p>
                  <div className="mb-1 flex items-center">
                    <Rate
                      disabled
                      allowHalf
                      value={rap.rate}
                      style={{ color: "orange", fontSize: "12px" }}
                    />
                    <span className="text-sm text-gray-400 ml-3">
                      {rap.danhGia} đánh giá
                    </span>
                  </div>
                  <div>
                    <i
                      className="fa fa-map-marker text-gray-400 mr-3"
                      style={{ fontSixe: "12px" }}
                    ></i>
                    <span className="text-sm text-gray-400">{rap.soLuong} rạp</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
