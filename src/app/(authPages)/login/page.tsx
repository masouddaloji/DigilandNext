
import React from "react";
import styles from "@/styles/auth.module.css";
import { persianTexts } from "@/utils/persianTexts";
import { LoginClient } from "@/components/templates/authPage/LoginClient";
import { loginHandler } from "@/types/types";
import Image from "next/image";
import Link from "next/link";

const LoginPage = () => {
 
  return (
    <div className={styles.auth__form}>
      <h3 className={styles.auth__title}>{persianTexts.login.headerTitle}</h3>
      <LoginClient />
      <div className={styles.auth__loginOptions}>
        <span>{persianTexts.login.otherAcount}</span>
        <div className={styles.otherAccount}>
          <div className={styles.accountBox}>
            <span>Discord</span>
            <Image
              width={22}
              height={22}
              src="/images/auth/logo-discord.png"
              alt="google logo"
              className={styles.account__image}
            />
          </div>
          <div className={styles.accountBox}>
            <span>Facebook</span>
            <Image
              width={22}
              height={22}
              src="/images/auth/logo-facebook.png"
              alt="google logo"
              className={styles.account__image}
            />
          </div>
          <div
            className={styles.accountBox}
            // onClick={googleLoginHandler}
          >
            <span>Google</span>
            <Image
              width={22}
              height={22}
              src="/images/auth/logo-google.png"
              alt="google logo"
              className={styles.account__image}
            />
          </div>
        </div>
        <span>
          {persianTexts.login.notRegister}
          <Link href="/register" className={styles.login__registerLink}>
            {persianTexts.login.createAccountLink}
          </Link>
        </span>
      </div>
    </div>
  );
};

export default LoginPage;
