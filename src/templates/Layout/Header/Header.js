
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { USER_LOGIN } from "../../../util/settings/config";
import {history} from '../../../App'
import "./Header.css";
export default function Header() {
  const renderNguoiDung = () => {
    if (localStorage.getItem(USER_LOGIN)) {
      const userLogin = JSON.parse(localStorage.getItem(USER_LOGIN));
      return (
        <div className="flex items-center">
          <img
            className="rounded-full"
            style={{ width: 36, height: 36 }}
            alt="userLogin"
            src="https://picsum.photos/200"
          />
          <span className="ml-2">{userLogin.hoTen}</span>
        </div>
      );
    }
    return (
      <Fragment>
        <NavLink
          rel="noopener noreferrer"
          to="/login"
          className="self-center px-8 py-3 rounded text-white"
        >
          Login
        </NavLink>
        <NavLink
          rel="noopener noreferrer"
          to="/signup"
          className="self-center px-8 py-3 rounded text-white"
        >
          Sign Up
        </NavLink>
      </Fragment>
    );
  };
  const dispatch = useDispatch()
  const {isDisplay} = useSelector(state => state.NavigationReducer)
  return (
    <header
      className="text-white bg-black bg-opacity-60 fixed w-full z-50 bg-center bg-cover"
      style={{backgroundImage: 'url(https://invisiblechildren.com/wp-content/uploads/2014/06/program-film-header.jpg)'}}
    >
      <div className="container  justify-between md:h-20 h-16 mx-auto  outline-none  lg:flex hidden">
        <NavLink
          rel="noopener noreferrer"
          to="/"
          aria-label="Back to homepage"
          className="flex items-center p-2 outline-none"
        >
          <div
            onClick={() => {
              history.push('/')
              window.scrollTo(0,0)
            }}
            style={{
              backgroundImage:
                "url(https://scontent.xx.fbcdn.net/v/t1.15752-9/278386001_1023995578242005_3548851327193131055_n.png?stp=dst-png_p206x206&_nc_cat=106&ccb=1-5&_nc_sid=aee45a&_nc_ohc=SWejTKIMQlMAX9gZIF2&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVIh47KWNuGtO7QwMiW2rCJVszAeeh7XuP-s3gZfOWzuWg&oe=6286AAFA)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="lg:w-36 w-32 md:h-20 h-16">

            </div>
          </div>
        </NavLink>
        <ul className="items-stretch hidden space-x-3 lg:flex mb-0">
          <li className="flex">
            <NavLink
              rel="noopener noreferrer"
              to="/home"
              className="h-full headerHover text-sm flex items-center px-4 -mb-1 dark:border-transparent dark:text-violet-400 dark:border-violet-400 text-white"
              activeClassName="border-b-2 border-white"
              
            >
              Trang chủ
            </NavLink>
          </li>
          <li className="flex">
            <NavLink
              rel="noopener noreferrer"
              to="/contact"
              className="h-full headerHover text-sm flex items-center px-4 -mb-1 dark:border-transparent text-white"
              activeClassName="border-b-2 border-white"
              
            >
              Liên hệ
            </NavLink>
          </li>
          <li className="flex">
            <NavLink
              rel="noopener noreferrer"
              to="/news"
              className="h-full headerHover text-sm flex items-center px-4 -mb-1 dark:border-transparent text-white"
              activeClassName="border-b-2 border-white"
              
            >
              Blog Phim ảnh
            </NavLink>
          </li>
        </ul>
        <div className="items-center flex-shrink-0 hidden lg:flex">
          {renderNguoiDung()}
        </div>
        <button className="h-full md:hidden flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 dark:text-coolGray-100"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      
      <button
      onClick={() => {
          dispatch({
              type: 'DISPLAY_NAV'
          })
      }}
        className="lg:hidden flex items-center absolute top-0 right-0 p-3"
        style={{ zIndex: 100, backgroundColor: 'rgb(192, 182, 135)' }}
      >
      {isDisplay === true ? <CloseOutlined style={{fontSize: '22px'}} /> : <MenuOutlined style={{fontSize: '22px'}} />}
      </button>
    </header>
  );
}
