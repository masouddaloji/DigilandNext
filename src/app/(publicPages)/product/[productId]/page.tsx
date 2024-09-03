import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import ProductByIdSection from "@/components/templates/publicPages/ProductByIdSection/ProductByIdSection";
import { GetProductById } from "@/services/service";
import styles from "@/styles/Product.module.css";
export default async function Product({
  params,
}: {
  params: { productId: string };
}) {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["article", params.productId],
    queryFn: () => GetProductById(params.productId),
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className={styles.product}>
        <div className="container">
          <ProductByIdSection id={params.productId} />
        </div>
      </div>
    </HydrationBoundary>
  );
}
