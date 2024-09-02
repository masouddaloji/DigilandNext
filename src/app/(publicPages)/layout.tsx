import { ComponentsProps } from "@/types/types";
import React from "react";
import styles from "@/styles/mainLayout.module.css";
import Footer from "@/components/templates/publicPages/Footer/Footer";
import Header from "@/components/templates/publicPages/Header/Header";


export default function mainLayout({ children }: ComponentsProps) {
  return (
    <main className={styles.digi__container}>
      <section className={styles.digi_wrapper}>
        <Header />
        {children}
        <Footer />
      </section>
    </main>
  );
}
