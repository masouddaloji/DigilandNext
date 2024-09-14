import React from "react";
import styles from "./ProductCart.module.css";
function ProductCartSkeleton() {
  return (
    <div className={`skeleton ${styles.product_skeleton_container}`}>
      <div className={`skeleton ${styles.product_skeleton_img}`}></div>
      <p className={`skeleton ${styles.product_skeleton_text}`}></p>
      <p className={`skeleton ${styles.product_skeleton_text}`}></p>
      <span className={`skeleton ${styles.product_skeleton_text_small}`}></span>
      <p className={`skeleton ${styles.product_skeleton_text}`}></p>
    </div>
  );
}

export default ProductCartSkeleton;
