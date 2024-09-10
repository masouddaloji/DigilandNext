import ProductsCategory from "@/components/templates/publicPages/ProductsCategory/ProductsCategory";
import { GetProducts } from "@/services/service";
import {
  HydrationBoundary,
  dehydrate,
  QueryClient,
} from "@tanstack/react-query";
export default async function ProductsPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["Products"],
    queryFn: () =>
      GetProducts({
        params: {
          page: (searchParams?.page as string) ?? "1",
          limit: (searchParams?.limit as string) ?? "12",
          category: (searchParams?.category as string) ?? "",
          subCategory: (searchParams?.subCategory as string) ?? "",
          color: (searchParams?.color as string) ?? "",
          price: (searchParams?.price as string) ?? "",
          sort: (searchParams?.sort as string) ?? "",
          brand: (searchParams?.brand as string) ?? "",
          search: (searchParams?.search as string) ?? "",
        },
      }),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="container">
        <ProductsCategory searchParams={searchParams} />
      </div>
    </HydrationBoundary>
  );
}
