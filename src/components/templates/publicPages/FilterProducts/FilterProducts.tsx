import { sortedProductsItems } from "@/utils/Constants";
import React, { useRef, useState } from "react";
import { BsSliders } from "react-icons/bs";
import { FaSortAmountDown } from "react-icons/fa";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";
import styles from "./FilterProducts.module.css";

const FilterProducts = () => {
  const [isShowSortList, setIsShowSortList] = useState<boolean>(false);
  const [isShowFilterOptions, setIsShowFilterOptions] =
    useState<boolean>(false);
  const [sortStatusPersian, setSortStatusPersian] = useState<string>("");
  const maskRef = useRef(null);
  const closeFilterMask = (e: MouseEvent) => {
    if (maskRef.current === e.target) {
      setIsShowFilterOptions(false);
    }
  };
  return (
    <div>
      <div className={styles.productsCategory__sortedBox}>
        <div className={styles.productsCategory__sortWrapper}>
          <FaSortAmountDown className={styles.sort__icon} />
          <div
            className={styles.productsCategory__showedBox}
            onClick={() => setIsShowSortList(!isShowSortList)}
          >
            <span className={styles.productsCategory__title}>
              {sortStatusPersian ? sortStatusPersian : "مرتب سازی بر اساس"}
            </span>
            {!isShowSortList ? (
              <HiChevronDown className={styles.productsCategory__icon} />
            ) : (
              <HiChevronUp
                className={`${styles.productsCategory__icon} iconRed `}
              />
            )}
          </div>
          <ul
            className={`${styles.productsCategory__sorteLists} ${
              isShowSortList
                ? styles["productsCategory__sorteLists--show"]
                : null
            }`}
          >
            {sortedProductsItems?.map((item) => (
              <li
                key={item.id}
                className={styles.productsCategory__sorteItem}
                // onClick={() => {
                //   setPageInfo((prev) => ({
                //     ...prev,
                //     sort: item.sortedBy,
                //   }));
                //   setIsShowSortList(false);
                //   setSortStatusPersian(item.title);
                // }}
              >
                {item.title}
              </li>
            ))}
          </ul>
        </div>
        <span
          className={styles.filterMobile__btn}
          onClick={() => setIsShowFilterOptions(!isShowFilterOptions)}
        >
          <BsSliders className={styles.filter__icon} />
          فیلتر
        </span>
      </div>
    </div>
  );
};

export default FilterProducts;
