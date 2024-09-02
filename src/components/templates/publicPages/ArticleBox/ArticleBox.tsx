import Link from "next/link";
import styles from "./ArticleBox.module.css";
import Image from "next/image";
import Tooltip from "@/components/modules/Tooltip/Tooltip";
import { BsClockHistory } from "react-icons/bs";
import { ArticleBoxProps } from "@/types/types";
import ConvertDate from "@/components/templates/ConvertDate";

export default function ArticleBox(props:ArticleBoxProps) {
  const { isLoading, isSuccess, title, image, writer, createdAt, _id } = props;
  return (
    <>
      {isSuccess ? (
        <div className={styles.articleBox}>
          <Link className={styles.articleBox__link} href={`/article/${_id}`}>
            <div className={styles.articleBox__banner}>
              <Image
                width={400}
                height={400}
                src={`http://localhost:8000${image}`}
                alt="article banner"
                className={styles.articleBox__img}
              />
            </div>
            <Tooltip title={title} isSmall={false}>
              <div className={styles.articleBox__title}>{title}</div>
            </Tooltip>
          </Link>
          <div className={styles.articleBox__details}>
            <div className={styles.articleBox__author}>
              <Image
                width={80}
                height={80}
                className={styles.articleBox__authorImg}
                src="/images/author.jpg"
                alt="author article img"
              />
              <span className={styles.articleBox__authorName}>{writer}</span>
            </div>
            <div className={styles.articleBox__time}>
              <div className={styles.articleBox__iconBox}>
                <BsClockHistory className="fullIcon" />
              </div>
              <span className={styles.articleBox__upload}>
                <ConvertDate englishDate={createdAt} />
              </span>
            </div>
          </div>
        </div>
      ) : isLoading ? (
        <span>loading...</span>
      ) : // <div className="articleBox">
      //   <Stack spacing={1}>
      //     <Skeleton
      //       animation="wave"
      //       height="16rem"
      //       width="100%"
      //       variant="rounded"
      //     />
      //     <Skeleton animation="wave" height="2rem" width="100%" />
      //     <Stack
      //       sx={{
      //         display: "flex",
      //         flexDirection: "row",
      //         alignItems: "center",
      //         gap: "1rem",
      //       }}
      //     >
      //       <Skeleton
      //         variant="circular"
      //         animation="wave"
      //         height="3rem"
      //         width="3rem"
      //       />
      //       <Skeleton animation="wave" height="2rem" width="100%" />
      //     </Stack>
      //   </Stack>
      // </div>
      null}
    </>
  );
}
