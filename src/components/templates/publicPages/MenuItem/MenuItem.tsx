import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { BsFolder } from "react-icons/bs";
import styles from "./MenuItem.module.css";
import { menuProps } from "@/types/types";

export default function MenuItem({ category }:{category:menuProps}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const categoryName=searchParams.get("category")??""
  const subCategory=searchParams.get("subCategory")??""
  const [isShowSubMenu, setIsShowSubMenu] = useState<boolean>(false);
  const filterByCategory=(categoryName:string)=>{
    const params=new URLSearchParams(searchParams)
    params.set("category",categoryName)
    params.delete("subCategory")
    replace(`${pathname}?${params.toString()}`)
  }
  const filterBySubCategory=(subCategoryName:string)=>{
    const params=new URLSearchParams(searchParams)
    params.set("category",category.shortLink)
    params.set("subCategory",subCategoryName)
    replace(`${pathname}?${params.toString()}`)
  }
  return (
    <div className={styles.menuItem}>
      <div
      onClick={()=>filterByCategory(category.shortLink)}
        className={`${ category.shortLink===categoryName ? styles["category__item--acvtive"] : null}`}
      >
        <BsFolder className={styles.menuItem__itemIcon} />
        {category.title}
      </div>
      {category.subMenu.length > 0 ? (
        <>
          {!isShowSubMenu ? (
            <AiOutlinePlusCircle
              className={`${styles.menuItem__openIcon}`}
              onClick={() => setIsShowSubMenu(true)}
            />
          ) : (
            <AiOutlineMinusCircle
              className={styles.menuItem__closeIcon}
              onClick={() => setIsShowSubMenu(false)}
            />
          )}
          <div
           className={`${styles.menuItem__subLists__wrapper} ${
            isShowSubMenu && styles["menuItem__subLists--show"]
          }`}
          >

          <ul
            className={styles.menuItem__subLists}
          >
            {category.subMenu.map((sub) => (
              <li
                className={`${styles.menuItem__subItem} ${
                  sub.shortLink === subCategory
                    ? styles["menuItem__subItem--active"]
                    : null
                }`}
                key={sub.id}
              >
                <span onClick={()=>filterBySubCategory(sub.shortLink)}>{sub.title}</span>
              </li>
            ))}
          </ul>
          </div>
        </>
      ) : null}
    </div>
  );
}
