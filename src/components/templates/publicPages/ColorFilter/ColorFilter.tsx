import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { colorOptions } from "@/utils/Constants";
import styles from "./ColorFilter.module.css";
import Image from "next/image";

const ColorFilter = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const setColorHandler = (color: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("color", color);
    replace(`${pathname}?${params}`);
  };
  return (
    <div className={styles.colorFilter}>
      {colorOptions.map((color) => (
        <div className={styles.colerFilter__itemBox} key={color.id}>
          <div
            onClick={() => setColorHandler(color.value)}
            className={`${styles.colorFilter__itemImageBox} ${
              searchParams.get("color") === color.value
                ? styles.selecedColor
                : null
            }`}
          >
            <Image
              width={48}
              height={48}
              className={styles.color__option}
              src={color.img}
              alt="color products"
            />
          </div>
          <span className={styles.colerFilter__itemTitle}>{color.value}</span>
        </div>
      ))}
    </div>
  );
};

export default ColorFilter;
