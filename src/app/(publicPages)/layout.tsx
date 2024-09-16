import { ComponentsProps } from "@/types/types";
import React from "react";
import styles from "@/styles/mainLayout.module.css";
import Footer from "@/components/templates/publicPages/Footer/Footer";
import Header from "@/components/templates/publicPages/Header/Header";
import { userInfo } from "@/utils/auth";

export default async function mainLayout({ children }: ComponentsProps) {
  const { userName, userRole } = await userInfo();
  return (
    <main className={styles.digi__container}>
      <section className={styles.digi_wrapper}>
        <Header userName={userName} userRole={userRole} />
        {children}
        <Footer />
      </section>
    </main>
  );
}
