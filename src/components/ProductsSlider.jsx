import "swiper/css";
import "swiper/css/free-mode";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay } from "swiper/modules";
import Card from "./Card";

export default function ProductsSlider() {
  const data = [
    {
      img: "/img8.jpg",
      name: "",
    },
    {
      img: "/img5.jpg",
      name: "",
    },
    {
      img: "/img6.jpg",
      name: "",
    },
    {
      img: "/img4.jpg",
      name: "",
    },
    {
      img: "/img1.jpg",
      name: "",
    },
    {
      img: "/img2.jpg",
      name: "",
    },
    {
      img: "/img3.jpg",
      name: "",
    },
    {
      img: "/img7.jpg",
      name: "",
    },
    {
      img: "/wood1.jpg",
      name: "",
    },
    {
      img: "/wood4.jpg",
      name: "",
    },
    {
      img: "/wood1.jpg",
      name: "",
    },
    {
      img: "/wood2.jpg",
      name: "",
    },
  ];
  return (
    <Swiper
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 5,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Autoplay]}
      className="w-[96%] h-[300px] xl:w-full"
    >
      {data.map((item, i) => (
        <SwiperSlide
          key={i}
          className="w-[200px] cursor-pointer overflow-hidden rounded-lg  hover:bg-slate-200 transition-all duration-300 ease-in"
        >
          <Card name={item.name} img={item.img} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
