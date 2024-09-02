import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsInfo } from "react-icons/bs";
import { SiGooglemaps } from "react-icons/si";
import { SlCallIn } from "react-icons/sl";
import FooterBtnTop from "./FooterBtnTop";
import styles from "./footer.module.css";
import Slider from "@/components/modules/slider/Slider";
import { footerSliderItems } from "@/utils/Constants";
export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Slider
              slide="footerSlider"
              array={footerSliderItems}
              slidesPerView={7}
              spaceBetween={15}
              loop={true}
              isSuccess={true}
              isLoading={false}
              autoplay={false}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className={styles.footer__wrapper}>
              <div className={styles.footer__rightBox}>
                <div className={styles.footer__box}>
                  <h6
                    className={`${styles["footer__title"]} ${styles["title__rightCircle"]}`}
                  >
                    دسترسی سریع
                  </h6>
                  <ul className={styles.footer__Items}>
                    <li className={styles.footer__item}>
                      <Link href="/" className={styles.footer__Link}>
                        تماس با ما
                      </Link>
                    </li>
                    <li className={styles.footer__item}>
                      <Link href="/" className={styles.footer__Link}>
                        وبلاگ
                      </Link>
                    </li>
                    <li className={styles.footer__item}>
                      <Link href="/" className={styles.footer__Link}>
                        پیگیری سفارش
                      </Link>
                    </li>
                    <li className={styles.footer__item}>
                      <Link href="/" className={styles.footer__Link}>
                        فروشگاه
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className={styles.footer__box}>
                  <h6
                    className={`${styles["footer__title"]} ${styles["title__rightCircle"]}`}
                  >
                    خدمات مشتریان
                  </h6>
                  <ul className={styles.footer__Items}>
                    <li className={styles.footer__item}>
                      <Link href="/" className={styles.footer__Link}>
                        سوالات متداول
                      </Link>
                    </li>
                    <li className={styles.footer__item}>
                      <Link href="/" className={styles.footer__Link}>
                        رویه بازگردانی کالا
                      </Link>
                    </li>
                    <li className={styles.footer__item}>
                      <Link href="/" className={styles.footer__Link}>
                        حریم خصوصی
                      </Link>
                    </li>
                    <li className={styles.footer__item}>
                      <Link href="/" className={styles.footer__Link}>
                        تماس با ما
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className={styles.footer__midBox}>
                <div className={styles.footer__midTitle}>
                  <BsInfo className={styles.footer__infoIcon} />
                  <h6 className={styles.footer__title}>درباره ماهدیس وب</h6>
                </div>
                <div>
                  <p className={styles.footer__aboutText}>
                    گروه ماهدیس وب از سال 1390 فعالیت خود را در زمینه طراحی و
                    توسعه نرم افزارهای تحت وب با توجه به استانداردها و متدولوژی
                    های روز دنیا و مد نظر قرار دادن ارزش ها و باورهای حرفه ای و
                    نیز مطالعات کیفی و کمی در زمینه سیستم های یکپارچه مدیریت تحت
                    وب , به منظور طرح,توسعه کاربرد نرم افزارهای مبتنی بر وب اغاز
                    نمود.
                  </p>
                  <p className={styles.footer__aboutText}>
                    شرکت طراحی سایت ماهدیس وب با طراحی چندین سایت اینترنتی در
                    زمینه های طراحی سایت (فروشگاهی ، طراحی سایت خبری، طراحی سایت
                    شرکتی و طراحی سایت خدماتی و..) با بهره گیری از بروزترین
                    تکنولوژی های طراحی سایت به همراه بهترین خدمات جانبی طراحی
                    سایت نظیر طراحی پوسته وردپرس (فروشگاهی – خبری و آموزش آنلاین
                    ) سئو و بهینه سازی سایت و طراحی سایت ریسپانسیو با افتخار در
                    کنار شماست.
                  </p>
                </div>
                <div className={styles.footer__imageBoxes}>
                  <div className={styles.footer__imageBox}>
                    <Image
                      width={70}
                      height={60}
                      className={styles.footer__image}
                      src="/images/footer/about1.webp"
                      alt=""
                    />
                  </div>
                  <div className={styles.footer__imageBox}>
                    <Image
                      width={70}
                      height={60}
                      className={styles.footer__image}
                      src="/images/footer/about2.webp"
                      alt=""
                    />
                  </div>
                  <div className={styles.footer__imageBox}>
                    <Image
                      width={70}
                      height={60}
                      className={styles.footer__image}
                      src="/images/footer/about3.webp"
                      alt=""
                    />
                  </div>
                  <div className={styles.footer__imageBox}>
                    <Image
                      width={70}
                      height={60}
                      className={styles.footer__image}
                      src="/images/footer/about4.webp"
                      alt=""
                    />
                  </div>
                  <div className={styles.footer__imageBox}>
                    <Image
                      width={70}
                      height={60}
                      className={styles.footer__image}
                      src="/images/footer/about5.webp"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="footer__leftBox">
                <h5 className="footer__title">تماس با ما</h5>
                <div>
                  <div className={styles.footer__flexed}>
                    <div className={styles.footer__iconBox}>
                      <SiGooglemaps className="fullIcon mapIcon" />
                    </div>
                    <span className="footer__address ss02">
                      کوهدشت ، شهرک شهید رجایی ، پلاک 85
                    </span>
                  </div>
                </div>
                <div className={styles.footer__flexed}>
                  <div className={styles.footer__iconBox}>
                    <SlCallIn className="fullIcon mapIcon" />
                  </div>
                  <span className="ss02">
                    <strong>021-</strong>
                    23456788
                  </span>
                </div>
                <div className={styles.footer__emailBox}>
                  <span className={styles.footer__email}>
                    masouddaloji@gmail.com
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footer__copy}>
          <div className={styles.footer__copyImageBox}>
            <Image
              width={25}
              height={25}
              src="/images/footer/footerimage.webp"
              alt=""
              className={styles.footer__copyImage}
            />
          </div>
          <div className={styles.footer__copyTextBox}>
            <p className={styles.footer__copyText}>
              کلیه حقوق مادی و معنوی برای این سایت محفوظ می باشد و هرگونه کپی
              برداری شامل پیگرد قانونی می باشد.
            </p>
          </div>
          <FooterBtnTop />
        </div>
      </div>
    </div>
  );
}
