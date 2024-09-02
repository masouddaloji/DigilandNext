import { IoIosStar, IoIosStarOutline } from "react-icons/io";
import styles from "./Star.module.css";
import { StarProps } from "@/types/types";
import { nanoid } from "nanoid";

const Star = ({ rating }: StarProps) => {
  return (
    <>
      {Array(5 - rating)
        .fill(0)
        .map((item) => (
          <IoIosStarOutline className={styles.star} key={nanoid()} />
        ))}
      {Array(rating)
        .fill(0)
        .map((item) => (
          <IoIosStar className={styles.star} key={nanoid()} />
        ))}
    </>
  );
};

export default Star;
