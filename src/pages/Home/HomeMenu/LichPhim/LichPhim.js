import React, { Fragment } from 'react'
import styleLichPhim from './LichPhim.module.css'
import moment from 'moment'
import { NavLink } from 'react-router-dom'
export default function LichPhim(props) {
    const { phim } = props
    const hinhAnh = phim.maPhim === 1331 ? 'https://znews-photo.zadn.vn/Uploaded/xbhunku/2016_01_10/eC3xhc4.jpg': phim.maPhim === 1451 ? 'https://m.media-amazon.com/images/M/MV5BMmRlYmE0Y2UtNDk2Yi00NzczLWEwZTEtZmE2OTcyYzcxYmU5XkEyXkFqcGdeQXVyNTMxMjgxMzA@._V1_.jpg' : phim.hinhAnh
    return (
        <figure className={styleLichPhim.movie}>
            <div className={styleLichPhim.movie__hero}>
                <img src={hinhAnh} alt={phim.maPhim} className={styleLichPhim.movie__img} />
            </div>
            <div className={styleLichPhim.movie__content}>
                <span className='text-base text-white bg-gray-300 w-fit p-1 mt-2 rounded-md' style={{backgroundColor: 'rgb(232, 128, 33)'}}>C16</span>
                <div className={styleLichPhim.movie__title}>
                    <span className={styleLichPhim.heading__primary}>{phim.tenPhim}</span>
                    <div className={`${styleLichPhim.movie__tag} ${styleLichPhim.movie__tag__1}`}>#action</div>
                    <div className={`${styleLichPhim.movie__tag} ${styleLichPhim.movie__tag__2}`}>#thriller</div>
                </div>
                <h2 className='text-sm  font-bold text-gray-500 mb-5'>2D Phụ đề</h2>
                <div className='grid grid-cols-5 gap-3'>
                    {phim.lstLichChieuTheoPhim?.slice(0, 5).map((lich, index) => (
                        <Fragment key={index}>
                            <NavLink className='hover:bg-blue-500 text-center p-1 hover:text-white  bg-white text-blue-500 border-2 border-blue-500 rounded-lg' style={{border: '1px solid'}} to={`/checkout/${lich.maLichChieu}`}>
                                {moment(lich.ngayChieuGioChieu).format('hh:mm A')}
                            </NavLink>
                        </Fragment>
                    ))}
                </div>
            </div>
        </figure>

    )
}
