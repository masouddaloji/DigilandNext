import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import ProductPageInfo from "@/components/templates/publicPages/ProductPageInfo/ProductPageInfo";
import { GetProductById } from "@/utils/utils";
export default async function Product({
  params,
}: {
  params: { productId: string },
}) {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["article", params.productId],
    queryFn: () => GetProductById(params.productId),
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ProductPageInfo id={params.productId} />
    </HydrationBoundary>
  );
}
