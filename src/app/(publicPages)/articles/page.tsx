import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import ArticlesSection from "@/components/templates/publicPages/ArticlesSection/ArticlesSection";
import { GetAricles, GetAriclesReview } from "@/utils/utils";

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
    })
  ]);
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ArticlesSection />
    </HydrationBoundary>
  );
};

export default ArticlesPage;
