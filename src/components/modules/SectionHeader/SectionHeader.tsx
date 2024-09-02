import { SectionHeaderProps } from "@/types/types";
import Link from "next/link";
import { HiChevronLeft } from "react-icons/hi";
import styles from "./SectionHeader.module.css"
export default function SectionHeader({
    title,
    link,
    icon,
    btnLink,
    bg,
    isLoading,
  }:SectionHeaderProps) {
    return (
      <>
        {isLoading ? (
            <span>loading...</span>
        //   <Skeleton animation="wave" height="4rem" width="100%" />
        ) : (
          <div className={styles.headerTitleBox}>
            <div
              className={styles.rightBox}
              style={{ backgroundColor: bg ? bg : "unset" }}
            >
              {icon}
              <Link className={styles.headerTitle__link} href="/">
                {title}
              </Link>
            </div>
            {btnLink ? (
              <div
                className={styles.leftBox}
                style={{ backgroundColor: bg ? bg : "unset" }}
              >
                <Link href={link} className={styles.headerTitle__btn}>
                  <div className={styles.headerTitle__btnWrapper}>
                    <HiChevronLeft className="fullIcon section__btn" />
                  </div>
                  مشاهده همه
                </Link>
              </div>
            ):null}
          </div>
        )}
      </>
    );
  }