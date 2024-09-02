import Link from "next/link";
import React from "react";
import styles from "@/styles/NotFound.module.css";

export default function NotFound() {
  return (
    <section className={styles.notFound}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <div className={styles.notFound__content}>
        <h2 className={styles.notFound__title}>
          <i>4</i>
          <i>0</i>
          <i>4</i>
        </h2>
        <div className={styles.notFound__text}>
          <p>صفحه مورد نظر یافت نشد که به چند دلیل این اتفاق افتاده است:</p>

          <span>آدرس صفحه تغییر کرده است.</span>
          <span>مطلب به طور کلی حذف شده است.</span>
          <span>مشکلی در دیتابیس بوجود آمده است.</span>
        </div>
        <Link href="/" className={styles.notFound__link}>
          بازگشت به صفحه اصلی
        </Link>
      </div>
    </section>
  );
}
