import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { sortedProductsItems } from "@/utils/Constants";
import React, { Dispatch, SetStateAction, useState } from "react";
import { BsSliders } from "react-icons/bs";
import { FaSortAmountDown } from "react-icons/fa";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";
import styles from "./FilterProducts.module.css";

const FilterProducts = ({ setIsShowFilterOptions }:{ setIsShowFilterOptions:Dispatch<SetStateAction<boolean>> }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const [isShowSortList, setIsShowSortList] = useState<boolean>(false);
  const [selectSort, setSelectSort] = useState<string>(searchParams.get("sort")??"");
  const sortProductsHandler = (sort: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("sort", sort);
    replace(`${pathname}?${params.toString()}`);
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
              {selectSort.trim().length ? selectSort : "مرتب سازی براساس"}
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
                onClick={() => {
                  sortProductsHandler(item.sortedBy);
                  setIsShowSortList(false);
                  setSelectSort(item.title);
                }}
              >
                {item.title}
              </li>
            ))}
          </ul>
        </div>
        <span
          className={styles.filterMobile__btn}
          onClick={() => setIsShowFilterOptions((prev) => !prev)}
        >
          <BsSliders className={styles.filter__icon} />
          فیلتر
        </span>
      </div>
    </div>
  );
};

export default FilterProducts;
