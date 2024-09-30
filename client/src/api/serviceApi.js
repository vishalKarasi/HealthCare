import axios from "axios";

const serviceApi = axios.create({
  baseURL: "/api/service",
});

export const getServicesApi = async () => {
  const response = await serviceApi.get("/");
  return response.data;
};

export const addServiceApi = async (newService) => {
  const response = await serviceApi.post("/", newService);
  return response.data;
};

export const updateServiceApi = async (id, updatedService) => {
  const response = await serviceApi.put(`/${id}`, updatedService);
  return response.data;
};

export const deleteServiceApi = async (id) => {
  const response = await serviceApi.delete(`/${id}`);
  return response.data;
};

export default serviceApi;
