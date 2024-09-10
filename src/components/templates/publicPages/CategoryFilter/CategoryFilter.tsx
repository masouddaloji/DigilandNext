import { menus } from "@/utils/Constants";
import styles from "./CategoryFilter.module.css";
import MenuItem from "@/components/templates/publicPages/MenuItem/MenuItem";

export default function CategoryFilter() {
  return (
    <div className={styles.categoryFilter}>
      <ul className={styles.categoryFilter__lists}>
        {menus.map((category) => (
          <li className={styles.categoryFilter__item} key={category.id}>
            <MenuItem category={category} />
          </li>
        ))}
      </ul>
    </div>
  );
}
