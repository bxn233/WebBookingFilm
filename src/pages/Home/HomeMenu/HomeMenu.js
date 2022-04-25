import React from 'react'
import { Tabs } from 'antd';
import LichPhim from './LichPhim/LichPhim';

const { TabPane } = Tabs;

export default function HomeMenu(props) {

    const { heThongRapChieu } = props


    console.log('danhSachRap', heThongRapChieu)

    const renderDanhSachRap = () => {
        return heThongRapChieu.map((rap, index) => {
            const { lstCumRap } = rap
            console.log('lstCumRap', lstCumRap)
            return <TabPane tab={<img src={rap.logo} className="rounded-full" width="50" alt={rap.maHeThongRap} />} key={index}>
                <Tabs defaultActiveKey="0" tabPosition="left">
                    {lstCumRap?.slice(0, 4).map((cumRap, index) => (
                        <TabPane tab={<div className="mt-2 group flex h-20 border-b-2 border-gray-200 text-left overflow-hidden " key={index} style={{ width: 350 }}>
                            <img src='https://www.cgv.vn/media/site/cache/1/980x415/b58515f018eb873dafa430b6f9ae0c1e/4/_/4.jpg' alt={cumRap.maCumRap} className=" object-cover h-10 w-10 rounded mr-4" />
                            <div className="space-y-2">
                                <h3 style={{color: 'rgb(192, 182, 135)'}} className="text-sm font-semibold " >{cumRap.tenCumRap}</h3>
                                <span className="text-xs" style={{color: 'rgb(192, 182, 135)'}}>{cumRap.diaChi.length > 50 ? <span>{cumRap.diaChi.slice(0, 50)}...</span> : <span>{cumRap.diaChi}</span>}</span>
                            </div>
                        </div>} key={index}>
                            {cumRap.danhSachPhim?.slice(3, 6).map((phim, index) => {
                                return <LichPhim phim={phim} key={index} />
                            })}
                        </TabPane>
                    ))}
                </Tabs>
            </TabPane>
        })
    }
    return (
        <div className='mt-5' >
            <div className='h-40 overflow-hidden rounded-xl my-5 flex items-center py-3'>
                <img src='./img/cinema.png' alt='cinema' className='w-full  object-cover' />

            </div>
            <div className='relative'>
                
            <div className='rounded-2xl shadow-xl ' style={{filter: 'blur(3px)', background: `url(https://farm8.staticflickr.com/7895/44769886330_e8106192e0_o.jpg) 100% center no-repeat` }}>
                <div className='p-10 opacity-0' style={{ width: '100%', height: '100%', backgroundColor: 'rgb(0, 0, 0, 0.6)', color: 'rgb(192, 182, 135)' }}>
                    <Tabs defaultActiveKey="1">
                        {renderDanhSachRap()}
                    </Tabs>
                </div>

            </div>
            <div className='rounded-2xl p-10 absolute top-0 left-0 right-0' style={{ width: '100%', height: '100%', backgroundColor: 'rgb(0, 0, 0, 0.6)', color: 'rgb(192, 182, 135)' }}>
                <Tabs defaultActiveKey="1">
                    {renderDanhSachRap()}
                </Tabs>
            </div>
            </div>
        </div>
    )
}
