"use client";
import React from "react";
import Error from "@/components/modules/Error/Error";
import WeblogItem from "@/components/templates/publicPages/WeblogItem/WeblogItem";
import styles from "@/styles/ArticlesPage.module.css";
import { persianTexts } from "@/utils/persianTexts";
import { useQuery } from "@tanstack/react-query";
import { GetAricles } from "@/utils/utils";
import ArticleReview from "@/components/templates/publicPages/articleReview/articleReview";
import LastArticles from "@/components/templates/publicPages/LastArticles/LastArticles";
import { ArticlesProps } from "@/types/types";

const ArticlesSection = () => {
  const {
    data: articles,
    isLoading,
    isSuccess,
  } = useQuery<ArticlesProps>({
    queryKey: ["aricles"],
    queryFn: GetAricles,
  });

  return (
    <section className={styles.weblog}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-8 col-xl-9">
            <div className={` ${styles.weblog__header} max__blog`}>
              <h2 className={styles.weblog__title}>وبلاگ</h2>
            </div>
            {/* start show artcles */}
            <div className={` ${styles.weblog__content} max__blog `}>
              {isSuccess && articles?.data?.length ? (
                articles.data.map((article) => (
                  <div className="row" key={article._id}>
                    <WeblogItem {...article} />
                  </div>
                ))
              ) : (
                <Error
                  type="warning"
                  title={persianTexts.adminArticle.notFoundArticle}
                />
              )}
              {/* {isLoading &&
                    Array(pageInfo.limit)
                      .fill(0)
                      .map((skeleton) => (
                        <div className="row" key={nanoid()}>
                          <WeblogItem isLoading={isLoading} />
                        </div>
                      ))} */}
            </div>
            {/* end show artcles */}
          </div>
          {/* start show review artcles */}

          <div className="col-12 col-lg-4 col-xl-3">
            <ArticleReview />
            <LastArticles />
          </div>

          {/* end show review artcles */}
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection;
