import { InstantOfferProps } from "@/types/types";
import styles from "./SuggestedProductBox.module.css";
import Tooltip from "@/components/modules/Tooltip/Tooltip";
import Link from "next/link";
import Image from "next/image";
import Timer from "@/components/templates/publicPages/Timer/Timer";

export default function SuggestedProductBox(props: InstantOfferProps) {
  const { _id, title, image, offPrice, price, rating, isLoading, isSuccess } =
    props;
  return (
    <>
      {isSuccess ? (
        <div className="productBox ss02">
          <Tooltip isSmall={false} title={title}>
            <h2 className={styles.suggestedproduct__title}>
              <Link
                className={styles.suggestedproduct__link}
                href={`/product/${_id}`}
              >
                {title}
              </Link>
            </h2>
          </Tooltip>
          <div className="product__imgBox">
            <Link
              href={`/product/${_id}`}
              className={styles.suggestedproduct__imgLink}
            >
              <Image
                src={`http://localhost:8000${image}`}
                alt="off product image"
                className="product__img"
                width={400}
                height={400}
              />
            </Link>
          </div>
          <div className={styles.productBox__content}>
            <div className={styles.suggestedproduct__priceBox}>
              {offPrice ? (
                <>
                  <del>
                    <bdi className="productPrice ss02 ">
                      {price.toLocaleString()}
                    </bdi>
                  </del>
                  <span>
                    <bdi className="currentPrice ss02 ">
                      {" "}
                      {(price - (price * offPrice) / 100).toLocaleString()}
                    </bdi>
                    <span className="toman">تومان</span>
                  </span>
                </>
              ) : (
                <span>
                  <bdi className="currentPrice ss02 ">
                    {" "}
                    {price.toLocaleString()}
                  </bdi>
                  <span className="toman">تومان</span>
                </span>
              )}
            </div>
            {/* start timer */}
            <Timer offPrice={offPrice} />
            {/* end timer */}
          </div>
        </div>
      ) : isLoading ? (
        <span>loading...</span>
      ) : null}
    </>
  );
}
// <div className="productBox">
//   <Stack spacing={1}>
//     <Skeleton animation="wave" height="2rem" width="100%" />
//     <Skeleton
//       animation="wave"
//       height="16rem"
//       width="100%"
//       variant="rounded"
//     />
//     <Skeleton animation="wave" height="2rem" width="100%" />
//     <Skeleton animation="wave" height="2rem" width="100%" />
//   </Stack>
// </div>
