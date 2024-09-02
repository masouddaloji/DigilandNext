import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { GetIndexPageInfos } from "@/utils/utils";
import IndexPage from "@/components/templates/publicPages/IndexPage";
export default async function HomePage() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["indexPage"],
    queryFn: GetIndexPageInfos,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <IndexPage />
    </HydrationBoundary>
  );
}
