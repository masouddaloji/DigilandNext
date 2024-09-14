import { ComponentsProps } from "@/types/types";
import Image from "next/image";
import React from "react";
import styles from "@/styles/auth.module.css";
const AuthLayout = ({ children }: ComponentsProps) => {
  return (
    <div className={styles.auth}>
      <div className="container">
        <div className={styles.auth__wrapper}>
          <div className={styles.auth__imageBox}>
            <Image
              src="/images/auth/login.jpg"
              alt=""
              className={styles.auth__image}
              width={1000}
              height={1000}
            />
          </div>
          <div className={styles.auth__content}>
            <div className={styles.auth__logoBox}>
              <Image
                className={styles.auth__logoimg}
                src="/images/logo-mobile.png"
                alt="auth logo image"
                width={180}
                height={30}
              />
            </div>

            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
