"use client";
import React, { useEffect, useState } from "react";
import Input from "@/components/modules/FormControl/Input";
import { HiOutlineMail } from "react-icons/hi";
import { FieldValues, useForm, UseFormRegister } from "react-hook-form";
import { loginHandler } from "@/types/types";
import { MdLock } from "react-icons/md";
import styles from "@/styles/auth.module.css";
import { loginUserHandler } from "@/utils/auth";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginSchema } from "@/utils/Validator";
import { persianTexts } from "@/utils/persianTexts";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
// this error Functions cannot be passed directly to Client Components unless you explicitly expose it by marking it with "use server". Or maybe you meant to call this function rather than return it for this code please fixed
export const LoginClient = () => {
  const router = useRouter();
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm<loginHandler>({
    resolver: yupResolver(LoginSchema),
    defaultValues: {
      email: "",
      pwd: "",
    },
  });

  const [persist, setPersist] = useState<boolean>(
    localStorage?.getItem("persist") !== null
      ? JSON.parse(localStorage.getItem("persist") as string)
      : false
  );

  useEffect(() => {
    localStorage.setItem("persist", JSON.stringify(persist));
  }, [persist]);
  const onSubmit = handleSubmit(async (data) => {
    const response = await loginUserHandler(data);
    console.log("response=>",response);
    
    if (response === 200) {
      toast.success(persianTexts.login.loginSuccess);
      router.replace("/");
    } else if (response === 401) {
      toast.error(persianTexts.login.loginNotMatch);
      reset();
    } else {
      toast.error(persianTexts.login.loginError);
      reset();
    }

  });

  return (
    <>
      <Input
        register={register as unknown as UseFormRegister<FieldValues>}
        error={errors.email}
        controler="text"
        label="نام کاربری"
        name="email"
        type="input"
        icon={<HiOutlineMail className="input__icon" />}
      />
      <Input
        register={register as unknown as UseFormRegister<FieldValues>}
        error={errors.pwd}
        controler="password"
        label="رمز عبور"
        name="pwd"
        type="input"
        icon={<MdLock className="input__icon" />}
      />
      <div className={styles.login__btns}>
        <div className={styles.login__checkbox}>
          <input
            type="checkbox"
            name="saveme"
            id=""
            checked={persist}
            onChange={() => setPersist((prev) => !prev)}
          />
          <span className={styles.login__checkboxText}>مرا به خاطر بسپار</span>
        </div>
        <button type="submit" className={styles.login__forget}>
          فراموشی گذرواژه
        </button>
      </div>
      <button
        disabled={!isValid}
        type="submit"
        className={` ${styles.auth__btn} ${
          isValid && styles["auth__btn--active"]
        }`}
        onClick={onSubmit}
      >
        ورود
      </button>
    </>
  );
};
