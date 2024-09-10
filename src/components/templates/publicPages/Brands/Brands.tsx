import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import styles from "./Brands.module.css";
import { brands } from "@/utils/Constants";
import Image from "next/image";

export default function Brands() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const [searchedBrand, setSearchedBrand] = useState<string>("");
  const [categoryName, setCategoryName] = useState<string>("");
  const [subCategory, setSubCategory] = useState<string>("");
  const filterHandler = (brand: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("brand", brand);
    replace(`${pathname}?${params.toString()}`);
  };

  let uniqBrands = useMemo(() => {
    let currentBrandbyPage = [];
    if (!categoryName && !subCategory) {
      const allBrands = brands as any
        ? Object.values(brands)
            .flatMap((category) => Object.values(category))
            .flatMap((subcategory) => subcategory.brands)
            .filter((brand) => brand)
        : [];

      const includedTitle = new Set();

      for (const item of allBrands) {
        if (!includedTitle.has(item.title)) {
          includedTitle.add(item.title);
          currentBrandbyPage.push(item);
        }
      }
    }
    if (categoryName && !subCategory) {
      const allBrands = brands
        ? Object.values(brands[categoryName]).flatMap((category) =>
            Object.values(category).flatMap((sub) => sub)
          )
        : [];

      const includedTitle = new Set();

      for (const item of allBrands) {
        if (!includedTitle.has(item.title)) {
          includedTitle.add(item.title);
          currentBrandbyPage.push(item);
        }
      }
    }

    if (subCategory) {
      const allBrands = brands?.[categoryName]?.[subCategory]?.brands ?? [];
      currentBrandbyPage = [...allBrands];
    }
    return currentBrandbyPage;
  }, [categoryName, subCategory]);

  let filteredBrandsBySearch = uniqBrands.filter(
    (brand) =>
      brand.perTitle.includes(searchedBrand.trim()) ||
      brand.title.includes(searchedBrand.trim())
  );
  useEffect(() => {
    setCategoryName(searchParams.get("category") ?? "");
    setSubCategory(searchParams.get("subCategory") ?? "");
  }, [searchParams]);
  return (
    <ul className={styles.brands}>
      {filteredBrandsBySearch?.length ? (
        <>
          {/*<li>
             <input
              type="search"
              className="filter__input"
              placeholder="جستجوی برند ها"
              value={searchedBrand}
              onChange={(e) => setSearchedBrand(e.target.value)}
            />
          </li> */}
          {filteredBrandsBySearch.map((brand) => (
            <li
              className={styles.brands__brandBox}
              key={brand.id}
              onClick={() => filterHandler(brand.title)}
            >
              <input
                type="checkbox"
                defaultChecked={searchParams.get("brand") === brand.title}
              />
              <Image src={brand.img} width={30} height={30} className={styles.brands__brandImg} alt="" />
              <span className={styles.brands__brandTitle}>{brand.perTitle}</span>
            </li>
          ))}
        </>
      ) : null}
    </ul>
  );
}
