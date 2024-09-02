// styles
import { useRef } from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";
import { BiHome } from "react-icons/bi";
import { FiChevronDown, FiPhoneCall } from "react-icons/fi";
import { menus } from "@/utils/Constants";

function Navbar() {
  const meniItemRef = useRef<HTMLLIElement>(null);
  const subMenuRef = useRef<HTMLUListElement>(null);
  return (
    <nav className={styles.navbar}>
      <div className="col-lg-10">
        <nav className={styles.navbar__menu}>
          <ul className={styles.menus}>
            <li className={styles.menus__item}>
              <Link className={styles.menus__link} href="/">
                <BiHome className="icon" />
                <span className={styles.menus__text}>خانه</span>
              </Link>
            </li>
            {menus.map((menu) => (
              <li
                className={styles.menus__item}
                key={menu.id}
                ref={meniItemRef}
              >
                <Link className={styles.menus__link} href={menu.link}>
                  {menu.icon}
                  <span className={styles.menus__text}>{menu.title}</span>

                  {menu.subMenu && menu.subMenu.length ? (
                    <FiChevronDown />
                  ) : null}
                </Link>
                {menu.subMenu && menu.subMenu.length ? (
                  <ul className={styles.submenu} ref={subMenuRef}>
                    {menu.subMenu.map((submenu) => (
                      <li className={styles.submenu__item} key={submenu.id}>
                        <Link
                          className={styles.submenu__Link}
                          href={submenu.link}
                        >
                          {submenu.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="col-lg-2">
        <div className={styles.contact}>
          <div className={`${styles.contact__number} ss02`}>
            <strong>42156644</strong>
            <span>021</span>
          </div>
          <div className={styles.header__phoneBox}>
            <FiPhoneCall className={styles.contact__icon} />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
