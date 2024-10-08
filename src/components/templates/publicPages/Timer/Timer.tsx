"use client"
import { useCallback, useEffect, useState } from "react";
import styles from "./Timer.module.css";
import { BsClockHistory } from "react-icons/bs";

const Timer = ({ offPrice }:{offPrice:number}) => {
  const [time, setTime] = useState({ day: 0, hour: 0, minutes: 0, second: 0 });
  let interval:ReturnType<typeof setTimeout>;

  const startTimer = useCallback(() => {
    const currentDate = new Date();
    const expireDate = new Date(
      currentDate.setDate(currentDate.getDate() + 14)
    ).getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = expireDate - now;
      const expireDays = Math.floor(distance / (24 * 60 * 60 * 1000));
      const expireHours = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      );
      const expireMinutes = Math.floor(
        (distance % (60 * 60 * 1000)) / (1000 * 60)
      );
      const expireSecond = Math.floor((distance % (60 * 1000)) / 1000);

      setTime({
        day: expireDays,
        hour: expireHours,
        minutes: expireMinutes,
        second: expireSecond,
      });

      if (distance < 0) {
        clearInterval(interval);
      }
    }, 1000);
  }, []);

  useEffect(() => {
    startTimer();

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className={styles["suggestedproduct__time-Percent"]}>
      {offPrice ? (
        <div className={styles.suggestedproduct__percent}>
          <span>%{offPrice} </span>
        </div>
      ):null}

      <div className={styles.suggestedproduct__time}>
        <span className={styles.timer}>{`${String(time.day).padStart(2, "0")}`}</span>:
        <span className={styles.timer}>{`${String(time.hour).padStart(2, "0")}`}</span>
        :
        <span className={styles.timer}>{`${String(time.minutes).padStart(
          2,
          "0"
        )}`}</span>
        :
        <span className={styles["suggestedproduct__time-gold"]}>{`${String(
          time.second
        ).padStart(2, "0")}`}</span>
      </div>
      <div className={styles["suggestedproduct__icon-box"]}>
        <BsClockHistory className="fullIcon" />
      </div>
    </div>
  );
};

export default Timer;
