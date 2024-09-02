"use client"
import { ErrorProps } from "@/types/types";
import styles from "./Error.module.css";
import { IoWarningOutline } from "react-icons/io5";
import { BiErrorAlt } from "react-icons/bi";

const Error = ({ title, type }: ErrorProps) => {
  const selectIcon = () => {
    switch (type) {
      case "error":
        return <BiErrorAlt className={styles.error__icon} />;
      case "warning":
        return <IoWarningOutline className={styles.error__icon} />;

      default:
        break;
    }
  };
  return (
    <div
      className={`${styles.error__wrapper} ${
        type === "warning" ? styles.yellow : styles.red
      }`}
    >
      {selectIcon()}
      <p className={styles.error__title}>{title}</p>
    </div>
  );
};

export default Error;
