import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { GetAricleById } from "@/utils/utils";
import ArticleSection from "@/components/templates/publicPages/ArticleSection/ArticleSection";

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
      <ArticleSection id={params.articleId} />
    </HydrationBoundary>
  );
};

export default Article;
