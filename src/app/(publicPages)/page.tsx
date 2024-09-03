import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import IndexPage from "@/components/templates/publicPages/IndexPage";
import { Metadata } from "next";
import { GetIndexPage } from "@/services/service";
export const metadata: Metadata = {
  title: "صفحه اصلی",
  description:
    "صفحه اصلی دیجی لند شامل بخش های اخرین محصولات ،محصولات با بیشترین تخفیف ،اخرین مقالات، محصولات اپل",
};
export default async function HomePage() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["indexPage"],
    queryFn: GetIndexPage,
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <section className="container">
        <IndexPage />
      </section>
    </HydrationBoundary>
  );
}
