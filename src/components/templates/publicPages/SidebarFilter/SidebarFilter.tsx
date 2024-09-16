"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Dispatch, MouseEvent, SetStateAction, useRef, useState } from "react";
import PriceSlider from "../PriceSlider/PriceSlider";
import SidebarFilterItem from "./SidebarFilterItem";
import { IoClose } from "react-icons/io5";
import styles from "./SidebarFilter.module.css";
import CategoryFilter from "@/components/templates/publicPages/CategoryFilter/CategoryFilter";
import Brands from "@/components/templates/publicPages/Brands/Brands";
import ColorFilter from "@/components/templates/publicPages/ColorFilter/ColorFilter";
import { useOutsideClick } from "@/utils/utils";

const SidebarFilter = ({ isShowFilterOptions, setIsShowFilterOptions }:{ isShowFilterOptions:boolean, setIsShowFilterOptions:Dispatch<SetStateAction<boolean>> }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const maskRef = useOutsideClick(() => setIsShowFilterOptions(false));
  const restFilterHandler = () => {
    const params = new URLSearchParams(searchParams);
    params.delete("category");
    params.delete("subCategory");
    params.delete("color");
    params.delete("price");
    params.delete("sort");
    params.delete("brand");
    params.delete("search");
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <>
      {/* mask for filterMobile */}
      <div className="col-12 col-lg-4 col-xl-3">
        <div
          className={`${styles.filterMobile__mask} ${
            isShowFilterOptions && styles["filterMobile__mask--show"]
          }`}
        ></div>
        <div
          ref={maskRef}
          className={` ${styles.filter}
               ${isShowFilterOptions && styles["filterMobile--show"]}`}
        >
          <div className={styles.filter__header}>
            <h4 className={styles.filter__headerTitle}>
              فیلترها
              {searchParams.get("price") ||
              searchParams.get("brand") ||
              searchParams.get("color") ? (
                <p
                  className={styles.filter__deleteFilters}
                  onClick={restFilterHandler}
                >
                  حذف فیلترها
                </p>
              ) : null}
            </h4>
            <IoClose
              className={styles["filter--closeBtn"]}
              onClick={() => setIsShowFilterOptions(false)}
            />
          </div>

          <SidebarFilterItem
            header=" محدوده قیمت :"
            highLight={(searchParams.get("price") as string) ?? ""}
            isPrice={true}
          >
            <PriceSlider />
          </SidebarFilterItem>

          <SidebarFilterItem header=" دسته بندی محصولات :" isPrice={false}>
            <CategoryFilter />
          </SidebarFilterItem>

          <SidebarFilterItem
            isPrice={false}
            header=" برند ها :"
            highLight={(searchParams.get("brand") as string) ?? ""}
          >
            <Brands />
          </SidebarFilterItem>

          <SidebarFilterItem
            header=" رنگ ها :"
            highLight={(searchParams.get("color") as string) ?? ""}
            isPrice={false}
          >
            <ColorFilter />
          </SidebarFilterItem>
        </div>
      </div>
    </>
  );
};

export default SidebarFilter;
