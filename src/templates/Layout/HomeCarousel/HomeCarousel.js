import React, { useEffect } from 'react'
import { Carousel } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import { getCarouselAction } from '../../../redux/actions/CarouselActions';
const contentStyle = {
  height: '600px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  backgroundPosition: 'center',
  backgroundSize: '100%',
  backgroundRepeat: 'no-repeat'

};

export default function HomeCarousel() {

  let { bannerList } = useSelector(state => state.CarouselReducer)
  console.log('bannerList', bannerList)
  const dispatch = useDispatch()

  useEffect(() => {

    dispatch(getCarouselAction())

  }, [])
  const renderBanner = () => {
    return bannerList.map((item, index) => (
      <div key={index}>
        <div style={{ ...contentStyle, backgroundImage: `url(${item.hinhAnh})` }}>
          <img src={item.hinhAnh} className="opacity-0" alt={item.hinhAnh} />
        </div>
      </div>
    ))
  }
  return (
    <Carousel autoplay effect="fade" style={{ width: '100%', padding: 0, margin: 0 }}>
      {renderBanner()}
    </Carousel>
  )
}
