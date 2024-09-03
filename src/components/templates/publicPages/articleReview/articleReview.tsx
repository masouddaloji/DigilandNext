import { BsChatDots } from "react-icons/bs";
import styles from "./articleReview.module.css";
import { useQuery } from "@tanstack/react-query";
import { GetAriclesReview } from "@/services/service";
import Link from "next/link";
import { ReviewsProps } from "@/types/types";

const ArticleReview = () => {
  const { data: reviews, isLoading } = useQuery<ReviewsProps[]>({
    queryKey: ["ariclesReview"],
    queryFn: GetAriclesReview,
  });
  return (
    <section className={`${styles["article-review "]} max__blog`}>
      {!isLoading ? (
        <>
          <h3 className={`${styles["article-review__header"]} markHeader`}>
            دیدگاه ها
          </h3>
          <ul className={styles["article-review__list"]}>
            {reviews?.length &&
              reviews.map((review) => (
                <li className={styles["article-review__item"]} key={review._id}>
                  <span>
                    <BsChatDots className={styles["article-review__icon"]} />
                    {review.userId.email.split("@")[0]}
                  </span>
                  <Link href={`/article/${review.articleId._id}`}>
                    {review.articleId.title}
                  </Link>
                </li>
              ))}
          </ul>
        </>
      ) : (
        <>
          {/* <div className="review__skeleton">
          <Skeleton
            animation="wave"
            height={10}
            width="50%"
            sx={{ m: "1.2rem 0" }}
          />
          <Skeleton
            variant="rounded"
            animation="wave"
            height={50}
            sx={{ mb: ".7rem" }}
          />
          <Skeleton
            variant="rounded"
            animation="wave"
            height={50}
            sx={{ mb: ".7rem" }}
          />
          <Skeleton
            variant="rounded"
            animation="wave"
            height={50}
            sx={{ mb: ".7rem" }}
          />
        </div> */}
        </>
      )}
    </section>
  );
};

export default ArticleReview;
