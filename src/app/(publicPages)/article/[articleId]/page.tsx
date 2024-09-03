import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { GetAricleById } from "@/services/service";
import ArticleSection from "@/components/templates/publicPages/ArticleSection/ArticleSection";
import styles from "@/styles/Article.module.css";
const Article = async ({
  params,
}: {
  params: {
    articleId: string;
  };
}) => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["article", params.articleId],
    queryFn: () => GetAricleById(params.articleId),
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <section className={styles.article}>
        <div className="container">
          <ArticleSection id={params.articleId} />
        </div>
      </section>
    </HydrationBoundary>
  );
};

export default Article;
