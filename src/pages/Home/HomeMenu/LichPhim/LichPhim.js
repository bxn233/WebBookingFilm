import React, { Fragment } from 'react'
import styleLichPhim from './LichPhim.module.css'
import moment from 'moment'
import { NavLink } from 'react-router-dom'
export default function LichPhim(props) {
    const { phim } = props
    return (
        <figure className={styleLichPhim.movie}>
            <div className={styleLichPhim.movie__hero}>
                <img src={phim.hinhAnh ? phim.hinhAnh : './img/bgComing.jpg'} alt={phim.maPhim} className={styleLichPhim.movie__img} />
            </div>
            <div className={styleLichPhim.movie__content}>
                <div className={styleLichPhim.movie__title}>
                    <h1 className={styleLichPhim.heading__primary}>{phim.tenPhim}</h1>
                    <div className={`${styleLichPhim.movie__tag} ${styleLichPhim.movie__tag__1}`}>#action</div>
                    <div className={`${styleLichPhim.movie__tag} ${styleLichPhim.movie__tag__2}`}>#thriller</div>
                </div>
                <div className='grid grid-cols-5 gap-3'>
                    {phim.lstLichChieuTheoPhim?.slice(0, 5).map((lich, index) => (
                        <Fragment key={index}>
                            <NavLink className='bg-green-500 text-center p-1 text-white  hover:bg-white hover:text-green-500 border-2 hover:border-gray-200 border-green-500 rounded-xl'  to={`/checkout/${lich.maLichChieu}`}>
                                {moment(lich.ngayChieuGioChieu).format('hh:mm A')}
                            </NavLink>
                        </Fragment>
                    ))}
                </div>
            </div>
        </figure>

    )
}
