"use client"
import styles from "./Slider.module.css"
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import FooterSlider from "@/components/templates/publicPages/Footer/FooterSlider";
import { SliderProps } from "@/types/types";
import CompanyProduct from "@/components/modules/CompanyProduct/CompanyProduct";
import ProductCart from "@/components/modules/ProductCart/ProductCart";
import BannerBox from "@/components/templates/publicPages/BannerBox/BannerBox";
import InstantOffer from "@/components/templates/publicPages/InstantOffer/InstantOffer";
import ServiceBox from "@/components/templates/publicPages/ServiceBox/ServiceBox";
import SuggestedProductBox from "@/components/templates/publicPages/SuggestedProductBox/SuggestedProductBox";
import ArticleBox from "@/components/templates/publicPages/ArticleBox/ArticleBox";

function Slider({
  array,
  slide,
  isLoading,
  isSuccess,
  slidesPerView,
  autoplay,
  loop,
  spaceBetween,
  navigation,
  pagination,
}: SliderProps) {
  const slideComponents = {
    SuggestedProductBox: SuggestedProductBox,
    CompanyProduct: CompanyProduct,
    ArticleBox: ArticleBox,
    ProductCart: ProductCart,
    BannerBox: BannerBox,
    serviceBox: ServiceBox,
    instantOffer: InstantOffer,
    footerSlider: FooterSlider,
  };

  const selectSlide = (item: any | null) => {
    const SlideComponent = slideComponents[slide];
    if (SlideComponent) {
      return (
        <SlideComponent {...item} isLoading={isLoading} isSuccess={isSuccess} />
      );
    }
    return null;
  };

  return (
    <Swiper
      dir="rtl"
      pagination={slide === "instantOffer" ? { clickable: true } : false}
      slidesPerView={slidesPerView}
      spaceBetween={spaceBetween}
      loop={loop}
      navigation={navigation}
      autoplay={
        autoplay && {
          delay: 3000,
          disableOnInteraction: false,
        }
      }
      breakpoints={
        slidesPerView && slidesPerView > 1
          ? {
              300: {
                slidesPerView:
                  slide === "serviceBox" || slide === "footerSlider" ? 2 : 1,
              },
              480: {
                slidesPerView:
                  slide === "SuggestedProductBox"
                    ? 1
                    : slide === "serviceBox" || slide === "footerSlider"
                    ? 3
                    : 2,
              },
              576: {
                slidesPerView:
                  slide === "SuggestedProductBox" ||
                  slide === "ArticleBox" ||
                  slide === "ProductCart"
                    ? 2
                    : slide === "serviceBox"
                    ? 5
                    : slide === "footerSlider"
                    ? 4
                    : 3,
              },
              768: {
                slidesPerView:
                  slide === "serviceBox" || slide === "footerSlider"
                    ? 6
                    : slide === "SuggestedProductBox" ||
                      slide === "ProductCart" ||
                      slide === "ArticleBox"
                    ? 3
                    : 4,
              },
              992: {
                slidesPerView:
                  slide === "serviceBox" || slide === "footerSlider"
                    ? 7
                    : slidesPerView - 1,
              },
              1100: {
                slidesPerView: slidesPerView,
              },
              1200: {
                slidesPerView: slidesPerView,
              },
            }
          : {}
      }
      modules={[Autoplay, Pagination, Navigation]}
      className={styles.customSwiper}
    >
      {isSuccess &&
        array?.map((item, index) => {
          return (
            <SwiperSlide key={item.id ?? index}>
              {selectSlide(item)}
            </SwiperSlide>
          );
        })}

      {/* {isLoading &&
        Array(slidesPerView ?? 1)
          .fill(0)
          .map(() => <SwiperSlide key={nanoid()}>{selectSlide(null)}</SwiperSlide>)} */}
    </Swiper>
  );
}

export default Slider;
