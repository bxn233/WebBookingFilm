import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MultipleSlick from '../../components/RSlick/MultipleSlick'
import { getDanhSachPhimAction } from '../../redux/actions/QuanLiPhimAction'
import { getDanhSachRapAction } from '../../redux/actions/QuanLiRapAction'
import NewHomeCarousel from '../../templates/Layout/HomeCarousel/NewHomeCarousel'
import EventHome from './Events/EventHome'
import HomeMenu from './HomeMenu/HomeMenu'

export default function Home(props) {


  const danhSachPhim = useSelector(state => state.QuanLiPhimReducer.danhSachPhim)
  const { heThongRapChieu } = useSelector(state => state.QuanLiRapReducer)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getDanhSachPhimAction())
    dispatch(getDanhSachRapAction())
    window.scrollTo(0, 0)
  }, [])
  return (
    <div style={{ backgroundColor: '#222' }}>
      <NewHomeCarousel />
      <div className='container mt-5'>
        <MultipleSlick danhSachPhim={danhSachPhim} />
        <HomeMenu heThongRapChieu={heThongRapChieu} />
        <div className='overflow-hidden mb-5 rounded-xl mt-5' style={{height: 200}}>

          <img src='./img/event.png' alt='event' style={{ width: '100%' }} className=' object-cover' />
        </div>
        <EventHome />
      </div>
    </div>
  )
}