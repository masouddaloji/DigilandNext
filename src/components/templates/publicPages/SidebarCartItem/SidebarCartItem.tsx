import { useState } from "react";

import styles from "./SidebarCartItem.module.css";
import Link from "next/link";
import Image from "next/image";
import { CgCloseO } from "react-icons/cg";

const SidebarCartItem = (props) => {
  const [isLoadingUpdateCount, setIsLoadingUpdateCount] = useState(false);
  const { _id, productId, cartQuantity } = props;
  const { _id: productID, title, image, price, quantity } = productId;

  const removeProductFromBasketHandler = async () => {
    // await removeItem(productID).unwrap()
    // .then(res=>toast.success("محصول با موفقیت از سبد خرید حذف شد"))
    // .catch(error=>toast.error("حذف محصول از سبد خرید با مشکل مواجه شد"))
  };
  return (
    <li className={styles.sideBarCartItem} key={_id}>
      {/* {(isLoading || isLoadingUpdateCount) && <div className="cartItem__loader"> */}
      {isLoadingUpdateCount && (
        <div className="cartItem__loader">
          <span className="cartItem__spinner"></span>
        </div>
      )}
      <div className={styles.sideBarCartItem__imgBox}>
        <Link href={`/product/${_id}`} className={styles.sideBarCartItem__Link}>
          <Image
            src={`https://digiland-app.iran.liara.run${image}`}
            alt="mini image products"
            className={styles.sideBarCartItem__img}
            width={55}
            height={55}
            // onError={addImageFallback}
          />
        </Link>
        <CgCloseO
          className={styles.sideBarCartItem__removeIcon}
          onClick={removeProductFromBasketHandler}
        />
      </div>
      <div className={styles.sideBarCartItem__priceBox}>
        <Link href="/" className={styles.sideBarCartItem__LinkText}>
          {title}
        </Link>
        <div className="flex">
          <bdi className="currentPrice ss02">
            {price?.toLocaleString()}
            <span className="toman">تومان</span>
          </bdi>
          {/* <ProductCount
            value={cartQuantity ?? 1}
            minValue={1}
            maxValue={quantity}
            productId={productID}
            setIsLoadingUpdateCount={setIsLoadingUpdateCount}
          /> */}
        </div>
      </div>
    </li>
  );
};

export default SidebarCartItem;
