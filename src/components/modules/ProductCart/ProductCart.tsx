import { CompanyProductProps } from "@/types/types";
import styles from "./ProductCart.module.css";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import Tooltip from "@/components/modules/Tooltip/Tooltip";
import Star from "@/components/modules/Star/Star";

export default function ProductCart(props: CompanyProductProps) {
  let isInFavorite = null;
  const { _id, title, image, offPrice, price, rating, isLoading, isSuccess } =
    props;
  const addToBasketHandler = () => {
    // if (!token) {
    //   toast.warning(persianTexts.basket.notLoginForaddTobasket);
    //   return;
    // }
    // addToBasket(_id)
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
    // if (isInFavorite) {
    //   toast.warning("این محصول در لیست علاقه مندی ها وجود دارد");
    // } else {
    //   addToFavorite(_id)
    //     .unwrap()
    //     .then((response) => {
    //       toast.success(persianTexts.favorite.addtoFavorite.success);
    //     })
    //     .catch((error) => {
    //       toast.error(persianTexts.favorite.addtoFavorite.error);
    //     });
    // }
  };
  if (isSuccess) {
    // isInFavorite =
    //   favorites?.length && favorites.some((item) => item._id === _id);
  }
  return (
    <>
      {isSuccess ? (
        <div className="productBox">
          <div className={styles.product__imgBox}>
            <Image
              src={`http://localhost:8000${image}`}
              alt="new product image"
              className={styles.product__img}
              width={400}
              height={400}
            />
          </div>

          <div className={styles.productBox__content}>
            <Link href={`/product/${_id}`}>
              <Tooltip isSmall={false} title={title}>
                <h2 className={styles.product__title}>{title}</h2>
              </Tooltip>
            </Link>

            <div className="priceBox">
              {offPrice ? (
                <>
                  <del>
                    <bdi className="productPrice ss02">
                      {price.toLocaleString()}
                    </bdi>
                  </del>
                  <span>
                    {" "}
                    <bdi className="currentPrice ss02">
                      {(price - (price * offPrice) / 100).toLocaleString()}
                    </bdi>
                    <span className="toman">تومان</span>
                  </span>
                </>
              ) : (
                <bdi className="currentPrice ss02">
                  {price.toLocaleString()}
                  <span className="toman">تومان</span>
                </bdi>
              )}
            </div>
            <div className={styles.product__quickAccessBox}>
              <div className={styles.product__rightBox}>
                <Tooltip isSmall={true} title="افزودن به سبد خرید">
                  <div
                    className={`${styles.product__addToBasketBox} ${styles.cursor}`}
                    onClick={addToBasketHandler}
                  >
                    <MdOutlineAddShoppingCart
                      className={styles.Product__addToBasketIcon}
                    />
                  </div>
                </Tooltip>
                <Tooltip isSmall={true} title="افزودن به علاقه مندی ها">
                  <div
                    className={`${styles.product__iconBox} ${styles.cursor}`}
                    onClick={addToFavoriteHandler}
                  >
                    {isInFavorite ? (
                      <IoMdHeart
                        className={`${styles.favorite__icon} ${styles["is--favorite"]}`}
                      />
                    ) : (
                      <IoMdHeartEmpty className={styles.favorite__icon} />
                    )}
                  </div>
                </Tooltip>
              </div>
              <div className={styles.product__leftBox}>
                <Star rating={rating} />
              </div>
            </div>
          </div>
        </div>
      ) : // isLoading ? (
      //   <div className="productBox">
      //     <Stack spacing={1}>
      //       <Skeleton
      //         animation="wave"
      //         height="16rem"
      //         width="100%"
      //         variant="rounded"
      //       />
      //       <Skeleton animation="wave" height="4rem" width="100%" />
      //       <Skeleton animation="wave" height="2rem" width="100%" />
      //       <Skeleton animation="wave" height="2rem" width="100%" />
      //     </Stack>
      //   </div>
      // ):
      null}
    </>
  );
}
