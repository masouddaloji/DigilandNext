"use client";
import Input from "@/components/modules/FormControl/Input";
import { registerHandler } from "@/types/types";
import React from "react";
import { FieldValues, useForm, UseFormRegister } from "react-hook-form";
import { HiOutlineMail } from "react-icons/hi";
import { MdLock } from "react-icons/md";
import styles from "@/styles/auth.module.css";
import { persianTexts } from "@/utils/persianTexts";
import { registerUserHandler } from "@/utils/auth";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterSchema } from "@/utils/Validator";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
export const RegisterClient = () => {
  const router = useRouter();
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm<registerHandler>({
    defaultValues: {
      registerEmail: "",
      registerPassword: "",
      registerConfirmPassword: "",
    },
    resolver: yupResolver(RegisterSchema),
  });
  const onSubmit = handleSubmit(async (data) => {
   const response= await registerUserHandler(data)
    if ( response === 201) {
      toast.success(persianTexts.register.registerSuccess);
      router.replace("/login");
    } else {
      toast.error(persianTexts.register.registerError);
      reset();
    }
  });
  return (
    <>
      <Input
        register={register as unknown as UseFormRegister<FieldValues>}
        error={errors.registerEmail}
        controler="text"
        label="ایمیل"
        name="registerEmail"
        type="input"
        icon={<HiOutlineMail className="input__icon" />}
      />
      <Input
        register={register as unknown as UseFormRegister<FieldValues>}
        error={errors.registerPassword}
        controler="password"
        label="رمز عبور"
        name="registerPassword"
        type="input"
        icon={<MdLock className="input__icon" />}
      />
      <Input
        register={register as unknown as UseFormRegister<FieldValues>}
        error={errors.registerConfirmPassword}
        controler="password"
        label="تکرار رمز عبور"
        name="registerConfirmPassword"
        type="input"
        icon={<MdLock className="input__icon" />}
      />

      <button
        disabled={!isValid}
        type="submit"
        className={` ${styles.auth__btn} ${
          isValid && styles["auth__btn--active"]
        }`}
        onClick={onSubmit}
      >
        {persianTexts.register.registerBtn}
      </button>
    </>
  );
};
