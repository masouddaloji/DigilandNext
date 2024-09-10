"use client";
import Error from "@/components/modules/Error/Error";
import ProductCart from "@/components/modules/ProductCart/ProductCart";
import { persianTexts } from "@/utils/persianTexts";
import styles from "@/styles/Products.module.css";
import ShowCategory from "../ShowCategory/ShowCategory";
import { BiPoll } from "react-icons/bi";
import { useQuery } from "@tanstack/react-query";
import { GetProducts } from "@/services/service";
import FilterProducts from "../FilterProducts/FilterProducts";
import { ProductsCategoryProp } from "@/types/types";
import SidebarFilter from "@/components/templates/publicPages/SidebarFilter/SidebarFilter";
const ProductsCategory = ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const {
    data: products,
    isLoading,
    isSuccess,
    isError,
  } = useQuery<ProductsCategoryProp>({
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
    <>
      <div className="row">
        <div className="col-12">{/* <Breadcrumb /> */}</div>
        <ShowCategory
          categoryName={searchParams?.category as string ?? ""}
          subCategory={searchParams?.subCategory as string ?? ""}
        />
      </div>
      <div className="row">
        <SidebarFilter searchParams={searchParams} />

        <div className="col-12 col-lg-8 col-xl-9">
          <div className={styles.pageTitle}>
            <div className={styles.pageTitle__box}>
              <div className={styles.pageTitle__rightBox}>
                <BiPoll className={styles.pageTitle__icon} />
              </div>

              <hr className={styles.pageTitle__divider} />
            </div>
          </div>
          {/* start sorted products */}
          <FilterProducts />
          {/* end sorted products */}
          {/* start show products */}

          <div className="row ">
            {isSuccess &&
              (products?.data?.length > 0 ? (
                products.data.map((product) => (
                  <div
                    className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3"
                    key={product._id}
                  >
                    <ProductCart
                      {...product}
                      isLoading={isLoading}
                      isSuccess={isSuccess}
                    />
                  </div>
                ))
              ) : (
                <Error
                  title={persianTexts.productsCategory.noProducts}
                  type="warning"
                />
              ))}
            {/* {isLoading &&
              Array(pageInfo.limit)
                .fill(0)
                .map((product) => (
                  <div
                    className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3"
                    key={nanoid}
                  >
                    <ProductCart isLoading={isLoading} isSuccess={isSuccess} />
                  </div>
                ))} */}
            {isError && (
              <Error
                title={persianTexts.productsCategory.noResponse}
                type="warning"
              />
            )}
          </div>

          {/* end show products */}
          {/* start pagination */}
          {/* {products?.lastPage > 1 && (
            <CustomPagination
              count={products.lastPage}
              setData={setPageInfo}
              page={products.page}
            />
          )} */}
          {/* end pagination */}
        </div>
      </div>
    </>
  );
};

export default ProductsCategory;
