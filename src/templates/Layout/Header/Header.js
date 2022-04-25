import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import { USER_LOGIN } from '../../../util/settings/config';
export default function Header() {

    const renderNguoiDung = () => {
        if (localStorage.getItem(USER_LOGIN)) {
            const userLogin = JSON.parse(localStorage.getItem(USER_LOGIN))
            return <div className='flex items-center'>
                <img className='rounded-full' style={{width: 36, height: 36}} alt='userLogin' src="https://picsum.photos/200" />
                <span className='ml-2'>{userLogin.hoTen}</span>
            </div>
        }
        return <Fragment>
            <NavLink rel="noopener noreferrer" to='/login' className="self-center px-8 py-3 rounded text-white">Login</NavLink>
            <NavLink rel="noopener noreferrer" to='/signup' className="self-center px-8 py-3 rounded text-white">Sign Up</NavLink>
        </Fragment>

    }
    return (
        <header className="shadow-2xl p-4 dark:bg-coolGray-800 dark:text-coolGray-100 text-white bg-black bg-opacity-60 fixed w-full z-50" >
            <div className="container flex justify-between h-16 mx-auto">
                <NavLink rel="noopener noreferrer" to='/' aria-label="Back to homepage" className="flex items-center p-2">
                    <img src='https://scontent.xx.fbcdn.net/v/t1.15752-9/278386001_1023995578242005_3548851327193131055_n.png?stp=dst-png_p206x206&_nc_cat=106&ccb=1-5&_nc_sid=aee45a&_nc_ohc=SWejTKIMQlMAX9gZIF2&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVIh47KWNuGtO7QwMiW2rCJVszAeeh7XuP-s3gZfOWzuWg&oe=6286AAFA' style={{ width: 160, color: 'white' }} alt='logoWeb' />
                </NavLink>
                <ul className="items-stretch hidden space-x-3 lg:flex">
                    <li className="flex">
                        <NavLink rel="noopener noreferrer" to='/home' className="text-sm flex items-center px-4 -mb-1 dark:border-transparent dark:text-violet-400 dark:border-violet-400 text-white" activeClassName='border-b-2 border-white'>Trang chủ</NavLink>
                    </li>
                    <li className="flex">
                        <NavLink rel="noopener noreferrer" to='/contact' className="text-sm flex items-center px-4 -mb-1 dark:border-transparent text-white" activeClassName='border-b-2 border-white'>Liên hệ</NavLink>
                    </li>
                    <li className="flex">
                        <NavLink rel="noopener noreferrer" to='/news' className="text-sm flex items-center px-4 -mb-1 dark:border-transparent text-white" activeClassName='border-b-2 border-white'>Tin tức</NavLink>
                    </li>
                    <li className="flex">
                        <NavLink rel="noopener noreferrer" to='/application' className="text-sm flex items-center px-4 -mb-1 dark:border-transparent text-white ">Ứng dụng</NavLink>
                    </li>
                </ul>
                <div className="items-center flex-shrink-0 hidden lg:flex">
                    {renderNguoiDung()}
                </div>
                <button className="p-4 lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-coolGray-100">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </header>

    )
}
