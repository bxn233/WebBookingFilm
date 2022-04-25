import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Slider from "react-slick";
import { SET_DANH_SACH_PHIM_DANG_CHIEU, SET_DANH_SACH_PHIM_SAP_CHIEU } from '../../redux/actions/type/QuanLiPhimType';
import Film from '../Film/Film';
import styleSlick from './MultipleSlick.module.css'

function SampleNextArrow(props) {

    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} ${styleSlick['slick-prev']}`}
            style={{ ...style, display: "block" }}
            onClick={onClick}
        >
        </div>

    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} ${styleSlick['slick-prev']}`}

            style={{ ...style, display: "block", left: '-50px' }}
            onClick={onClick}
        >
        </div>
    );
}
export default function MultipleSlick(props) {

    const {dangChieu, sapChieu} = useSelector(state => state.QuanLiPhimReducer)
    console.log('SC_1', sapChieu)
    console.log('DC_1', dangChieu)

    let activeDC = dangChieu===true ? 'activeFilm' : 'noneActiveFilm';
    let activeSC = sapChieu===true ? 'activeFilm' : 'noneActiveFilm';

    console.log(activeDC, activeSC)

    const dispatch = useDispatch()
    const { danhSachPhim } = props
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "30px",
        slidesToShow: 5,
        speed: 500,
        rows: 2,
        slidesPerRow: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    const renderDanhSachPhim = () => {
        return danhSachPhim.map((phim, index) => (
            <div key={index} className='px-1'>
                <Film phim={phim} />
            </div>
        ))
    }
    return (
        <div>
            <div className='mb-5 overflow-hidden rounded-xl'>
                <img src='./img/movieselection.png' alt='movieselection' />
            </div>
            <button
                onClick={() => {
                    dispatch({
                        type: SET_DANH_SACH_PHIM_DANG_CHIEU
                    })
                }}
                type="button" className={` relative px-8 py-4 ml-4 overflow-hidden font-semibold rounded border-gray-800 border-2 mb-5 ${styleSlick[activeDC]}`}>Phim đang chiếu
                <span className="absolute top-0 right-0 px-5 py-1 text-xs tracking-wider text-center uppercase whitespace-no-wrap origin-bottom-left transform rotate-45 -translate-y-full translate-x-1/3 bg-red-500 mb-4">Hot</span>
            </button>
            <button
                onClick={() => {
                    dispatch({
                        type: SET_DANH_SACH_PHIM_SAP_CHIEU
                    })
                }}
                type="button" className={` relative px-8 py-4 ml-4 overflow-hidden font-semibold rounded border-gray-800 border-2 mb-5 ${styleSlick[activeSC]}`} >Phim sắp chiếu</button>
            <Slider {...settings}>
                {renderDanhSachPhim()}
            </Slider>
        </div>
    )
}
