"use client";
import { Swiper as SwiperObject } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Navigation, Thumbs } from "swiper/modules";
import { useState } from "react";
import Image from "next/image";

import { ProductImage } from "@/interfaces/productImage";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./slideshow.css";

export const ProductDetailImage = ({
  productImage,
}: {
  productImage: ProductImage[];
}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperObject>();

  return (
    <div className="px-5 lg:px-10 -z-10">
      <Swiper
        style={
          {
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          } as React.CSSProperties
        }
        spaceBetween={10}
        navigation={true}
        autoplay={{
          delay: 2500,
        }}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs, Autoplay]}
        className="mySwiper2"
      >
        {productImage?.map((image, idx) => (
          <SwiperSlide key={idx}>
            {
              <Image
                width={1024}
                height={800}
                src={image.url}
                alt={image.folder}
                className="object-fill"
              />
            }
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {productImage?.map((image, idx) => (
          <SwiperSlide key={idx}>
            {
              <Image
                width={300}
                height={350}
                src={image.url}
                alt={image.folder}
                className="object-fill"
              />
            }
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
