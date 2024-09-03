"use client";
import React from "react";
import styles from "@/styles/Article.module.css";
import Error from "@/components/modules/Error/Error";
import ConvertDate from "@/components/templates/ConvertDate";
import Slider from "@/components/modules/slider/Slider";
import DOMPurify from "dompurify";
import Image from "next/image";
import { MdOutlineDateRange } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { FiFolder } from "react-icons/fi";
import { GoCommentDiscussion } from "react-icons/go";
import { BiCommentDetail } from "react-icons/bi";
import { AiOutlineRetweet } from "react-icons/ai";
import { useQuery } from "@tanstack/react-query";
import { GetAricleById } from "@/services/service";
import { ArticleIdProps } from "@/types/types";
const ArticleSection = ({ id }: { id: string }) => {
  const {
    data: articleInfo,
    isLoading,
    isSuccess,
  } = useQuery<ArticleIdProps>({
    queryKey: ["article", id],
    queryFn: () => GetAricleById(id),
  });
  console.log("articleInfo=>", articleInfo);

  return (
    <>
      {/* {isLoading && <Loader />} */}
      <div className="row">
        <div className={styles.article__header}>
          <h2 className={styles.article__title}>{articleInfo?.data?.title}</h2>
          <div className={styles.article__imgBox}>
            <Image
              src={`http://localhost:8000${articleInfo?.data?.image}`}
              alt="article cover"
              className={styles.article__img}
              width={1000}
              height={400}
            />
          </div>
          <div className={styles.article__infoBox}>
            <div className={styles.article__infoItem}>
              <MdOutlineDateRange className={styles.articleInfo__icon} />
              <span>تاریخ انتشار :</span>
              <span>
                <ConvertDate
                  englishDate={articleInfo?.data.createdAt ?? new Date()}
                />
              </span>
            </div>
            <div className={styles.article__infoItem}>
              <FaRegUser className={styles.articleInfo__icon} />
              <span>نویسنده :</span>
              <span>{articleInfo?.data.writer}</span>
            </div>
            <div className="article__infoItem">
              <FiFolder className={styles.articleInfo__icon} />
              <span>دسته بندی :</span>
              <span>{articleInfo?.data.category}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div
          className={`${styles.article__content} ss02`}
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(articleInfo?.data?.description),
          }}
        ></div>
      </div>

      {/* start related article */}
      <div className={styles["article__related-wrapper"]}>
        <div className="row">
          <div className={styles.article__review}>
            <div className={styles["article__review-header"]}>
              <span className={styles["article__review-title"]}>
                <AiOutlineRetweet className={styles["article__review-icon"]} />
                مقالات مرتبط
              </span>
            </div>

            {articleInfo?.related?.length && (
              <Slider
                isLoading={isLoading}
                isSuccess={isSuccess}
                slidesPerView={3}
                spaceBetween={15}
                autoplay={true}
                loop={true}
                array={articleInfo?.related}
                slide="ArticleBox"
              />
            )}
          </div>
        </div>
      </div>
      {/* end related article */}

      <div className="row">
        <div className={styles.article__review}>
          <div className={styles["article__review-header"]}>
            <span className={styles["article__review-title"]}>
              <GoCommentDiscussion className={styles["article__review-icon"]} />
              دیدگاه کاربران
            </span>
            <span className={`${styles["article__review-count"]} ss02`}>
              <span>
                {articleInfo && articleInfo?.data.reviews.length > 0
                  ? articleInfo.data.reviews.length
                  : 0}
              </span>
              دیدگاه
            </span>
          </div>

          {/* start review item */}
          {articleInfo?.data?.reviews?.length ? (
            articleInfo.data.reviews.map((review) => (
              <div className={styles.review__item} key={review._id}>
                <p className={styles.review__item__details}>
                  <span>{review.userId.email.split("@")[0]}</span>
                  <span>
                    <ConvertDate englishDate={review.createdAt} />
                  </span>
                </p>
                <p className={styles.review__item__content}>
                  {review.description}
                </p>
              </div>
            ))
          ) : (
            <Error title="نظری یافت نشد" type="warning" />
          )}

          {/* end review item */}

          {/* start send review */}
          <div className={styles["article__review-header"]}>
            <span className={styles["article__review-title"]}>
              <BiCommentDetail className={styles["article__review-icon"]} />
              ارسال دیدگاه
            </span>
          </div>
          {/* start review item */}
          {/* {!token ? (
                  <Link
                    to="/login"
                    className="review__item__content review__not-login"
                  >
                    برای نوشتن دیدگاه باید وارد بشوید.
                  </Link>
                ) : (
                  <Rating typeRating="article" id={articleId} />
                )} */}
          {/* end send review */}
        </div>
      </div>
    </>
  );
};

export default ArticleSection;
