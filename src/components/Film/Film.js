import React, { useState } from 'react'
import styleCardFilm from './Film.module.css'
import { history } from '../../App'
import { useDispatch } from 'react-redux'
import { getThongTinLichChieuPhim } from '../../redux/actions/QuanLiRapAction'
export default function Film(props) {
    const dispatch = useDispatch()
    const { phim } = props
    return (
        <div className={styleCardFilm.card}>
            <img src={phim.hinhAnh} alt={phim.maPhim} />
            <div className={styleCardFilm.descriptions}>
                <button style={{width: '90%'}} className=' mb- py-3 text-white outline-none'>
                    Trailer
                </button>
                <button style={{width: '90%'}} onClick={() => {
                    dispatch(getThongTinLichChieuPhim(phim.maPhim))
                    history.push(`/detail/${phim.maPhim}`)
                }
                } className=' mt-3  py-3 text-white outline-none'>
                    Đặt vé
                </button>
            </div>
        </div>

    )
}
