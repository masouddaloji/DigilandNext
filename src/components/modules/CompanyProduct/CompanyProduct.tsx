import { CompanyProductProps } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import styles from "./CompanyProduct.module.css";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { IoIosStar } from "react-icons/io";

function CompanyProduct(props: CompanyProductProps) {
  const { _id, title, image, price, offPrice, rating, isLoading, isSuccess } =
    props;    
  return (
    <>
      {isSuccess ? (
        <div className={styles.companyProduct}>
          <Link
            href={`/product/${_id}`}
            className={styles.companyProduct__link}
          >
            <Image
            width={80}
            height={80}
              className={styles.CompanyProduct__img}
              src={`http://localhost:8000${image}`}
              alt="CompanyProduct image"
            />

            <div className={styles.CompanyProduct__info}>
              <div>
                <h3 className={styles.CompanyProduct__title} title={title}>
                  {title}
                </h3>
                <div className={styles.companyProduct__details}>
                  <div>
                    {offPrice ? (
                      <>
                        <del>
                          <bdi className="productPrice ss02">
                            {price.toLocaleString()}
                          </bdi>
                        </del>
                        <bdi className="currentPrice ss02">
                          {(price - (price * offPrice) / 100).toLocaleString()}
                        </bdi>
                        <span className="toman">تومان</span>
                      </>
                    ) : (
                      <>
                        <bdi className="currentPrice ss02">
                          {price.toLocaleString()}
                        </bdi>
                        <span className="toman">تومان</span>
                      </>
                    )}
                  </div>
                  <div className={styles.starDetails}>
                    <span className="ss02">{rating}</span>
                    <IoIosStar className="star small__star" />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.companyProduct__hoverBox}>
              <div className={styles.companyProduct__iconBox}>
                <AiOutlineSearch />
              </div>
            </div>
          </Link>
        </div>
      ) : isLoading ? (
        <div className={styles["companyProduct--skeleton"]}>
          {/* <Stack
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <Skeleton
              variant="rounded"
              animation="wave"
              height="6rem"
              width="6rem"
            />
            <div className="CompanyProduct__info">
              <Stack spacing={1}>
                <Skeleton animation="wave" height="2rem" width="100%" />
                <Skeleton animation="wave" height="2rem" width="100%" />
              </Stack>
            </div>
          </Stack> */}
        </div>
      ) : null}
    </>
  );
}

export default CompanyProduct;
