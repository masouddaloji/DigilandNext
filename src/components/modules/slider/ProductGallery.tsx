"use client";
import { MouseEvent, TouchEvent, useState } from "react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Thumbs, Zoom } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import styles from "./ProductGallery.module.css";
import Image from "next/image";

const ProductGallery = ({ array = [] }: { array: URL[] | undefined }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>();
  const swiperModules = [Zoom, Navigation, Thumbs, Autoplay];
  const [isShowMagnifier, setIsShowMagnifier] = useState(false);
  const [magnifierSrc, setMagnifierSrc] = useState<string | null>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = (src: string) => {
    setIsShowMagnifier(true);
    setMagnifierSrc(`http://localhost:8000${src}`);
    console.log(src);
    console.log("isShowMagnifier=>", isShowMagnifier);
  };

  const handleMouseLeave = () => {
    setIsShowMagnifier(false);
  };

  const handleMouseMove = (e:any) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    setPosition({ x, y });
    setCursorPosition({ x: e.pageX - left, y: e.pageY - top });
  };

  return (
    <div className="productGallery">
      <Swiper
        spaceBetween={15}
        // navigation={true}
        dir="rtl"
        zoom={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={swiperModules}
        className={styles.largSwiper}
        style={{ width: "100%" }}
      >
        {array?.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className={styles["slider-larg-img-box"]}
              onTouchStart={() => handleMouseEnter(item.toString())}
              onMouseEnter={() => handleMouseEnter(item.toString())}
              onTouchEnd={handleMouseLeave}
              onMouseLeave={handleMouseLeave}
              onTouchMove={handleMouseMove}
              onMouseMove={handleMouseMove}
            >
              <Image
                width={600}
                height={600}
                src={`http://localhost:8000${item}`}
                alt="product image"
                className={styles.product__largeImage}
              />
              {isShowMagnifier && (
                <div
                  style={{
                    position: "absolute",
                    left: `${cursorPosition.x - 70}px`,
                    top: `${cursorPosition.y - 70}px`,
                    pointerEvents: "none",
                  }}
                >
                  <div
                    className={styles.productGallery__magnifier_image}
                    style={{
                      backgroundImage: `url(${magnifierSrc})`,
                      backgroundPosition: `${position.x}% ${position.y}%`,
                    }}
                  ></div>
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={styles.product__smallImagesWrapper}>
        <Swiper
          onSwiper={setThumbsSwiper}
          dir="rtl"
          spaceBetween={15}
          slidesPerView={Math.min(5, array?.length)}
          watchSlidesProgress={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          className="smallSwiper"
          style={{ width: "100%" }}
          modules={[Autoplay]}
        >
          {array?.map((item, index) => (
            <SwiperSlide key={index}>
              <Image
                src={`http://localhost:8000${item}`}
                alt="product image"
                className={styles.product__smallImage}
                width={70}
                height={70}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ProductGallery;
