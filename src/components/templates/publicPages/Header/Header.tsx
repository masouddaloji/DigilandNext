"use client";
import Link from "next/link";
import styles from "./Header.module.css";
import Image from "next/image";
import { IoPersonOutline } from "react-icons/io5";
import { RiUserSettingsLine } from "react-icons/ri";
import { FiShoppingBag } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";
import MobileMenuItem from "./MobileMenuItem";
import { VscClose } from "react-icons/vsc";
import { SiShopify } from "react-icons/si";
import Search from "@/components/templates/publicPages/Search/Search";
import { useState } from "react";
import SidebarCart from "@/components/templates/publicPages/SidebarCart/SidebarCart";
import Navbar from "@/components/templates/publicPages/Navbar/Navbar";
import { useOutsideClick } from "@/utils/utils";
import { menus } from "@/utils/Constants";
import { getBasket } from "@/services/service";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Basket } from "@/types/types";

export default function Header({
  userName,
  userRole,
}: {
  userName: string | null;
  userRole: string | null;
}) {
  const queryClient = useQueryClient();
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);
  const [isShowSideBarCart, setIsShowSideBarCart] = useState<boolean>(false);
  const [isShowMaskMobile, setIsShowMaskMobile] = useState<boolean>(false);
  const mobileRef = useOutsideClick(() => {
    setShowMobileMenu(false)
    setIsShowMaskMobile(false)
  });
  const { data: baskets } = useQuery<Basket>({
    queryKey: ["basket"],
    queryFn: async () => getBasket(),
  });
  if (!userName) {
    queryClient.cancelQueries({ queryKey: ["basket"] });
  }
  const logoutHandler = async () => {};
console.log("baskets in header=>",baskets)
  return (
    <>
      <header className={styles.header}>
        {/* start sidebar basket  */}
        <SidebarCart
          userName={userName}
          isShowSideBarCart={isShowSideBarCart}
          setIsShowSideBarCart={setIsShowSideBarCart}
        />
        {/* end sidebar basket  */}
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <Link href="/" className={styles["header__logo-box"]}>
                <Image
                  src="/images/logo/logoF.png"
                  alt="logo-img"
                  className={styles["header__logo-img"]}
                  width={200}
                  height={40}
                />
              </Link>
            </div>
            <div className="col-lg-6">
              <Search />
            </div>
            <div className="col-lg-3">
              <div className={styles.header__leftBox}>
                {!userName ? (
                  <Link className={styles.header__authUser} href="/login">
                    <div className={styles["header__authUser-box"]}>
                      <IoPersonOutline className="fullIcon" />
                    </div>
                    <span className={styles["header__authUser-text"]}>
                      ورود / عضویت
                    </span>
                  </Link>
                ) : (
                  <div className={styles.header__userInfo}>
                    <div className={styles["header__authUser-box"]}>
                      <RiUserSettingsLine className="fullIcon" />
                    </div>
                    <span className={styles.header__userName}>{userName}</span>
                    <ul className={styles.header__userOptions}>
                      {userRole === "superAdmin" || userRole === "admin" ? (
                        <li className={styles.header__userOption}>
                          <Link href="/adminpanel">پنل مدیریت</Link>
                        </li>
                      ) : null}
                      <li className={styles.header__userOption}>
                        <Link href="/userpanel">حساب کاربری</Link>
                      </li>
                      <li className={styles.header__userOption}>
                        {" "}
                        <Link href="/basket">سبد خرید</Link>
                      </li>
                      <li
                        className={styles.header__userOption}
                        onClick={logoutHandler}
                      >
                        خروج
                      </li>
                    </ul>
                  </div>
                )}

                <div
                  className={styles.basket}
                  onClick={() => setIsShowSideBarCart(true)}
                >
                  <SiShopify className={styles.basket__icon} />

                  {userName ? (
                    <>
                      {baskets?.totalQTY ? (
                        <span className={`${styles.basket__counter} ss02`}>
                          {baskets.totalQTY}
                        </span>
                      ) : null}
                    </>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
          <Navbar />
        </div>
      </header>
      {/* end header desktop */}
      {/* start header mobile  */}
      <header className={styles.mobileHeader} >
        {/* start basket sidebar in mobile */}
        <SidebarCart
          userName={userName}
          isShowSideBarCart={isShowSideBarCart}
          setIsShowSideBarCart={setIsShowSideBarCart}
        />
        {/* end basket sidebar in mobile */}
        <div
        ref={mobileRef}
          className={`${
            showMobileMenu
              ? `${styles["mobileMenu"]} ${styles["mobileMenu--show"]}`
              : styles["mobileMenu"]
          }`}
        >
          <div className={styles.mobileMenu__close}>
            <div className={styles.mobileMenu__closeBox}>
              <VscClose
                className={`${styles["mobileMenu__closeIcon"]} fullIcon`}
                onClick={() => {
                  setShowMobileMenu(false)
                  setIsShowMaskMobile(false)
                }}
              />
            </div>
          </div>
          <ul className={styles.mobileMenu__lists}>
            {menus.map((menu) => (
              <li
                className={styles.mobileMenu__item}
                key={menu.id}
                onClick={() => setIsShowMaskMobile(true)}
              >
                <MobileMenuItem {...menu} setShow={setShowMobileMenu} />
              </li>
            ))}

            <li className={styles.mobileMenu__item}>
              <Link className={styles.mobileMenu__link} href="/">
                پرسش و پاسخ
              </Link>
            </li>
            <li className={styles.mobileMenu__item}>
              <Link className={styles.mobileMenu__link} href="/">
                پیگیری سفارش
              </Link>
            </li>
            <li className={styles.mobileMenu__item}>
              <Link className={styles.mobileMenu__link} href="/">
                سبد خرید
              </Link>
            </li>
          </ul>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-8 col-md-6">
              <div className={styles.mobileHeader__rightBox}>
                <div className={styles.mobileHeader__burgerBox}>
                  <RxHamburgerMenu
                    className={`${styles.mobileHeader__burgerIcon} fullIcon`}
                    onClick={() => {
                      setShowMobileMenu(true)
                      setIsShowMaskMobile(true)

                    }}
                  />
                </div>
                <Link href="/" className={styles.mobileHeader__logoBox}>
                  <Image
                    width={200}
                    height={40}
                    src="/images/logo-mobile.png"
                    alt="logo site for mobile"
                    className={styles.mobileHeader__logoImg}
                  />
                </Link>
              </div>
            </div>
            <div className="col-4 col-md-6">
              <div className={styles.mobileHeader__leftBox}>
                {!userName ? (
                  <Link className={styles.mobileHeader__authUser} href="/login">
                    <div className={styles["header__authUser-box"]}>
                      <IoPersonOutline className="fullIcon" />
                    </div>
                  </Link>
                ) : (
                  <div className={styles.mobileHeader__userInfo}>
                    <div className={styles["header__authUser-box"]}>
                      <RiUserSettingsLine className="fullIcon" />
                    </div>
                    <ul className={styles.header__userOptions}>
                      {userRole === "superAdmin" || userRole === "admin" ? (
                        <li className={styles.header__userOption}>
                          <Link href="/adminpanel">پنل مدیریت</Link>
                        </li>
                      ) : null}
                      <li className={styles.header__userOption}>
                        <Link href="/userpanel">حساب کاربری</Link>
                      </li>
                      <li className={styles.header__userOption}>
                        {" "}
                        <Link href="/basket">سبد خرید</Link>
                      </li>
                      <li
                        className={styles.header__userOption}
                        onClick={logoutHandler}
                      >
                        خروج
                      </li>
                    </ul>
                  </div>
                )}
                <div className={styles.mobileHeader__basket}>
                  <FiShoppingBag
                    className={styles.mobileHeader__basketIcon}
                    onClick={() => setIsShowSideBarCart(true)}
                  />
                  {userName ? (
                    <>
                      {baskets?.totalQTY ? (
                        <span
                          className={`${styles.mobileHeader__basketCounter} ss02`}
                        >
                          {baskets.totalQTY}
                        </span>
                      ) : null}
                    </>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Search />
            </div>
          </div>
        </div>
      </header>
      <div
        className={`${styles["mobile__mask"]} ${
          isShowMaskMobile && styles["mobile__mask--show"]
        }`}
        
      ></div>
    </>
  );
}
