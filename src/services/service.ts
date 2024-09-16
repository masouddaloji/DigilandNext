"use server";
import axiosInstance from "./api";

export const GetIndexPage = async () => {
  const response = await axiosInstance.get("/main");
  return response.data;
};
export const GetAricles = async () => {
  const response = await axiosInstance.get(`/articles?page=${1}&limit=${12}`);
  return response.data;
};
export const GetAricleById = async (id: string) => {
  const response = await axiosInstance.get(`/articles/reviews/${id}`);
  return response.data;
};
export const GetAriclesReview = async () => {
  const response = await axiosInstance.get("/articles/reviews");
  return response.data;
};
export const GetProductById = async (id: string) => {
  const response = await axiosInstance.get(`/products/reviews/${id}`);
  return response.data;
};
export const GetProducts = async ({
  params,
}: {
  params: {
    page?: string;
    limit?: string;
    category?: string;
    subCategory?: string;
    color?: string;
    price?: string;
    sort?: string;
    brand?: string;
    search?: string;
  };
}) => {
  const response = await axiosInstance.get(`/products`, {
    params,
  });
  return response.data;
};

export const getBasket=async()=>{
  console.log("run get basket")
  const {data}=await axiosInstance.get("/basket")
  return data.data
}