
import Link from "next/link";
import styles from "./ServiceBox.module.css";
import { ServiceBoxProps } from "@/types/types";

export default function ServiceBox(props:ServiceBoxProps) {
  const { icon, title, link, isLoading, isSuccess } = props;
  return (
    <>
      { isSuccess ? (
        <Link className={styles.linkBox__link} href={link}>
          <div className={styles.linkBox__iconBox}>{icon}</div>
          <h4 className={styles.linkBox__title}>{title}</h4>
          <span className="ss02">+10 محصول</span>
        </Link>
      ) : null}
    </>
  );
}
// isLoading ? (
//   <div className="linkBox__link">
//     <Stack spacing={1} style={{ paddingTop: "1rem" }}>
//       <Skeleton
//         animation="wave"
//         variant="circular"
//         width="5rem"
//         height="5rem"
//       />
//       <Skeleton
//         animation="wave"
//         variant="text"
//         sx={{ fontSize: "1rem" }}
//       />
//       <Skeleton
//         animation="wave"
//         variant="text"
//         sx={{ fontSize: "1rem" }}
//       />
//     </Stack>
//   </div>
// ) :