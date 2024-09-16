import axios from "axios";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { toast } from "react-toastify";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8000",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export default axiosInstance;
axiosInstance.interceptors.request.use(
  (req) => {
    const cookie = cookies();
    const token = cookie.get("token")?.value;
    if (token) {
      req.headers.Authorization = `Bearer ${token}`;
    }
    return req;
  },
  (error) => {
    Promise.reject(error);
  }
);
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    console.log("run error in interceptor");
    const originalRequest = error.config;
    if (error.response.status === 401) {
      originalRequest._retry = true;
      try {
        const response = await axios.post("http://localhost:8000/refreshToken");
        const cookie = cookies();
        cookie.set("token", response.data.accessToken, {
          path: "/",
          httpOnly: true,
        });
        originalRequest.headers.Authorization = `Bearer ${response.data.accessToken}`;
        return axios(originalRequest);
      } catch (error) {
        // Handle token refresh failure
        // mostly logout the user and re-authenticate by login again
      }
    }
    if (error.response.status === 403) {
      toast.warning("لطفا وارد حساب کاربری خود شوید");
      redirect("/login");
    }
    return Promise.reject(error);
  }
);
