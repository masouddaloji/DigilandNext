
//styles
import Link from "next/link";
import styles from "./BannerBox.module.css";
import { BannerBoxProps } from "@/types/types";
import Image from "next/image";

function BannerBox(props:BannerBoxProps) {
  const { cover, link, isLoading, isSuccess } = props;
  return (
    <>
      {isLoading ? (
        <div className={styles.widget__imageBox}>
          {/* <Skeleton
            animation="wave"
            height="38rem"
            width="100%"
            variant="rounded"
          /> */}
          <span>loading...</span>
        </div>
      ) : isSuccess ? (
        <div className={styles.widget__imageBox}>
          <Link className={styles.widget__link} href={link}>
            <Image width={950} height={400} src={cover} alt="banner img" className={styles.widget__img} />
          </Link>
        </div>
      ) : null}
    </>
  );
}

export default BannerBox;
