import { FooterSliderProps } from '@/types/types'
import Image from 'next/image'
import React from 'react'
import styles from "./FooterSlider.module.css"
export default function FooterSlider({img,title}:FooterSliderProps) {
  return (
    <div className={styles.footerSlide}>
    <Image src={img} alt="footer img" className={styles.footerSlide__img} width={40} height={40} />
    <span className={styles.footerSlide__caption}>{title}</span>
  </div>
  )
}
