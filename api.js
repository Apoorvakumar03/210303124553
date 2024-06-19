import axios from 'axios';

const BASE_URL = 'http://testserver.com/api';

export const registerCompanies = async () => {
  const response = await axios.post(`${BASE_URL}/register`);
  return response.data;
};

export const fetchProducts = async (category, company) => {
  const response = await axios.get(`${BASE_URL}/products`, { params: { category, company } });
  return response.data;
};

export const generateUniqueId = (product) => {
  return `${product.company}-${product.category}-${product.id}`;
};