"use client";
import React from "react";
import styles from "@/styles/home.module.css";
import { useQuery } from "@tanstack/react-query";
import CompanyProduct from "@/components/modules/CompanyProduct/CompanyProduct";
import SectionHeader from "@/components/modules/SectionHeader/SectionHeader";
import { BiLayerPlus } from "react-icons/bi";
import Slider from "@/components/modules/slider/Slider";
import { AiFillApple } from "react-icons/ai";
import { ProductsProps } from "@/types/types";
import { banners, services, smallBanners } from "@/utils/Constants";
import Image from "next/image";
import Link from "next/link";
import { GrRss } from "react-icons/gr";
import { GetIndexPage, GetProducts } from "@/services/service";
export default function IndexPage() {
  const { data, isLoading, isSuccess } = useQuery({
    queryKey: ["indexPage"],
    queryFn: GetIndexPage,
  });

  return (
    <>
      {/* header slider */}
        <div className="row" >
          <div className="col-12 col-lg-9">
            <div className={styles.widget}>
              {/* banner */}
              <Slider
                isLoading={isLoading}
                isSuccess={isSuccess}
                spaceBetween={45}
                loop={true}
                // autoplay={true}
                navigation={true}
                array={banners}
                slide="BannerBox"
              />
            </div>
          </div>
          {/* instantOffer */}
          <div className={`col-lg-3 ${styles.hideninstantOffer}`}>
            <div className={styles.instantOffer__wrapper}>
              <Slider
                isLoading={isLoading}
                isSuccess={isSuccess}
                spaceBetween={10}
                pagination={true}
                loop={true}
                autoplay={true}
                array={data?.suddenlySeggestedProducts}
                slide="instantOffer"
              />
            </div>
          </div>
        </div>
      {/* services icon */}
      <div className="row">
        <div className="col">
          <Slider
            isLoading={isLoading}
            isSuccess={isSuccess}
            slidesPerView={8}
            spaceBetween={10}
            loop={true}
            autoplay={true}
            array={services}
            slide="serviceBox"
          />
        </div>
      </div>
      {/* amazin offer */}
      <section
        className={`${styles.amazinOffer} ${
          isLoading ? styles["amazinOffer--skeleton"] : null
        }`}
      >
        <div className="row">
          <div className="col-4 col-sm-3 col-md-2">
            <div className={styles.amazinOffer__imgBox}>
              {isLoading ? (
                // <Skeleton variant="rounded" width="100%" height="100%" />
                <span>loading...</span>
              ) : (
                <Image
                  src="/images/offer-spc.png"
                  width={400}
                  height={600}
                  alt="offer cover"
                  className={styles.amazinOffer__img}
                />
              )}
            </div>
          </div>
          <div className="col-8 col-sm-9 col-md-10">
            <Slider
              isLoading={isLoading}
              isSuccess={isSuccess}
              slidesPerView={4}
              spaceBetween={10}
              loop={true}
              navigation={true}
              autoplay={true}
              array={data?.wonderfulSeggestedProducts}
              slide="SuggestedProductBox"
            />
          </div>
        </div>
      </section>
      {/* banner  */}
      <section className={styles.bannerBoxes}>
        <div className="row">
          {
            isSuccess
              ? smallBanners.map((banner) => (
                  <div className="col col-md-4" key={banner.id}>
                    <div className="bannerBox">
                      <Link href={banner.link}>
                        <Image
                          width={400}
                          height={200}
                          src={banner.image}
                          alt="banner image"
                          className={styles.bannerBoxImg}
                        />
                      </Link>
                    </div>
                  </div>
                ))
              : null
            // Array(3)
            //     .fill(0)
            //     .map((item, index) => (
            //       <div className="col col-md-4" key={index + 1}>
            //         <Skeleton animation="wave" height="14rem" width="100%" />
            //       </div>
            //     ))
          }
        </div>
      </section>
      {/* new products */}
      <section className={styles.newProduct}>
        <div className="row">
          <div className="col">
            <SectionHeader
              title="جدیدترین محصولات"
              icon={<BiLayerPlus className="sectionHeader__icon" />}
              link="/"
              btnLink="/"
              bg="var(--main-backgroundColor)"
              isLoading={isLoading}
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Slider
              isLoading={isLoading}
              isSuccess={isSuccess}
              slidesPerView={5}
              spaceBetween={10}
              loop={true}
              navigation={true}
              array={data?.latestProducts}
              slide="ProductCart"
            />
          </div>
        </div>
      </section>
      {/* apple products */}
      <section className="appleProduct">
        <div className="row">
          <div className="col">
            <SectionHeader
              title="محصولات اپل"
              icon={<AiFillApple className="sectionHeader__icon" />}
              bg="var(--main-backgroundColor)"
              isLoading={isLoading}
            />
          </div>
        </div>
        <div className="row">
          {data?.latestApple.map((item: ProductsProps) => (
            <div className="col-12 col-md-6 col-lg-4" key={item._id}>
              <CompanyProduct
                {...item}
                isLoading={isLoading}
                isSuccess={isSuccess}
              />
            </div>
          ))}
        </div>
      </section>
      {/* articles */}
      <div className="aricles">
        <div className="row">
          <div className="col-12">
            <SectionHeader
              title="دانش نامـه"
              link="/articles"
              btnLink="/articles"
              bg="var(--main-backgroundColor)"
              icon={<GrRss className="sectionHeader__icon" />}
              isLoading={isLoading}
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Slider
              isLoading={isLoading}
              isSuccess={isSuccess}
              slidesPerView={4}
              autoplay={true}
              spaceBetween={10}
              loop={true}
              navigation={true}
              array={data?.articles}
              slide="ArticleBox"
            />
          </div>
        </div>
      </div>
    </>
  );
}
