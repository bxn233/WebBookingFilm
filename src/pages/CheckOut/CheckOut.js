import { CustomCard } from '@tsamantanis/react-glassmorphism'
import React, { Fragment, useEffect } from 'react'
import _ from 'lodash'
import { useDispatch, useSelector } from 'react-redux'
import { getChiTietPhongVe, datVeAction } from '../../redux/actions/QuanLiDatVeAction'
import styles from './CheckOut.module.css'
import { CloseOutlined, UserOutlined, CheckOutlined } from '@ant-design/icons'
import './CheckOut.css'
import { DAT_GHE, RESET_GHE_DANG_DAT } from '../../redux/actions/type/QuanLiDatVeType'
import { Tabs } from 'antd';
import { layThongTinTaiKhoanAction } from '../../redux/actions/QuanLiNguoiDungAction'
import moment from 'moment'


const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}
export default function CheckOut(props) {
  const dispatch = useDispatch()
  const { userLogin } = useSelector(state => state.QuanLiNguoiDungReducer)
  const { chiTietPhongVe, danhSachGheDangDat, danhSachGheNguoiKhacDat } = useSelector(state => state.QuanLiDatVeReducer)
  useEffect(() => {
    const { id } = props.match.params;
    dispatch(getChiTietPhongVe(id))
    dispatch(layThongTinTaiKhoanAction())
    window.scrollTo(0, 0)
    console.log('1')
  }, [])
  const val = React.useRef();
  React.useEffect(
    () => {
      val.current = props;
      dispatch({
        type:RESET_GHE_DANG_DAT
      })
    },
    [props]
  );
  const { thongTinPhim, danhSachGhe } = chiTietPhongVe
  const renderChoNgoi = () => {
    return danhSachGhe.map((ghe, index) => {

      let classGheVip = ghe.loaiGhe === 'Vip' ? 'gheVip' : ''

      let classGheDaDat = ghe.daDat === true & ghe.taiKhoanNguoiDat !== userLogin.taiKhoan ? 'gheDaDat' : '';
      let classGheDangDat = '';
      //Kiểm tra từng ghế render xem có trong mảng ghế đang đặt hay không
      let indexGheDD = danhSachGheDangDat.findIndex(gheDD => gheDD.maGhe === ghe.maGhe);

      let classGheDaDuocDat = ghe.taiKhoanNguoiDat === userLogin.taiKhoan ? 'gheDaDuocDat' : '';

      if (indexGheDD !== -1) {
        classGheDaDat = 'gheDangDat';
      }

      let classGheNguoiKhacDat = '';
      let indexGheKD = danhSachGheNguoiKhacDat.findIndex(gheKD => gheKD.maGhe === ghe.maGhe);
      if (indexGheKD !== -1) {
        classGheNguoiKhacDat= 'gheNguoiKhacDatDat';
      }
      return <Fragment key={index}>
        <button onClick={() => {
          dispatch({
            type: DAT_GHE,
            gheDuocChon: ghe
          })
        }} disabled={ghe.daDat} className={`ghe ${classGheDaDat} ${classGheVip} ${classGheDangDat}  ${classGheDaDuocDat}  ${classGheNguoiKhacDat}`}>
          {ghe.daDat === true ? ghe.taiKhoanNguoiDat === userLogin.taiKhoan ? <UserOutlined style={{ paddingBottom: '7px' }} /> : <CloseOutlined style={{ paddingBottom: '7px' }} /> : ghe.stt}
        </button>
        {(index + 1) % 16 === 0 ? <br /> : ''}
      </Fragment>
    })
  }


  /// Ket quả đặt vé khách hàng


  const { thongTinTaiKhoan } = useSelector(state => state.QuanLiNguoiDungReducer)
  console.log('thongTinTaiKhoan', thongTinTaiKhoan)

  return (
    <div className=' bg-no-repeat bg-cover' style={{ backgroundImage: 'url(https://farm8.staticflickr.com/7895/44769886330_e8106192e0_o.jpg)' }} >
      <CustomCard
        style={{ minHeight: '100vh', padding: 0 }}
        effectColor="#000" // required
        color="#000" // default color is white
        blur={10} // default blur value is 10px
        borderRadius={0} // default border radius value is 10px

      >
        <div className='pl-5'>
          <Tabs defaultActiveKey="1" onChange={callback}>
            <TabPane tab="01 CHỌN GHẾ & THANH TOÁN" key="1">
              <div className='grid grid-cols-12'>
                <div className='col-span-9 flex justify-center '>
                  <div className='w-4/5'>
                    <div className='h-4' style={{ backgroundColor: 'rgb(146, 141, 123)' }}></div>
                    <div className={styles.trapezoid}>
                      <span className='pt-3 block text-black'>Màn hình</span>
                    </div>
                    <div className='flex flex-wrap items-center' >
                      {renderChoNgoi()}
                    </div>

                    <div className="mt-5 flex justify-center">
                      <table className="w-3/4 bg-transparent">
                        <thead className=" p-5">
                          <tr>
                            <th className='w-1/5 text-white'>Ghế thường</th>
                            <th className='w-1/5 text-white'>Ghế đang đặt</th>
                            <th className='w-1/5 text-white'>Ghế vip</th>
                            <th className='w-1/5 text-white'>Ghế đã đặt</th>
                            <th className='w-1/5 text-white'>Ghế mình đặt</th>
                          </tr>
                        </thead>
                        <tbody className="">
                          <tr>
                            <td className='text-center'><button className="ghe text-center"> <CheckOutlined style={{ marginBottom: 7.5, fontWeight: 'bold' }} /> </button> </td>
                            <td className='text-center'><button className="ghe gheDangDat text-center"> <CheckOutlined style={{ marginBottom: 7.5, fontWeight: 'bold' }} /></button> </td>
                            <td className='text-center'><button className="ghe gheVip text-center"><CheckOutlined style={{ marginBottom: 7.5, fontWeight: 'bold' }} /></button> </td>
                            <td className='text-center'><button className="ghe gheDaDat text-center"> <CloseOutlined style={{ marginBottom: 7.5, fontWeight: 'bold' }} /> </button> </td>
                            <td className='text-center'><button className="ghe gheDaDuocDat text-center"> <UserOutlined style={{ marginBottom: 7.5, fontWeight: 'bold' }} /> </button> </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div className='col-span-3' style={{ backgroundColor: '#222' }}>
                  <div className='px-4'>
                    <div className=' bg-no-repeat bg-cover bg-center w-full h-40' style={{ backgroundImage: `url(${thongTinPhim.hinhAnh})` }} >
                    </div>
                    <h2 className=' text-xl pt-2' style={{ color: 'rgb(192, 182, 135)' }}>{thongTinPhim.tenPhim}</h2>
                    <p className='text-white'>Địa điểm: {thongTinPhim.diaChi}</p>
                    <p className='text-white'>Ngày chiếu: {thongTinPhim.ngayChieu} - {thongTinPhim.gioChieu} - {thongTinPhim.tenRap}</p>
                    <div className='grid grid-cols-12' style={{ borderTop: '1px solid rgb(192, 182, 135)', minHeight: '126px' }}>
                      <div className='col-span-1 text-xl flex items-center' style={{ color: 'rgb(192, 182, 135)' }}>Ghế</div>
                      <div className='col-span-8 flex flex-wrap pl-2'>

                        {_.sortBy(danhSachGheDangDat, ['stt']).map((gheDD, index) => {
                          return <span key={index} className='ghe gheDangDat flex justify-center items-center'>{gheDD.stt}</span>
                        })}
                      </div>
                      <div className='text-lg col-span-3 flex items-center' style={{ color: 'rgb(192, 182, 135)' }}>{danhSachGheDangDat.reduce((tongTien, gheDD, index) => tongTien += gheDD.giaVe, 0).toLocaleString()}đ</div>
                    </div>
                    <h3 className='pt-2 text-white' style={{ borderTop: '1px solid rgb(192, 182, 135)' }}>Email</h3>
                    <p className='text-white'>{userLogin.email}</p>
                    <h3 className='pt-2 text-white' style={{ borderTop: '1px solid rgb(192, 182, 135)' }}>Số điện thoại</h3>
                    <p className='text-white pb-2' style={{ borderBottom: '1px solid rgb(192, 182, 135)' }}>{userLogin.soDT}</p>
                  </div>
                  <button onClick={() => {

                    dispatch(datVeAction({
                      maLichChieu: props.match.params.id,
                      danhSachVe: danhSachGheDangDat
                    }))
                  }} className='w-full py-3  text-gray-600 text-lg font-bold hover:opacity-bg-70 mt-8' style={{ backgroundColor: 'rgb(192, 182, 135)' }}>Đặt vé</button>

                </div>
              </div>
            </TabPane>
            <TabPane tab="02 KẾT QUẢ ĐẶT VÉ" key="2">
              <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                  <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4" style={{ color: 'rgb(192, 182, 135)' }}>Lịch sử đặt vé khách hàng</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-white">Hãy kiểm tra thông tin địa chỉ và thời gian để xem phim vui vẻ bạn nhé.</p>
                  </div>
                  <div className="flex flex-wrap -m-2">
                    {thongTinTaiKhoan.thongTinDatVe?.map((ticket, index) => {
                      const seats = _.first(ticket.danhSachGhe);
                      return <div className="p-2 lg:w-1/3 md:w-1/2 w-full relative overflow-hidden ticketCard cursor-pointer" key={index}>
                        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg ticketImg">
                          <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={ticket.hinhAnh} />
                          <div className="flex-grow">
                            <h2 className="title-font font-medium text-xl" style={{ color: 'rgb(192, 182, 135)' }}>{ticket.tenPhim}</h2>
                            <p className="text-white"><span className="font-bold">Giờ chiếu:</span> {moment(ticket.ngayDat).format('hh:mm A')} - <span className="font-bold">Ngày chiếu:</span>  {moment(ticket.ngayDat).format('DD-MM-YYYY')} .</p>
                            <p className='text-white'><span className="font-bold">Địa điểm:</span> {seats.tenHeThongRap}   </p>

                          </div>
                        </div>
                        <div className='text-white ticketDescription border rounded-lg'>
                          <div className="font-bold h-1/4 flex justify-between">
                            <span>{seats.tenCumRap}</span>
                            <button className='px-2 bg-red-500 rounded-lg text-center m-0'>Hủy vé</button>
                          </div>
                          <div className='flex items-center h-3/4'>
                            <span className="font-bold w-1/12 mr-2 ">Ghế:</span>
                            <div className='w-11/12'>
                              {_.sortBy(ticket.danhSachGhe, ['tenGhe']).map((ghe, index) => { return <button className="ticketFilm" key={index}> {ghe.tenGhe} </button> })}
                            </ div>
                          </ div>
                        </div>
                      </div>
                    })}

                  </div>
                </div>
              </section>


            </TabPane>
          </Tabs>
        </ div>


      </CustomCard>



    </div>
  )
}


