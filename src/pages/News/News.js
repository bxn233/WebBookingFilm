import {
  ArrowRightOutlined,
  ClockCircleOutlined,
  CommentOutlined,
} from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDanhSachPhimAction } from "../../redux/actions/QuanLiPhimAction";
import StarIcon from "@mui/icons-material/Star";
import ReactPlayer from "react-player";
const arrFilm = [
  {
    tenPhim: "Morbius",
    day: "April 3, 2022",
    comment: "1 Comment",
    rate: 3,
    noiDung: `There’s a pungency to the corporate desperation with which Sony
    continue to seek a means to exist in the world of IP universes.
    An existence outwit their family friendly frolics with the
    Marvel machine. Surprise success with Venom might have hinted at
    a code cracked but Morbius brings things back to square one. Or,
    rather, Daniel Espinosa’s infeasibly bland entry into the ‘Sony
    Spider-Man Universe’ exposes a studio still stuck in an tiresome
    past. Put simply, the big players in this game have long since
    abandoned so rote an approach to origins story tentpoles. Venom
    had the same faults but found salvation in the sheer force of
    its comic character. Morbius offers neither comic relief nor
    character.`,
    hinhAnh:
      "https://thefilm742.files.wordpress.com/2022/04/img_4516.jpg?w=768&h=425&crop=1",
  },
  {
    tenPhim: "THE BATMAN",
    day: "MARCH 6, 2022",
    comment: "2 COMMENTS",
    rate: 3,
    noiDung: `Only Spider-Man rivals DC’s caped crusader when it 
    comes to the sheer quantity of screen adaptations in recent 
    years. Go back to the last century, however, and even the web 
    slinger is dwarfed. The arrival of Robert Pattinson on the scene 
    appears to officially call time on the reign of Ben Affleck. Before Aflleck, there was Christian Bale. 
    Prior to he: George Clooney, Val Kilmer and Michael Keaton. We are, of course, talking Batman.`,
    hinhAnh:
      "https://thefilm742.files.wordpress.com/2022/03/img_4230.jpg?w=768&h=425&crop=1",
  },
  {
    tenPhim: "PAW PATROL: THE MOVIE",
    day: "AUGUST 13, 2021",
    comment: "LEAVE A COMMENT",
    rate: 3,
    noiDung: `Less kiddie fare than cultural landmark, PAW Patrol seemed almost
     to leap from obscurity to phenomenon overnight when in launched in 2013.
      You may not know their names but there can be few left who don’t recognise 
      the pups from Adventure Bay on sight. Now graduating to the big screen, Chase, 
      Skye, Ryder and crew show no signs of slowing their domination. It’s not hard to 
      see why. They’re cute, likeable and kinda cool. While youngsters will lap up the film’s 
      slapstick humour and derring-do, parents may find comfort in the pups’ more thoughtful 
      approach to saving the world.`,
    hinhAnh:
      "https://thefilm742.files.wordpress.com/2021/08/paw_patrol_movie_3-e1628837252955.jpg?w=768&h=425&crop=1",
  },
];

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}
function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}
export default function News() {
  // lấy dữ liệu từ redux
  const { danhSachPhimDefault } = useSelector(
    (state) => state.QuanLiPhimReducer
  );
  const { height, width } = useWindowDimensions();
  const [length, setLength] = useState(24);
  // gửi sự kiện lên redux
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDanhSachPhimAction());
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    if (width < 1024) {
      setLength(14);
    } else {
      setLength(22);
    }
  }, [width]);
  const headerImg = danhSachPhimDefault
    ?.slice(0, length)
    .reduce((arrImg, { hinhAnh, maPhim }) => {
      arrImg.push({
        hinhAnh: hinhAnh,
        maPhim: maPhim,
      });
      return arrImg;
    }, []);

  console.log("headerImg", headerImg);

  const reanderHeaderImg = () => {
    return headerImg.map((phim, index) => {
      return (
        <div
          key={index}
          style={{ backgroundImage: `url(${phim.hinhAnh})` }}
          className="bg-cover bg-no-repeat bg-center rounded-md"
        >
          <img src={phim.hinhAnh} alt={phim.maPhim} className="opacity-0" />
        </div>
      );
    });
  };

  const renderStar = (number) => {
    let arrayStar = [];
    for (let i = 0; i < number; i++) {
      arrayStar.push(i);
    }
    return arrayStar;
  };
  return (
    <div className="lg:pt-20 pt-0" style={{ backgroundColor: "#222" }}>
      <h1
        className="w-full text-center text-2xl lg:text-3xl mt-10 font-bold mb-5 "
        style={{
          color: "rgb(192, 182, 135)",
          fontFamily: '"Nunito", sans-serif',
        }}
      >
        Blog phim ảnh
      </h1>
      <h2 className="w-full text-center text-lg font-semibold mb-10 text-white">
        Tổng hợp và Review các bộ phim hot, bom tấn, phim chiếu rạp hay mỗi ngày
      </h2>
      {/* <div className="overflow-hidden h-92 relative">
        <div className="grid lg:grid-cols-11 grid-cols-7 lg:gap-3 gap-1 h-full">
          {reanderHeaderImg()}
        </div>
        <div className="flex flex-col items-center justify-end w-full h-2/3 absolute bottom-0 left-0" style={{backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0),rgba(0,0,0,0.7), rgba(0,0,0,1))'}}>
          <h2 className="text-2xl font-bold text-white">BEST FEEL-GOOD MOVIES</h2>
          <div
            style={{
              backgroundImage:
                "url(https://scontent.xx.fbcdn.net/v/t1.15752-9/278386001_1023995578242005_3548851327193131055_n.png?stp=dst-png_p206x206&_nc_cat=106&ccb=1-5&_nc_sid=aee45a&_nc_ohc=SWejTKIMQlMAX9gZIF2&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVIh47KWNuGtO7QwMiW2rCJVszAeeh7XuP-s3gZfOWzuWg&oe=6286AAFA)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className='lg:w-48 w-32 mb-10'
          >
            <div className="lg:w-48 w-32 md:h-20 h-16">

            </div>
            </div>
        </div>
      </div> */}
      <div className="container flex">
        <div className="w-2/3">
          {arrFilm.map((item, index) => {
            return (
              <div className="w-full lg:pb-96  relative" key={index}>
                <div
                  style={{
                    backgroundImage: `url(${item.hinhAnh})`,
                  }}
                >
                  <img src={item.hinhAnh} alt="anhReview" />
                </div>
                <div
                  style={{
                    background: "#222",
                    top: "35%",
                    left: "50%",
                    transform: `translateX(${width > 1024 ? "-50%" : "0%"})`,
                  }}
                  className="w-4/5 lg:absolute p-5 left-0 rounded-lg"
                >
                  <h2 className="text-base text-white font-semibold">
                    Reviews
                  </h2>
                  <h1
                    className="text-2xl text-white font font-bold uppercase"
                    style={{
                      color: "rgb(192, 182, 135)",
                    }}
                  >
                    <span>{item.tenPhim}</span>
                    <span className="ml-2 pl-2 border-l-2 border-gray-400">
                      review
                    </span>
                  </h1>
                  <div className="flex flex-start items-center capitalize">
                    <div className="flex items-center">
                      <ClockCircleOutlined
                        style={{ color: "white", fontSize: "16px" }}
                      />
                      <span className="ml-2 font-sm text-white">
                        {item.day}
                      </span>
                    </div>
                    <div className="flex items-center ml-2">
                      <CommentOutlined
                        style={{ color: "white", fontSize: "16px" }}
                      />
                      <span className="ml-2 font-sm text-white">
                        {item.comment}
                      </span>
                    </div>
                  </div>
                  <div className="mt-2">
                    {renderStar(item.rate).map((item, index) => {
                      return (
                        <StarIcon
                          key={index}
                          style={{
                            fontSize: "16px",
                            color: "rgb(192, 182, 135)",
                          }}
                        />
                      );
                    })}
                  </div>
                  <p className="text-white font-base mt-2">{item.noiDung}</p>
                  <button
                    className="flex items-center hover:underline hover:text-gray-300 text-white"
                    style={{
                      color: "rgb(192, 182, 135)",
                    }}
                  >
                    <span className="mr-2">Continue reading</span>
                    <ArrowRightOutlined />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="w-1/3 mx-5">
          <h2 className="text-base font-semibold pt-2 text-white border-t-4 border-gray-100" style={{color: 'rgb(192, 182, 135)'}}>
            SUBSCRIBE TO BLOG VIA EMAIL
          </h2>
          <p className="text-white text-sm">
            Enter your email address to subscribe to this blog and receive
            notifications of new posts by email.
          </p>
          <p className="text-white">Join 2,448 other followers</p>
          <input
            className="w-full h-12 rounded-lg p-2 border-0 outline-none"
            placeholder="Enter hour email ..."
          />
          <button
            className=" p-2 rounded-lg mt-2"
            style={{ backgroundColor: "rgb(192, 182, 135)", color: "#222" }}
          >
            Subscribe
          </button>

          <h2 className="text-base font-semibold pt-2 text-white border-t-4 border-gray-100 mt-10" style={{color: 'rgb(192, 182, 135)'}}>
            RECENT POSTS
          </h2>

          <p className="mt-2 text-white text-md cursor-pointer">Fantastic Beasts: The Secrets of Dumbledore | Review</p>
          <hr />
          <p className="mt-2 text-white text-md cursor-pointer">Morbius | Review</p>
          <hr />
          <p className="mt-2 text-white text-md cursor-pointer">The Batman | Review</p>
          <hr />
          <p className="mt-2 text-white text-md cursor-pointer">The Matrix Resurrections | Review</p>

          <h2 className="text-base font-semibold pt-2 text-white border-t-4 border-gray-100 mt-10" style={{color: 'rgb(192, 182, 135)'}}>
            TRAILER OF WEEK
          </h2>

          <ReactPlayer
                url='https://youtu.be/__Gugj6R8F0'
                width="100%"
                height={200}
                controls={true}
                style={{marginTop: '20px'}}
              />
        </div>
      </div>
    </div>
  );
}
