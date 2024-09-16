"use client";
import { useRef } from "react";
import { IoMdClose } from "react-icons/io";
import { IoBagHandleOutline } from "react-icons/io5";
import styles from "./SidebarCart.module.css";
import Link from "next/link";
import SidebarCartItem from "@/components/templates/publicPages/SidebarCartItem/SidebarCartItem";
import { useOutsideClick } from "@/utils/utils";
import { Basket, SidebarCartProps } from "@/types/types";
import { persianTexts } from "@/utils/persianTexts";
import { getBasket } from "@/services/service";
import { useQuery, useQueryClient } from "@tanstack/react-query";

const SidebarCart = ({
  isShowSideBarCart,
  setIsShowSideBarCart,
  userName,
}: SidebarCartProps) => {
  const queryClient = useQueryClient();
  const sideBarCartRef = useOutsideClick(() => setIsShowSideBarCart(false));
  const { data: baskets, isSuccess } = useQuery<Basket>({
    queryKey: ["basket"],
    queryFn: async () => getBasket(),
  });
  if (!userName) {
    queryClient.cancelQueries({ queryKey: ["basket"] });
  }
  console.log("baskets=>", baskets);

  return (
    <>
      <div
        className={`${styles.mask} ${
          isShowSideBarCart ? styles["mask--show"] : ""
        }`}
      ></div>
      <div
        className={`${styles.sideBarCart} ${
          isShowSideBarCart ? styles["sideBarCart--show"] : ""
        }`}
        ref={sideBarCartRef}
      >
        <div className={styles.sideBarCart__header}>
          <div>
            <span>سبد خرید</span>
            <span className={`${styles.sideBarCart__headerCount} ss02`}>
              {userName ? baskets?.totalQTY ?? 0 : 0}
            </span>
          </div>
          <IoMdClose
            className={styles.sideBarCart__headerCloseBtn}
            onClick={() => setIsShowSideBarCart(false)}
          />
        </div>
        {userName ? (
          <>
            {isSuccess && baskets?.cartItems?.length > 0 ? (
              <ul className={styles.sideBarCart__Lists}>
                {baskets.cartItems.map((item) => (
                  <SidebarCartItem {...item} key={item._id} />
                ))}
              </ul>
            ) : (
              <div className={styles.emptyBasket}>
                <IoBagHandleOutline className={styles.emptyBasket__icon} />
                <Link className={styles.emptyBasket__text} href="/login">
                  {persianTexts.basket.emptyBasket}
                </Link>
              </div>
            )}

            <div className={styles.sideBarCart__totalPriceAndLinks}>
              <div className="flex ss02">
                <span>جمع كل سبد خريد : </span>
                <bdi className="currentPrice">
                  {baskets?.totalAmount?.toLocaleString()}
                  <span className="toman">تومان</span>
                </bdi>
              </div>
              <div className={styles.sideBarCart__Links}>
                <Link
                  className={styles.sideBarCart__LinkBasket}
                  href="/basket"
                  onClick={() => setIsShowSideBarCart(false)}
                >
                  مشاهده سبد خرید
                </Link>
                <Link
                  className={styles.sideBarCart__LinkBasket}
                  href="/check-information"
                  onClick={() => setIsShowSideBarCart(false)}
                >
                  تسویه حساب
                </Link>
              </div>
            </div>
          </>
        ) : (
          <div className={styles.emptyBasket}>
            <IoBagHandleOutline className={styles.emptyBasket__icon} />
            <Link className={styles.emptyBasket__text} href="/login">
              {persianTexts.header.notLoginInBasket}
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default SidebarCart;
