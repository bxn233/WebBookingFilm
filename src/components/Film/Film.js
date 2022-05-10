import React from 'react'
import styleCardFilm from './Film.module.css'
import { history } from '../../App'
import { useDispatch } from 'react-redux'
import { getThongTinLichChieuPhim } from '../../redux/actions/QuanLiRapAction'
export default function Film(props) {
    const dispatch = useDispatch()
    const { phim } = props
    return (
        <div className={styleCardFilm.card}>
            <img src={phim.maPhim === 10434 ? `https://cinematone.info/public/poster/poster_2108/220331110708_E-Ong-Gia-Yeu-Ha_4LSxV.jpg`: phim.maPhim ===  1854 ?'https://upload.wikimedia.org/wikipedia/en/7/73/Fifty_Shades_of_Grey_poster.jpg':phim.hinhAnh} alt={phim.maPhim} />
            <div className={styleCardFilm.descriptions}>
                <button style={{width: '90%'}} className=' mb-3 h-12 text-white outline-none' onClick={() => {
                    dispatch({
                        type: 'DISPLAY_TRAILER',
                        url: phim.trailer
                    })
                }}>
                    <span className='w-full h-full'>Trailer</span>
                </button>
                <button style={{width: '90%'}} onClick={() => {
                    dispatch(getThongTinLichChieuPhim(phim.maPhim))
                    history.push(`/detail/${phim.maPhim}`)
                }
                } className=' mt-3  h-12 text-white outline-none'>
                    Đặt vé
                </button>
            </div>
        </div>

    )
}
