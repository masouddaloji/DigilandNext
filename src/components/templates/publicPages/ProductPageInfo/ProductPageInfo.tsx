"use client";
import SectionHeader from "@/components/modules/SectionHeader/SectionHeader";
import Slider from "@/components/modules/slider/Slider";
import React from "react";
import { AiOutlineRetweet, AiOutlineStar } from "react-icons/ai";
import styles from "@/styles/Product.module.css";
import { useQuery } from "@tanstack/react-query";
import { GetProductById } from "@/utils/utils";
import Link from "next/link";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { HiOutlineBellAlert } from "react-icons/hi2";
import { persianTexts } from "@/utils/persianTexts";
import { BiCheckSquare, BiCommentDetail } from "react-icons/bi";
import { BsCheckLg, BsPen, BsSortDown, BsXSquare } from "react-icons/bs";
import { FaRegHeart, FaTruck } from "react-icons/fa";
import Image from "next/image";
import { allInfosBtn } from "@/utils/Constants";
import DOMPurify from "dompurify";
import { CgList } from "react-icons/cg";
import ConvertDate from "../../ConvertDate";
import Error from "@/components/modules/Error/Error";
import { TbChecklist, TbTriangle, TbTriangleInverted } from "react-icons/tb";
import { persianColorProps, ProductByIdProps } from "@/types/types";
import { useSearchParams } from "next/navigation";
import ProductGallery from "@/components/modules/slider/ProductGallery";
const showRatingResultPersian = (rate: number) => {
  switch (rate) {
    case 5:
      return "عالی";
    case 4:
      return "خیلی خوب";
    case 3:
      return "خوب";
    case 2:
      return "متوسط";
    case 1:
      return "بد";

    default:
      break;
  }
};
const selectColorStyle = (persianColor: persianColorProps) => {
  switch (persianColor) {
    case "قرمز":
      return { backgroundColor: "red" };
    case "مشکی":
      return { backgroundColor: "black" };
    case "طلائی":
      return { backgroundColor: "gold" };
    case "آبی":
      return { backgroundColor: "blue" };
    case "سبز":
      return { backgroundColor: "green" };
    case "سفید":
      return { backgroundColor: "white" };
    case "صورتی":
      return { backgroundColor: "pink" };

    default:
      break;
  }
};
const ProductPageInfo = ({ id }: { id: string }) => {
  const {
    data: product,
    isLoading,
    isSuccess,
  } = useQuery<ProductByIdProps>({
    queryKey: ["article", id],
    queryFn: () => GetProductById(id),
  });
  const searchParams = useSearchParams();
  const activeTab = searchParams.get("tab") ?? allInfosBtn[0].titleEn;
  const selectColor = searchParams.get("color") ?? product?.data.colors[0];
  const addToBasketHandler = async (id: string) => {
    // if (!token) {
    //   toast.warning(persianTexts.header.notLoginInBasket);
    //   return;
    // }
    // await addToBasket(id)
    //   .unwrap()
    //   .then(() => {
    //     toast.success(persianTexts.basket.addtobasketSuccess);
    //   })
    //   .catch((error) => {
    //     toast.error(persianTexts.basket.addtobasketError);
    //   });
  };

  const addToFavoriteHandler = () => {
    // if (!token) {
    //   toast.warning(persianTexts.favorite.addtoFavorite.notLogin);
    //   return;
    // }
    // const isInFavorite =
    //   favorites?.length && favorites.some((item) => item._id === productId);
    // if (isInFavorite) {
    //   toast.warning("این محصول در لیست علاقه مندی ها وجود دارد");
    // } else {
    //   addToFavorite(productId)
    //     .unwrap()
    //     .then((response) => {
    //       toast.success(persianTexts.favorite.addtoFavorite.success);
    //     })
    //     .catch((error) => {
    //       toast.error(persianTexts.favorite.addtoFavorite.error);
    //     });
    // }
  };
  return (
    <div className={styles.product}>
      {/* {isLoading && <Loader />} */}
      <div className="container">
        {/* bread crumbs */}
        {/* <Breadcrumb /> */}
        <div className={styles.product__wrapper}>
          <div className="row">
            {/* product images */}
            <div className="col-12 col-md-4 col-lg-4 col-xl-4">
              <ProductGallery array={product?.data.gallery} />
            </div>
            {/* product details */}
            <div className="col-12 col-md-5 col-lg-5 col-xl-5">
              <div>
                <h2 className={styles.product__detailsTitle}>
                  {product?.data.title}
                </h2>
                <span className={styles.product__detailsSubtitle}>
                  {product?.data.segment}
                </span>
                <div className={styles.product__detailsMeta}>
                  <span className={styles.product__detailsMetainfo}>
                    دسته :{" "}
                  </span>
                  <span className={styles.product__detailsMetainfo}>
                    <Link href="/">موبایل</Link>
                  </span>
                </div>
                <ul className={styles.product__detailsListInfos}>
                  <li className={styles.product__detailsItemInfos}>
                    <span className={styles.product__infosQuest}>
                      حافظه داخلي :{" "}
                    </span>
                    <span className={styles.product__infosAnswer}>
                      256 گيگابايت
                    </span>
                  </li>
                  <li className={styles.product__detailsItemInfos}>
                    <span className={styles.product__infosQuest}>
                      تعداد سيم کارت :{" "}
                    </span>
                    <span className={styles.product__infosAnswer}>
                      دو سيم کارت
                    </span>
                  </li>
                  <li className={styles.product__detailsItemInfos}>
                    <span className={styles.product__infosQuest}>
                      حس‌گرها :{" "}
                    </span>
                    <span className={styles.product__infosAnswer}>
                      قطب‌نما (Compass)، شتاب‌سنج (Accelerometer)، مجاورت
                      (Proximity)، ژيروسکوپ (Gyro)
                    </span>
                  </li>
                  <li className={styles.product__detailsItemInfos}>
                    <span className={styles.product__infosQuest}>
                      شبکه هاي ارتباطي :{" "}
                    </span>
                    <span className={styles.product__infosAnswer}>
                      2G، 3G، 4G
                    </span>
                  </li>
                </ul>
                <div className="priceBox">
                  {product?.data.offPrice ? (
                    <>
                      <del>
                        <bdi
                          className={` ${styles["product_info__price"]} ${styles.productPrice} ss02`}
                        >
                          {product?.data.price.toLocaleString()}
                        </bdi>
                      </del>
                      <span>
                        {" "}
                        <bdi
                          className={` ${styles["product_info__price"]} ${styles.currentPrice} ss02`}
                        >
                          {(
                            product?.data.price -
                            (product?.data.price * product?.data.offPrice) / 100
                          ).toLocaleString()}
                        </bdi>
                        <span className="toman">تومان</span>
                      </span>
                    </>
                  ) : (
                    <bdi
                      className={` ${styles["product_info__price"]} ${styles.currentPrice} ss02`}
                    >
                      {product?.data.price.toLocaleString()}
                      <span className="toman">تومان</span>
                    </bdi>
                  )}
                </div>
                {/* select colors product */}
                <div className={styles.product__colorBox}>
                  <div className={styles.product__currentColor}>
                    <span> رنگ : </span>
                    <span>{selectColor ?? product?.data.colors[0]}</span>
                  </div>
                  <div className={styles.colorAndAddTobasket__wrapper}>
                    <div className={styles.product__allColors}>
                      {product?.data.colors.map((color) => (
                        <Link
                          href={`?${new URLSearchParams({ color,tab:activeTab })}`}
                          key={`color_${color}`}
                          style={selectColorStyle(color)}
                          className={` ${styles.product__color} ${
                            selectColor === color ? "colorSelected" : null
                          } `}
                        >
                          {selectColor === color && (
                            <BsCheckLg
                              className={`colorSelecteor ${
                                selectColor === "سفید" && "blacked"
                              }`}
                            />
                          )}{" "}
                        </Link>
                      ))}
                    </div>
                    <button
                      className={styles.product__addToBasket}
                      onClick={() => addToBasketHandler(id)}
                    >
                      <MdOutlineAddShoppingCart
                        className={styles.product__addIcon}
                      />
                      افزودن به سبد خرید
                    </button>
                  </div>
                </div>

                <div className={styles.product__warning}>
                  <p className={styles.product__warningText}>
                    <HiOutlineBellAlert
                      className={styles.product__warningIcon}
                    />
                    {persianTexts.productInfo.warning}
                  </p>
                </div>
              </div>
            </div>
            {/* details send */}
            <div className="col-12 col-md-3 col-lg-3">
              <div className={styles.product__availbleBox}>
                <div className={styles.product__availbleWrapper}>
                  {product?.data.quantity ? (
                    <div className={styles.product__availbleItem}>
                      <BiCheckSquare
                        className={`${styles.product__availbleItemIcon} ${styles.available}`}
                      />
                      موجود است
                    </div>
                  ) : (
                    <div className={styles.product__availbleItem}>
                      <BsXSquare
                        className={`${styles.product__availbleItemIcon} ${styles.notavailable}`}
                      />
                      اتمام موجودی
                    </div>
                  )}

                  <div className={styles.product__availbleItem}>
                    <FaTruck
                      className={`${styles.product__availbleItemIcon} ${styles.truck}`}
                    />
                    ارسال از <span>3</span> روز کاری آینده
                  </div>
                  <div className={styles.product__availbleItem}>
                    <button
                      className={styles.product__availbleButton}
                      onClick={addToFavoriteHandler}
                    >
                      <FaRegHeart className={styles.product__availbleBtnIcon} />
                      افزودن به علاقه مندی ها
                    </button>
                  </div>
                </div>
                <div className={styles.product__services}>
                  <div className={styles.product__servicesItem}>
                    <Image
                      width={28}
                      height={28}
                      src="/images/productservices/1.png"
                      alt="services my site for by this product"
                      className={styles.product__servicesImg}
                    />
                    تضمین بهترین قیمت
                  </div>
                  <div className={styles.product__servicesItem}>
                    <Image
                      width={28}
                      height={28}
                      src="/images/productservices/2.png"
                      alt="services my site for by this product"
                      className={styles.product__servicesImg}
                    />
                    ضمانت اصل بودن
                  </div>
                  <div className={styles.product__servicesItem}>
                    <Image
                      width={28}
                      height={28}
                      src="/images/productservices/3.webp"
                      alt="services my site for by this product"
                      className={styles.product__servicesImg}
                    />
                    تحویل اکسپرس
                  </div>
                  <div className={styles.product__servicesItem}>
                    <Image
                      width={28}
                      height={28}
                      src="/images/productservices/4.webp"
                      alt="services my site for by this product"
                      className={styles.product__servicesImg}
                    />
                    بسته بندی زیبا
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className={styles.product__tabListWrapper}>
            <ul className={styles.product__tabList}>
              {allInfosBtn.map((btn) => (
                <li className={styles.product__tabItem} key={btn.id}>
                  <Link
                    className={`${styles.product__tabLink} ${
                      activeTab === btn.titleEn
                        ? styles["product__tabLink--active"]
                        : ""
                    }`}
                    scroll={false}
                    href={`?${new URLSearchParams({ tab:btn.titleEn,color:selectColor??""})}`}
                  >
                    {btn.titleFa}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.product__wrapper}>
          <div className="row">
            {/* Description */}
            <div
              className={` ${styles.allDetails} ${
                activeTab === "description" ? styles["allDetails--show"] : ""
              }`}
            >
              <div className={styles.allDetails__headingWrapper}>
                <BsPen className={styles.allDetails__headingIcon} />
                <div className={styles.allDetails__headingLeft}>
                  <span className={styles.allDetails__headingTitle}>
                    نقد و بررسی اجمالی
                  </span>
                  <span className={styles.allDetails__headingDesc}>
                    {product?.data.segment}
                  </span>
                </div>
              </div>
              <div className={styles.allDetails__detailsBox}>
                <p
                  className={styles.allDetails__detailsText}
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(product?.data.shortDescription),
                  }}
                ></p>
              </div>
            </div>
            {/* specifications */}
            <div
              className={` ${styles.allDetails} ${
                activeTab === "specifications" ? styles["allDetails--show"] : ""
              }`}
            >
              <div className={styles.allDetails__headingWrapper}>
                <CgList className={styles.allDetails__headingIcon} />
                <div className={styles.allDetails__headingLeft}>
                  <span className={styles.allDetails__headingTitle}>
                    مشخصات کلی
                  </span>
                  <span className={styles.allDetails__headingDesc}>
                    {product?.data.segment}
                  </span>
                </div>
              </div>
              <div
                className={styles.details__tableWrapper}
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(product?.data.fullDescription),
                }}
              ></div>
            </div>
            {/* start submit user eview */}
            <div
              className={` ${styles.allDetails} ${
                activeTab === "userComments" ? styles["allDetails--show"] : ""
              }`}
            >
              <div className={styles.allDetails__headingWrapper}>
                <BiCommentDetail className={styles.allDetails__headingIcon} />
                <div className={styles.allDetails__headingLeft}>
                  <span className={styles.allDetails__headingTitle}>
                    نظرات کاربران
                  </span>
                  <span className={styles.allDetails__headingDesc}>
                    {product?.data.segment}
                  </span>
                </div>
              </div>
              <div className={styles.userComments__wrapper}>
                <div className="row">
                  <div className="col-12 col-md-6">
                    <div className={styles.userComments__reviewRules}>
                      <p
                        className={styles.userComments__rulesText}
                        dangerouslySetInnerHTML={{
                          __html: DOMPurify.sanitize(
                            persianTexts.productInfo.commentRules
                          ),
                        }}
                      ></p>
                    </div>
                    <div className={styles.resultReview__wrraper}>
                      <h3 className={styles.resultReview__title}>
                        {persianTexts.productInfo.productRatingFromUsers}
                        <span>{product?.data.rating}</span>
                      </h3>
                      <div className={styles.resultReview__points}>
                        <div className={styles.resultReview__point}>
                          <span className={styles.resultReview__pointTitle}>
                            امتیاز کالا
                          </span>
                          <div className={styles.resultReview__pointWrapper}>
                            <div className={styles.resultReview__pointProgress}>
                              <span
                                className={
                                  styles.resultReview__pointProgressBar
                                }
                                style={{
                                  width: `${product?.data.rating ?? 5 * 20}%`,
                                }}
                              ></span>
                            </div>
                            <span
                              className={styles.resultReview__pointResultText}
                            >
                              {showRatingResultPersian(
                                product?.data.rating ?? 5
                              )}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    {/* <Rating typeRating="product" id={productId} /> */}
                  </div>
                </div>
                <div className="row">
                  <div className={styles.allComments__wrapper}>
                    <div className={styles.allComments__header}>
                      <h3 className={styles.allComments__title}>
                        نقد ها و بررسی ها
                        {product?.data?.reviews?.length ? (
                          <span>{product?.data.reviews.length}</span>
                        ) : null}
                      </h3>
                      <ul className={styles.allComments__sorted}>
                        <BsSortDown className={styles.allComments__sorteIcon} />
                        <li className="allComments__sorteItem allComments__sorteItem--active">
                          جدیدترین
                        </li>
                        <li className={styles.allComments__sorteItem}>
                          مفیدترین
                        </li>
                      </ul>
                    </div>
                    <ul className={styles.userComment__wrapper}>
                      {product?.data?.reviews?.length ? (
                        <>
                          {product?.data.reviews.map((review) => (
                            <li
                              className={styles.userComment__item}
                              key={review._id}
                            >
                              <div className={styles.comment__content}>
                                <div className={styles.comment__meta}>
                                  <div
                                    className={`  ${
                                      styles.comment__metaRating
                                    } ${
                                      review?.rating > 3
                                        ? styles.green
                                        : review?.rating > 2
                                        ? styles.orange
                                        : styles.red
                                    }`}
                                  >
                                    <AiOutlineStar
                                      className={styles.comment__metaIcon}
                                    />
                                    {review.rating}
                                  </div>
                                  <span className={styles.comment__metaAuthor}>
                                    {review.userId.email.split("@")[0]}
                                  </span>
                                  <span className={styles.comment__time}>
                                    <ConvertDate
                                      englishDate={review.createdAt}
                                    />
                                  </span>
                                </div>
                                <div className={styles.comment__description}>
                                  <p
                                    className={styles.comment__descriptionText}
                                  >
                                    {review.description}
                                  </p>
                                </div>
                                <div className={styles.comment__isLikeWrapper}>
                                  <span className={styles.comment__isLikeTitle}>
                                    آیا این نظر برایتان مفید بود؟
                                  </span>
                                  <div
                                    className={styles.comment__isLikeBtnWrapper}
                                  >
                                    <span className={styles.comment__isLikeBtn}>
                                      <span className={styles.likedCount}>
                                        71
                                      </span>
                                      بله
                                    </span>
                                    <span className={styles.comment__isLikeBtn}>
                                      <span className={styles.likedCount}>
                                        14
                                      </span>
                                      خیر
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </li>
                          ))}
                        </>
                      ) : (
                        <Error
                          title={persianTexts.productInfo.notFindReviews}
                          type="warning"
                        />
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/*end submit user eview */}
            {/* start result review */}
            <div
              className={`${styles.allDetails} ${
                activeTab === "review" ? styles["allDetails--show"] : ""
              }`}
            >
              <div className={styles.allDetails__headingWrapper}>
                <TbChecklist className={styles.allDetails__headingIcon} />
                <div className={styles.allDetails__headingLeft}>
                  <span className={styles.allDetails__headingTitle}>
                    نقد و بررسی
                  </span>
                  <span className={styles.allDetails__headingDesc}>
                    {product?.data.segment}
                  </span>
                </div>
              </div>
              <div className={styles.reviews__wrapper}>
                <div className="row">
                  <div className="col-12 col-sm-12 col-md-4">
                    <div className={styles.pointGood__wrapper}>
                      <span className={styles.point__title}>نقاط قوت</span>
                      <ul>
                        <li>
                          <TbTriangle className={styles.pointGood__icon} />
                          کيفيت ساخت
                        </li>
                        <li>
                          <TbTriangle className={styles.pointGood__icon} />
                          دوربين
                        </li>
                        <li>
                          <TbTriangle className={styles.pointGood__icon} />
                          برند بودن
                        </li>
                        <li>
                          <TbTriangle className={styles.pointGood__icon} />
                          چيپ ست
                        </li>
                        <li>
                          <TbTriangle className={styles.pointGood__icon} />
                          طراحي منحصر بفرد
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-4">
                    <div className={styles.pointBad__wrapper}>
                      <span className={styles.point__title}>نقاط ضعف</span>
                      <ul>
                        <li>
                          <TbTriangleInverted
                            className={styles.pointBad__icon}
                          />
                          قيمت زياد
                        </li>
                        <li>
                          <TbTriangleInverted
                            className={styles.pointBad__icon}
                          />
                          صفحه نمايش ضعيف IPS
                        </li>
                        <li>
                          <TbTriangleInverted
                            className={styles.pointBad__icon}
                          />
                          قيمت وحشتناک بالا
                        </li>
                        <li>
                          <TbTriangleInverted
                            className={styles.pointBad__icon}
                          />
                          اندروييد پايين
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-4">
                    <div className={styles.reviewprogress__wrapper}>
                      <div className={styles.reviewprogress__item}>
                        <div className={styles.reviewprogress__header}>
                          <span>کیفیت ساخت</span>
                          <span>5.3</span>
                        </div>
                        <div className={styles.reviewprogress__progress}>
                          <span
                            className={styles.reviewprogress__progressBar}
                          ></span>
                        </div>
                      </div>
                      <div className={styles.reviewprogress__item}>
                        <div className={styles.reviewprogress__header}>
                          <span>ارزش خرید به نسبت قیمت</span>
                          <span>5.3</span>
                        </div>
                        <div className={styles.reviewprogress__progress}>
                          <span
                            className={styles.reviewprogress__progressBar}
                          ></span>
                        </div>
                      </div>
                      <div className={styles.reviewprogress__item}>
                        <div className={styles.reviewprogress__header}>
                          <span>نوآوری</span>
                          <span>5.3</span>
                        </div>
                        <div className={styles.reviewprogress__progress}>
                          <span
                            className={styles.reviewprogress__progressBar}
                          ></span>
                        </div>
                      </div>
                      <div className={styles.reviewprogress__item}>
                        <div className={styles.reviewprogress__header}>
                          <span>امکانات و قابلیت ها</span>
                          <span>5.3</span>
                        </div>
                        <div className={styles.reviewprogress__progress}>
                          <span
                            className={styles.reviewprogress__progressBar}
                          ></span>
                        </div>
                      </div>
                      <div className={styles.reviewprogress__item}>
                        <div className={styles.reviewprogress__header}>
                          <span>سهولت استفاده</span>
                          <span>5.3</span>
                        </div>
                        <div className={styles.reviewprogress__progress}>
                          <span
                            className={styles.reviewprogress__progressBar}
                          ></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* end result review */}
          </div>
        </div>
        {/* related products */}
        <div className="row">
          <div className="col-12">
            <SectionHeader
              title="محصولات مرتبط"
              icon={<AiOutlineRetweet className="fullIcon" />}
              link="/products"
              bg="var(--white)"
              isLoading={isLoading}
            />
          </div>
        </div>
        <div className="row">
          {product?.related?.length && (
            <Slider
              isLoading={isLoading}
              isSuccess={isSuccess}
              slidesPerView={5}
              spaceBetween={20}
              navigation={true}
              loop={false}
              array={product?.related}
              slide="ProductCart"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductPageInfo;
