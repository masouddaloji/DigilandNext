import Image from "next/image";
import React from "react";
import styles from "@/styles/auth.module.css";
import { persianTexts } from "@/utils/persianTexts";
import { RegisterClient } from "@/components/templates/authPage/RegisterClient";
const RegisterPage = () => {
  return (
    <div className={styles.auth__form}>
      <h3 className={styles.auth__title}>
        {" "}
        {persianTexts.register.registerTitle}
      </h3>
      <RegisterClient />
      <div className="auth__loginOptions">
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
      </div>
    </div>
  );
};

export default RegisterPage;
