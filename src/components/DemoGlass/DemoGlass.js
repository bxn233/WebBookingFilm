

import { use, useSprings, useTransition } from 'react-spring'
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons'


import React, { useCallback, useEffect, useRef, useState } from 'react'
const slides = [
  {
    url: "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg",
    title: "Lorem ipsum dolor sit amet",
    text:
      "Consectetur adipiscing elit. Cras euismod scelerisque nisl id viverra."
  },
  {
    url: "https://images.pexels.com/photos/2835562/pexels-photo-2835562.jpeg",
    title: "Mauris eget tincidunt metus",
    text:
      "Nec tempor mi. Aenean euismod nunc ligula, ut tincidunt elit pretium at. Integer a molestie purus. Aliquam erat volutpat. "
  },
  {
    url: "https://images.pexels.com/photos/300857/pexels-photo-300857.jpeg",
    title: "Nullam viverra est",
    text:
      "Vitae pulvinar tincidunt. Donec vel magna nunc. Cras pharetra cursus lectus, a pharetra orci iaculis non."
  },
  {
    url: "https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg",
    title: "Sed accumsan",
    text:
      "Condimentum leo, vel fermentum massa pulvinar vitae. Nam a felis libero. Fusce pellentesque dignissim finibus."
  },
  {
    url: "https://images.pexels.com/photos/2356087/pexels-photo-2356087.jpeg",
    title: "Praesent varius",
    text:
      "Massa vitae ornare vestibulum, ligula elit ultrices mi, nec scelerisque odio nulla ut eros."
  }
];
export default function Viewpager () {
  const [[index, dir], setIndex] = useState([0, 0]);
  const transRef = useRef();
  const transitions = useTransition(index, {
    ref: transRef,
    keys: index,
    from: {
      transform: `translate3d(${dir === 1 ? 100 : -100}%,0,0) scale(0.8)`
    },
    enter: {
      transform: "translate3d(0%,0,0) scale(1)"
    },
    leave: {
      transform: `translate3d(${dir === 1 ? -100 : 100}%,0,0) scale(0.8)`
    },
    config: { duration: 600 }
  });

  useEffect(() => {
    transRef.start();
  }, [index]);

  const handleNextSlide = useCallback(
    (dir) =>
      setIndex((state) => [
        (state[0] + dir + slides.length) % slides.length,
        dir
      ]),
    []
  )
  return (
    <div>
      {transitions((styles, i) => (
        <div style={styles}
          background={`url(${slides[i].url}?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)`}>
        </div>
      ))}
      <div>
        <ArrowLeftOutlined onClick={() => handleNextSlide(-1)} />
        <span>1</span>
        <span>2</span>
        <ArrowRightOutlined onClick={() => handleNextSlide(1)} />
      </div>
    </div>
  )
}


