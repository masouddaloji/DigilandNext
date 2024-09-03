export const GetIndexPageInfos = async () => {
  const response = await fetch("http://localhost:8000/main");
  return response.json();
};
export const GetAricles = async () => {
  const response = await fetch(`http://localhost:8000/articles?page=${1}&limit=${12}`);  
  return response.json();
};
export const GetAricleById = async (id:string) => {
  const response = await fetch(`http://localhost:8000/articles/reviews/${id}`);  
  return response.json();
};
export const GetAriclesReview = async () => {
  const response = await fetch("http://localhost:8000/articles/reviews");  
  return response.json();
};
export const GetProductById = async (id:string) => {
  const response = await fetch(`http://localhost:8000/products/reviews/${id}`);  
  return response.json();
};
