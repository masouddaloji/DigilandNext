import Image from "next/image";
import styles from "./instantOffer.module.css";
import Tooltip from "@/components/modules/Tooltip/Tooltip";
import Link from "next/link";
import { InstantOfferProps } from "@/types/types";

const InstantOffer = (props: InstantOfferProps) => {
  const { _id, title, image, offPrice, price, rating, isLoading, isSuccess } =
    props;

  return (
    <>
      {isSuccess ? (
        <div className={styles.instantOffer}>
          <div className={styles.instantOffer__titleBox}>
            <span className={styles.instantOffer__title}>پیشنهاد لحظه ای</span>
          </div>
          <div className={styles.instantOffer__imgBox}>
            <Image
              width={500}
              height={400}
              src={`http://localhost:8000${image}`}
              alt="instantOffer image"
              className={styles.instantOffer__img}
            />
          </div>
          <Tooltip isSmall={false} title={title}>
            <Link
              className={styles.instantOffer__ProductName}
              href={`product/${_id}`}
            >
              {title}
            </Link>
          </Tooltip>
          <div className="priceBox ss02">
            <del>
              <bdi className="productPrice">{price}</bdi>
            </del>
            <span>
              <bdi className="currentPrice">
                {(price - (price * offPrice) / 100).toLocaleString()}
              </bdi>
              <span className="toman">تومان</span>
            </span>
          </div>
        </div>
      ) : isLoading ? (
        <div className={styles["instantOffer--skeleton"]}>
          {/* <Stack spacing={2} sx={{ padding: "0 .5rem" }}>
            <Skeleton
              animation="wave"
              variant="text"
              sx={{ width: "60%", fontSize: "3rem", margin: "0 auto" }}
            />
            <Skeleton
              animation="wave"
              variant="rounded"
              width="100%"
              height="18rem"
            />
            <Skeleton
              animation="wave"
              variant="text"
              sx={{ fontSize: "2rem" }}
            />
            <Skeleton
              animation="wave"
              variant="text"
              sx={{ fontSize: "2rem" }}
            />
          </Stack> */}
        </div>
      ) : null}
    </>
  );
};

export default InstantOffer;
