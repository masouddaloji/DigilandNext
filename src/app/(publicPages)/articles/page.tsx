import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import ArticlesSection from "@/components/templates/publicPages/ArticlesSection/ArticlesSection";
import { GetAricles, GetAriclesReview } from "@/services/service";
import styles from "@/styles/ArticlesPage.module.css";

const ArticlesPage = async () => {
  const queryClient = new QueryClient();
  await Promise.all([
    queryClient.prefetchQuery({
      queryKey: ["aricles"],
      queryFn: GetAricles,
    }),
    queryClient.prefetchQuery({
      queryKey: ["ariclesReview"],
      queryFn: GetAriclesReview,
    }),
  ]);
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <section className={styles.weblog}>
        <div className="container">
          <div className="row">
            <ArticlesSection />
          </div>
        </div>
      </section>
    </HydrationBoundary>
  );
};

export default ArticlesPage;
