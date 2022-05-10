import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "./Navigation.css";
export default function Navigation() {
  let { isDisplay } = useSelector((state) => state.NavigationReducer);
  let classActive = isDisplay === true ? "active" : "";
  const dispatch = useDispatch();
  return (
    <div
      className={`lg:hidden fixed w-full h-full navigation_booking ${classActive}`}
      style={{ zIndex: 50 }}
    >
      <ul
        className=" absolute w-full flex flex-col pl-20 h-full pt-24"
        style={{ top: "0", right: 0, backgroundColor: "#222", zIndex: 50 }}
      >
        <li>
          <NavLink
            rel="noopener noreferrer"
            to="/"
            aria-label="Back to homepage"
            className="flex items-center"
            onClick={() => {
                dispatch({
                    type: 'DISPLAY_NAV'
                })
            }}
          >
            <div
              style={{
                backgroundImage:
                  "url(https://scontent.xx.fbcdn.net/v/t1.15752-9/278386001_1023995578242005_3548851327193131055_n.png?stp=dst-png_p206x206&_nc_cat=106&ccb=1-5&_nc_sid=aee45a&_nc_ohc=SWejTKIMQlMAX9gZIF2&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVIh47KWNuGtO7QwMiW2rCJVszAeeh7XuP-s3gZfOWzuWg&oe=6286AAFA)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <img
                src="https://scontent.xx.fbcdn.net/v/t1.15752-9/278386001_1023995578242005_3548851327193131055_n.png?stp=dst-png_p206x206&_nc_cat=106&ccb=1-5&_nc_sid=aee45a&_nc_ohc=SWejTKIMQlMAX9gZIF2&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVIh47KWNuGtO7QwMiW2rCJVszAeeh7XuP-s3gZfOWzuWg&oe=6286AAFA"
                style={{ color: "white", opacity: 0 }}
                className="w-44"
                alt="logoWeb"
              />
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink
            rel="noopener noreferrer"
            to="/home"
            className="inline-block text-3xl py-4 px-5 font-bold text-white"
            activeClassName="activeClassPose"
            onClick={() => {
              dispatch({
                type: "DISPLAY_NAV",
              });
            }}
          >
            Trang chủ
          </NavLink>
        </li>
        <li>
          <NavLink
            rel="noopener noreferrer"
            to="/contact"
            className="inline-block text-3xl py-4 px-5 font-bold text-white"
            activeClassName="activeClassPose"
            onClick={() => {
              dispatch({
                type: "DISPLAY_NAV",
              });
            }}
          >
            Liên hệ
          </NavLink>
        </li>
        <li>
          <NavLink
            rel="noopener noreferrer"
            to="/news"
            className="inline-block text-3xl py-4 px-5 font-bold text-white"
            activeClassName="activeClassPose"
            onClick={() => {
              dispatch({
                type: "DISPLAY_NAV",
              });
            }}
          >
            Tin tức
          </NavLink>
        </li>
        <li>
          <NavLink
            rel="noopener noreferrer"
            to="/application"
            className="inline-block text-3xl py-4 px-5 font-bold text-white"
            activeClassName="activeClassPose"
            onClick={() => {
              dispatch({
                type: "DISPLAY_NAV",
              });
            }}
          >
            Ứng dụng
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
