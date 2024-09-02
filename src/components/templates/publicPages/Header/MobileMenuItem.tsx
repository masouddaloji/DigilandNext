import { MobileMenuItemProps } from "@/types/types";
import Link from "next/link";
import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import styles from "./Header.module.css";
const MobileMenuItem = (props: MobileMenuItemProps) => {
  const { title, subMenu, link, setShow } = props;
  const [isShowMobileMenu, setIsShowMobileMenu] = useState(false);
  return (
    <div
      className={styles.mobileMenuLi}
      onClick={() => setIsShowMobileMenu(!isShowMobileMenu)}
    >
      <Link className={styles.mobileMenu__link} href={link}>
        {title}
      </Link>
      {subMenu?.length ? (
        <>
          {!isShowMobileMenu ? (
            <FiChevronDown className={styles.mobileMenu__dropdownIcon} />
          ) : (
            <FiChevronUp className={styles.mobileMenu__dropdownIcon} />
          )}
          <ul
            className={`${styles.mobileMenu__submenu} ${
              isShowMobileMenu && styles["mobileMenu__submenu--show"]
            }`}
          >
            {subMenu.map((subMenu) => (
              <li
                className={styles.mobileMenu__subItem}
                key={subMenu.id}
                onClick={() => setShow(false)}
              >
                <Link className={styles.mobileMenu__subLink} href={subMenu.link}>
                  {subMenu.title}
                </Link>
              </li>
            ))}
          </ul>
        </>
      ) : null}
    </div>
  );
};

export default MobileMenuItem;
