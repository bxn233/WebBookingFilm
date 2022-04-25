import React, { Fragment, useEffect, useState } from 'react'
import { CustomCard } from '@tsamantanis/react-glassmorphism'
import '../../assets/styles/circle.css'
import { Tabs, Radio, Space } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getThongTinLichChieuPhim } from '../../redux/actions/QuanLiRapAction';
import { Rate } from 'antd';
import { NavLink } from 'react-router-dom';
import moment from 'moment';

const { TabPane } = Tabs;
export default function Detail(props) {
  const dispatch = useDispatch()
  const { filmDetail } = useSelector(state => state.QuanLiPhimReducer)
  useEffect(() => {
    const { id } = props.match.params;
    dispatch(getThongTinLichChieuPhim(id))
    window.scrollTo(0, 0)
  }, [])
  console.log('filmDetail', filmDetail)
  console.log('danhGia', filmDetail.danhGia)
  return (
    <div style={{ backgroundImage: `url(${filmDetail.hinhAnh})`, minHeight: '100vh', width: '100%', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
      <CustomCard
        style={{ minHeight: '100vh' }}
        effectColor="#000" // required
        color="#000" // default color is white
        blur={10} // default blur value is 10px
        borderRadius={0} // default border radius value is 10px
      >
        <div className='container flex align-middle justify-around'>
          <div className='w-2/3'>

            <section className="text-gray-600 body-font overflow-hidden">
              <div className="container lg:px-5 pt-24 pb-10 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">

                  <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-96 object-cover object-center rounded-xl px-2" src={filmDetail.hinhAnh} />
                  <div className="lg:w-1/2 w-full lg:px-5 lg:py-6 mt-6 lg:mt-0 rounded-xl h-auto lg:h-auto p-10" style={{ backgroundColor: 'rgba(0, 0,0, 0.3)' }}>
                    <h1 className=" text-2xl title-font font-medium mb-1 text-shadow-sm h-16" style={{ color: 'rgb(192, 182, 135)' }}>{filmDetail.tenPhim}</h1>
                    <div className="flex mb-4">
                      <Rate allowHalf defaultValue={0} style={{ fontSize: '20px', color: 'orange' }} />
                      <span className="hidden ml-3 pl-3 py-2 border-l-2 lg:flex border-gray-200 space-x-2s">
                        <a style={{ color: 'rgb(253,252, 240)' }}>
                          <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                          </svg>
                        </a>
                        <a style={{ color: 'rgb(253,252, 240)' }}>
                          <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                          </svg>
                        </a>
                        <a style={{ color: 'rgb(253,252, 240)' }}>
                          <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                          </svg>
                        </a>
                      </span>
                    </div>
                    <p className="leading-relaxed text-justify text-shadow-sm overflow-hidden h-60" style={{ color: 'rgb(253,252, 240)' }}>{filmDetail.moTa ? (filmDetail.moTa.length > 350 ? <span>{filmDetail.moTa.slice(0, 350)}...</span> : <span>{filmDetail.moTa}</span>) : ''}</p>
                    <div className="flex">
                      <button className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:opacity-70 rounded">Play Trailer</button>
                      <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                          <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className='w-1/3 py-40 flex-col hidden lg:flex'>
            <div className={`mx-auto c100 p${filmDetail.danhGia * 10} orange ml-40`} >
              <span>{filmDetail.danhGia * 10}%</span>
              <div className="slice">
                <div className="bar" />
                <div className="fill" />
              </div>
            </div>
            <div className="flex mb-4">
              <Rate disabled allowHalf value={filmDetail.danhGia / 2} style={{ color: 'orange' }} />
            </div>
          </div>
        </div>
        <div className='container flex justify-center'>
          <div className=" w-full p-5 rounded-lg" style={{ backgroundColor: 'rgb(253,252, 240)' }}>
            <Tabs defaultActiveKey="1" style={{ minHeight: '130px' }}>
              <TabPane tab="Lịch chiếu" key="1">
                <Tabs tabPosition='left'  >
                  {filmDetail.heThongRapChieu?.map((heThongRap, index) => {
                    return <TabPane tab={<div className='flex align-middle md:w-48'>
                      <img src={heThongRap.logo} className="rounded-full" width="50" alt={heThongRap.maHeThongRap} />
                      <span className='items-center ml-4 hidden md:flex'>{heThongRap.tenHeThongRap}</span>
                    </div>} key={index}>
                      <Tabs defaultActiveKey="2">
                        <TabPane tab={<div className='w-28'>
                          <h2>Thứ 2</h2>
                          <span>17</span>
                        </div>} key="1">

                        </TabPane>
                        <TabPane tab={<div className='w-28'>
                          <h2>Thứ 3</h2>
                          <span>18</span>
                        </div>} key="2">
                          {heThongRap.cumRapChieu?.map((cumRap, index) => {
                            return <div key={index} className='lg:flex w-full py-5 border-b-2 border-gray-200 flex-wrap'>
                              <div className='lg:w-1/5 w-full flex items-center lg:mb-0 mb-2'>
                                <img src={cumRap.hinhAnh} className='lg:w-3/5 w-full  lg:h-5/6 h-28 object-cover' alt={cumRap.maCumRap} />
                              </div>
                              <div className=' lg:w-4/5 w-full lg:pr-20'>
                                <h2>{cumRap.tenCumRap}</h2>
                                <p>{cumRap.diaChi}</p>
                                <div className='grid grid-cols-5 gap-3'>
                                  {cumRap.lichChieuPhim?.slice(0, 5).map((lich, index) => {
                                    return <Fragment key={index}>
                                      <NavLink className='bg-green-500 text-center p-1 text-white hover:bg-white hover:text-green-500 border-2 hover:border-gray-200 border-green-500 rounded-xl' to={`/checkout/${lich.maLichChieu}`}>
                                        {moment(lich?.ngayChieuGioChieu).format('hh:mm A')}
                                      </NavLink>
                                    </Fragment>
                                  })}
                                </div>
                              </div>
                            </div>
                          })}
                        </TabPane>
                        <TabPane tab={<div className='w-28'>
                          <h2>Thứ 4</h2>
                          <span>19</span>
                        </div>} key="3">

                        </TabPane>
                        <TabPane tab={<div className='w-28'>
                          <h2>Thứ 5</h2>
                          <span>20</span>
                        </div>} key="4">

                        </TabPane>
                      </Tabs>


                    </TabPane>
                  })}
                </Tabs>
              </TabPane>
              <TabPane tab="Thông tin" key="2">
                Content of Tab Pane 2
              </TabPane>
              <TabPane tab="Đánh giá" key="3">
                Content of Tab Pane 3
              </TabPane>
            </Tabs>

          </div>

        </div>


      </CustomCard>

    </div>
  )
}
