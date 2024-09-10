import { menus } from "@/utils/Constants";
import styles from "./ShowCategory.module.css";
import Link from "next/link";
import Image from "next/image";

const ShowCategory = ({ categoryName, subCategory }:{ categoryName:string, subCategory:string }) => {
  let content;

  if (!categoryName) {
    content = (
      <div className={styles["product-category"]}>
        <div className={styles["product-category__Wrapper"]}>
          <span
            className={styles["product-category__Title"]}
            title="دسته بندی ها"
          ></span>
          <ul className={styles["product-category__Lists"]}>
            {menus.map(({ img, link, title, id,shortLink }) => (
              <li className={styles["product-category__Item"]} key={id}>
                <Link className={styles["product-category__link"]} href={`?category=${shortLink}`}>
                  {img && (
                    <div className={styles["product-category__iconBox"]}>
                      <Image
                      width={50}
                      height={50}
                        src={img}
                        alt="sub menu image"
                        className={styles["product-category__img"]}
                      />
                    </div>
                  )}

                  <span className={styles["product-category__title"]}>
                    {title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
  if (categoryName && !subCategory) {
    content = menus.map((category) => {
      if (category.shortLink === categoryName && category.subMenu.length > 0) {
        return (
          <div className={styles["product-category"]} key={category.id}>
            <div className={styles["product-category__Wrapper"]}>
              <span
                className={styles["product-category__Title"]}
                title="زیرمجموعه ها"
              ></span>
              <ul className={styles["product-category__Lists"]}>
                {category.subMenu.map((sub) => (
                  <li className={styles["product-category__Item"]} key={sub.id}>
                    <Link
                      className={styles["product-category__link"]}
                      href={`?category=${category.shortLink}&subCategory=${sub.shortLink}`}
                    >
                      {sub.img ? (
                        <div className={styles["product-category__iconBox"]}>
                          <Image
                          width={50}
                          height={50}
                            src={sub.img}
                            alt="sub menu image"
                            className={styles["product-category__img"]}
                          />
                        </div>
                      ) : null}

                      <span className={styles["product-category__title"]}>
                        {sub.title}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      }
    });
  }

  return <>{content}</>;
};

export default ShowCategory;
