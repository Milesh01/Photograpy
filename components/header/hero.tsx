"use client"
import Slider from "react-slick";
import Image from "next/image";
import React, {useState } from "react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { motion, AnimatePresence } from "framer-motion";
import Particles from "../common/particles";

function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [direction, setDirection] = useState(1);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 1.1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    centerMode: true,
    centerPadding: "10%",
    autoplaySpeed: 3000,
    beforeChange: (current: number, next: number) => {
      setDirection(next > current ? 1 : -1);
      setActiveSlide(next);
    },
    responsive: [
      {
        breakpoint: 1024, // Tablet
        settings: {
          slidesToShow: 2,
          centerPadding: "5%",
        },
      },
      {
        breakpoint: 768, // Small tablets & large phones
        settings: {
          slidesToShow: 1,
          centerPadding: "5%",
        },
      },
      {
        breakpoint: 480, // Mobile devices
        settings: {
          slidesToShow: 1,
          centerPadding: "0%",
        },
      },
    ],
  };
  

  const sliderData = [
    {
      img: "https://img.freepik.com/free-photo/house-isolated-field_1303-23772.jpg",
      title: "Capturing the Wild: A Journey Through.",
      desc: "mk ajdna dk ja",
      heroImg: "https://img.freepik.com/free-photo/house-isolated-field_1303-23772.jpg?t=st=1743160843~exp=1743164443~hmac=695aa1623862e96e84d3f3d1c7e23f42fdf23ee6093aa5e8ed092ad992a87196&w=996"
    },
    {
      img: "https://img.freepik.com/free-photo/wide-shot-beautiful-architecture-modern-house_181624-3464.jpg?t=st=1743166059~exp=1743169659~hmac=e9e4a4bcd863247e201f18dda5c1db2abe267319b480fe3685489fd4f011f5c5&w=900",
      title: "Untamed Beauty: The Art of Wildlife Photography ",
      desc: "Second Slide Description",
      heroImg: "https://img.freepik.com/free-photo/wide-shot-beautiful-architecture-modern-house_181624-3464.jpg?t=st=1743166059~exp=1743169659~hmac=e9e4a4bcd863247e201f18dda5c1db2abe267319b480fe3685489fd4f011f5c5&w=900"
    },
    {
      img: "https://img.freepik.com/free-photo/way-white-house_1162-117.jpg?t=st=1743166088~exp=1743169688~hmac=ba348573a4bf346fb0fc8223e6827329dceef608f4e5e90514dff70711270000&w=996",
      title: "Raw & Real: The Magic of Wildlife Photography",
      desc: "Third Slide Description",
      heroImg: "https://img.freepik.com/free-photo/way-white-house_1162-117.jpg?t=st=1743166088~exp=1743169688~hmac=ba348573a4bf346fb0fc8223e6827329dceef608f4e5e90514dff70711270000&w=996"
    },
  ];

  const fadeVariants = {
    enter: { opacity: 0 },
    center: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const headingVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -50 : 50,
      opacity: 0,
    }),
  };

  return (
    <>
      <div className="relative lg:h-screen md:h-[800] h-[400] ">
        <div className="absolute lg:h-screen md:h-[800] h-[400] w-full">
          <Particles/>

        <AnimatePresence custom={direction} initial={false}>
        <motion.div
          key={activeSlide}
          custom={direction}
          variants={fadeVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.8 }}
          className="absolute inset-0 z-10"
        >
          <Image
            src={sliderData[activeSlide]?.heroImg}
            alt="hero background"
            fill
            className="object-cover rounded-xl"
            priority
          />
          <div className="absolute inset-0 bg-black/30" />
        </motion.div>
      </AnimatePresence>
        </div>
        <div className="container mx-auto relative z-20">
          <div className="absolute md:top-40 top-28">
           
             <div className="overflow-hidden md:mb-20 lg:ps-5">
            <AnimatePresence custom={direction} mode="wait">
              <motion.h1
                key={activeSlide}
                custom={direction}
                variants={headingVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5 }}
                className="md:text-5xl lg:text-7xl px-5 text-3xl text-white w-full lg:w-8/12 md:w-11/12"
              >
                {sliderData[activeSlide]?.title}
              </motion.h1>
            </AnimatePresence>

            <div className="md:mt-20 mt-10 w-full grid grid-cols-3">
              <div className="col-span-2 text-black py-5 text-xs  px-5 md:text-base">
                <div className="">
                  <span className="px-3 py-2 border rounded-full bg-white/50 hover:bg-white/70 transition-all cursor-pointer backdrop-blur-md me-2">
                    Landscape
                  </span>
                  <span className="px-3 py-2 border rounded-full bg-white/50 hover:bg-white/70 transition-all cursor-pointer backdrop-blur-md me-2">
                    Wildlife
                  </span>
                </div>
                <div className="md:mt-5 mt-7">
                  <span className="px-3 py-2 border rounded-full bg-white/50 hover:bg-white/70 transition-all cursor-pointer backdrop-blur-md me-2">
                    Travel
                  </span>
                  <span className="px-3 py-2 border rounded-full bg-white/50 hover:bg-white/70 transition-all cursor-pointer backdrop-blur-md me-2">
                    Portrait
                  </span>
                  <span className="px-3 py-2 border rounded-full bg-white/50 hover:bg-white/70 transition-all cursor-pointer backdrop-blur-md me-2">
                    Wildlife
                  </span>
                </div>
              </div>
              <div className="lg:col-span-1 col-span-3 md:px-0 px-5 lg:mt-0 mt-10 gap-10 text-black md:block hidden">
                <div className="">
                  <Slider  {...settings}>
                    {sliderData.map((item, index) => (
                      <div key={index} className="px-3">
                        <div className="p-5 border rounded-md bg-white/50 backdrop-blur-md flex">
                          <Image
                            src={item.img}
                            width={1000}
                            height={1000}
                            alt="Slide Image"
                            className="w-20 h-20 object-cover rounded-lg"
                          />
                          <div className="md:ml-3">
                            <p className="text-sm font-semibold">{item.title}</p>
                            {/* <p className="text-sm text-gray-600">{item.desc}</p> */}
                          </div>
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;