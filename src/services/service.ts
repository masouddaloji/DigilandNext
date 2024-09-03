"use server"
import instance from "./api";

export const GetIndexPage = async () => {
    const response = await instance.get("/main")
    return response.data
  };
  export const GetAricles = async () => {
    const response = await instance.get(`/articles?page=${1}&limit=${12}`)
    return response.data
  };
  export const GetAricleById = async (id:string) => {
    const response = await instance.get(`/articles/reviews/${id}`)
    return response.data
  };
  export const GetAriclesReview = async () => {
    const response = await instance.get("/articles/reviews")
    return response.data
  };
  export const GetProductById = async (id:string) => {
    const response = await instance.get(`/products/reviews/${id}`)
    return response.data
  };