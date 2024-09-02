export const GetIndexPageInfos = async () => {
  const response = await fetch("http://localhost:8000/main");
  return response.json();
};
export const GetAricles = async () => {
  const response = await fetch(`http://localhost:8000/articles?page=${1}&limit=${12}`);  
  return response.json();
};
export const GetAriclesReview = async () => {
  const response = await fetch("http://localhost:8000/articles/reviews");  
  return response.json();
};
