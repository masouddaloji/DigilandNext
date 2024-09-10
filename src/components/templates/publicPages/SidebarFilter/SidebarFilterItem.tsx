import { useState } from "react";
import { HiChevronDown } from "react-icons/hi";
import styles from "./SidebarFilter.module.css";
import { SidebarFilterItemProps } from "@/types/types";
const SidebarFilterItem = ({ header, highLight, isPrice, children }:SidebarFilterItemProps) => {
  const [isOpen, setIsOpen] = useState(true);
  let splitedFirstPrice = isPrice && highLight?.split("/")[0];
  let splitedLastPrice = isPrice && highLight?.split("/")[1];
  return (
    <div className={styles.filterItem}>
      <div className={styles.filterItem__header}>
        <p className={styles.filterItem__headerTitle}>
          {header}
          {highLight && !isPrice ? (
            <span className={styles.filterItem__selected}>{highLight}</span>
          ) : highLight && isPrice ? (
            <>
              <span>
                <span className={`${styles.filterItem__selected} ss02`}>
                  از {Number(splitedFirstPrice).toLocaleString()}
                </span>
                <span className={`${styles.filterItem__selected} ss02`}>
                  تا {Number(splitedLastPrice).toLocaleString()}
                </span>
              </span>
            </>
          ) : null}
        </p>

        <HiChevronDown
          className={`${styles.filter__icon} ${isOpen ? styles.rotate : null}`}
          onClick={() => setIsOpen(prev=>!prev)}
        />
      </div>
      <div
        className={`${styles.filter__content} ${isOpen ? styles["filter__content--show"] : styles["filter__content--hide"]}`}
      >
        <div className={styles.filter__content__Wrapper} >
        {children}

        </div>
      </div>
    </div>
  );
};

export default SidebarFilterItem;
