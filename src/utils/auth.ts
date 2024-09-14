"use server";
import { cookies } from "next/headers";
import instance from "@/services/api";
import { CustomJwtPayload, loginHandler, registerHandler } from "@/types/types";
import { jwtDecode } from "jwt-decode";
export const loginUserHandler = async (data: loginHandler) => {
  const cookie = cookies();
  try {
    const res = await instance.post("/auth/login", data);
    if (res.data.accessToken) {
      cookie.set("token", res.data.accessToken, {
        path: "/",
        httpOnly: true,
      });
    }
    return res.status;
  } catch (error: any) {
    return error.response.status;
  }
};
export const registerUserHandler = async (formData: registerHandler) => {
  try {
    const userData = {
      email: formData.registerEmail,
      pwd: formData.registerPassword,
    };
    const response = await instance.post("/auth/register", userData);
    return response.status;
  } catch (error: any) {
    return error.response.status;
  }
};
export const userInfo = () => {
  const cookie = cookies();
  const token = cookie.get("token")?.value;
  let userName = "";
  let userRole = null;
  let userID = null;
  if (token) {
    const decode = jwtDecode(token);
    const { email, role, userId } = decode as CustomJwtPayload;
    userName = email.split("@")[0];
    userRole = role;
    userID = userId;
  }
  const userDetails = { userName, userRole, userID };
  return userDetails;
};
