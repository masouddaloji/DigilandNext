"use client";
import React from "react";
import { IoIosArrowUp } from "react-icons/io";
import styles from "./footer.module.css";

export default function FooterBtnTop() {
  const goToTop = () => {
    const digiContainer = document.querySelector(".digi__container");
    if (digiContainer) digiContainer.scrollTo(0, 0);
  };
  return (
    <div className={styles.goTopBox} onClick={goToTop}>
      <IoIosArrowUp className={styles.goTop} />
    </div>
  );
}
