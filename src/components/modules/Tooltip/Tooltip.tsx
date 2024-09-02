import { TooltipProps } from "@/types/types";
import React from "react";
import styles from "./Tooltip.module.css";
const Tooltip = ({ title, children,isSmall }: TooltipProps) => {
  return (
    <div className={`${styles.product__tooltip__wrapper} ${isSmall? styles.product__tooltip__wrapper__small:""}`}>
      <div className={styles.product__tooltip} >
        <div className={styles.product__fulltitle}>{title}</div>
      </div>
      {children}
    </div>
  );
};

export default Tooltip;
