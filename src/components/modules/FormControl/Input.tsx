import React, { useState } from "react";
import { BiHide, BiShow } from "react-icons/bi";
import styles from "./FormControl.module.css";
import { InputProps } from "@/types/types";

const Input = ({
  controler,
  name,
  icon,
  label,
  type,
  register,
  error,
}: InputProps) => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  return (
    <div className={styles.formControl__wrapper}>
      <div className={styles.inputBox}>
        {type === "textarea" ? (
          <textarea
            required
            className={` ${styles.textarea} ${
              error?.message ? styles["input--invalid"] : ""
            }`}
            autoComplete="off"
            id={name}
            {...register(name)}
          />
        ) : (
          <input
            required
            className={`${error?.message ? styles["input--invalid"]:""}`}
            autoComplete="off"
            id={name}
            {...register(name)}
            type={
              controler !== "password"
                ? controler
                : !isShowPassword
                ? "password"
                : "text"
            }
          />
        )}
        <span className={styles.input__infoBox}>
          {icon ?? null}
          {label && <span className={styles.input__label}>{label}</span>}
        </span>
        {controler === "password" && (
          <>
            {!isShowPassword ? (
              <span className={styles.password__statusBox}>
                <BiShow
                  className={styles.password__status}
                  onClick={() => setIsShowPassword(!isShowPassword)}
                />
              </span>
            ) : (
              <span className={styles.password__statusBox}>
                <BiHide
                  className={styles.password__status}
                  onClick={() => setIsShowPassword(!isShowPassword)}
                />
              </span>
            )}
          </>
        )}
      </div>
      {error && <span className={styles.auth__error}>{error.message}</span>}
    </div>
  );
};

export default Input;
