import React from 'react'
import Slider from "react-slick";

const settings = {
    customPaging: function (i) {
        return (
            <i className="fa fa-circle text-yellow-400"></i>
        );
    },
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    dotsClass: "slick-dots slick-thumb",
};

const arrImgEvent = [
    {
        id: 1,
        hinhAnh: 'https://www.bhdstar.vn/wp-content/uploads/2018/03/Web-HappyDay.png'
    },
    {
        id: 2,
        hinhAnh: 'https://www.bhdstar.vn/wp-content/uploads/2018/03/Suat-Khuya-Web.jpg'
    },
    {
        id: 3,
        hinhAnh: 'https://www.bhdstar.vn/wp-content/uploads/2018/03/U22-web-1.png'
    },
    {
        id: 4,
        hinhAnh: 'https://www.bhdstar.vn/wp-content/uploads/2018/03/Package-U22.png'
    },


]

export default function EventHome() {

    const renderEvent = () => {
        return arrImgEvent.map((item, index) => (
            <div key={index} className='px-4 rounded-xl overflow-hidden'>
                <div style={{ ...settings, background: `url(${item.hinhAnh}) 100% center no-repeat`, height: '220px', width: '100%', backgroundSize: 'cover' }} className='rounded-xl overflow-hidden'>
                    <img src={item.hinhAnh} className="opacity-0" alt={item.hinhAnh} />
                </div>
            </div>
        ))
    }
    return (
        <div className='pb-10 mt-5'>
            <Slider autoplay {...settings}>
                {renderEvent()}
            </Slider>
        </div>
    )
}
