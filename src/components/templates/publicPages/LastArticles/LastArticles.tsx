import { ArticlesProps } from "@/types/types";
import styles from "./LastArticles.module.css";
import { useQuery } from "@tanstack/react-query";
import { GetAricles } from "@/services/service";
import Link from "next/link";
import Image from "next/image";

const LastArticles = () => {
  const { data: articles,isLoading } = useQuery<ArticlesProps>({
    queryKey: ["aricles"],
    queryFn: GetAricles,
  });
  
  return (
    <section className={`${styles["last-articles"]} max__blog`}>
      {!isLoading ? (
        <>
          <h3 className={`${styles["last-articles__header"]} markHeader`}>
            آخرین مقاله ها
          </h3>
          <ul className={styles["last-articles__lists"]}>
            {articles?.data?.length &&
              articles.data.slice(0, 5).map((article) => (
                <li className={styles["last-articles__item"]} key={article._id}>
                  <Link
                    href={`/article/${article._id}`}
                    className={styles["last-articles__link"]}
                  >
                    <Image
                      width={50}
                      height={50}
                      src={`http://localhost:8000${article.image}`}
                      alt=""
                      className={styles["last-articles__img"]}
                    />
                  </Link>
                  <p className={styles["last-articles__title"]}>
                    {article.title}
                  </p>
                </li>
              ))}
          </ul>
        </>
      ) : (
        <>
          {/* <div className="last-articles__skeleton">
          <Skeleton
            animation="wave"
            height={10}
            width="50%"
            sx={{ m: "1.2rem 0" }}
          />
          {Array(4)
            .fill(0)
            .map((item) => (
              <div className="flex last-articles__skeleton__mb" key={nanoid()}>
                <Skeleton
                  variant="rounded"
                  animation="wave"
                  height={50}
                  width={50}
                  sx={{ marginLeft: ".7rem" }}
                />
                <Skeleton
                  variant="rounded"
                  animation="wave"
                  height={50}
                  width="100%"
                />
              </div>
            ))}
        </div> */}
        </>
      )}
    </section>
  );
};

export default LastArticles;
