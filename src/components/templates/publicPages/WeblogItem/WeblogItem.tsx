import { FaBlog, FaRegUser } from "react-icons/fa";
import styles from "./WeblogItem.module.css";
import Image from "next/image";
import { HiOutlineLink } from "react-icons/hi";
import Link from "next/link";
import Tooltip from "@/components/modules/Tooltip/Tooltip";
import { BsClock } from "react-icons/bs";
import ConvertDate from "@/components/templates/ConvertDate";
import DOMPurify from "dompurify";
import { Article } from "@/types/types";
const WeblogItem = (props:Article) => {
  const { title, image, _id, writer, createdAt, reviews, description } = props;

  return (
    <div className={` ${styles["weblog-item"]}  ss02`}>
      <div className={styles["weblog-item__header"]}>
        <div className="flex">
          <FaBlog className={styles["weblog-item__icon"]} />
          <h2>{title}</h2>
        </div>

        <span>
          <span>{reviews.length ?? null}</span>
          دیدگاه
        </span>
      </div>
      <div className={styles["weblog-item__content"]}>
        <div className="col-12 col-sm-4">
          <div className={styles["weblog-item__img-box"]}>
            <Image
              src={`http://localhost:8000${image}`}
              alt="article picture"
              className={styles["weblog-item__img"]}
              width={400}
              height={400}
            />
          </div>
        </div>
        <div className="col-12 col-sm-8">
          <p
            className={styles["weblog-item__text"]}
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(description.match(/<p>(.*?)<\/p>/)[0]),
            }}
          ></p>
        </div>
      </div>
      <div className={styles["weblog-item__footer"]}>
        <div className={styles["weblog-item__footer-infos"]}>
          <span>
            <FaRegUser className={styles["weblog-item__footer-icon"]} />
            {writer}
          </span>
          <span>
            <BsClock className={styles["weblog-item__footer-icon"]} />
            <ConvertDate englishDate={createdAt} />
          </span>
        </div>

        <Tooltip title="ادامه ... " isSmall={true}>
          <Link
            href={`/article/${_id}`}
            className={styles["weblog-item__link"]}
          >
            <HiOutlineLink className={styles["weblog-item__footer-link"]} />
          </Link>
        </Tooltip>
      </div>
    </div>
  );
};

export default WeblogItem;
