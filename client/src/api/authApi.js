import axios from "axios";

const authApi = axios.create({
  baseURL: "/api/auth",
});

export const loginApi = async (credential) => {
  const response = await authApi.post("/login", credential);
  return response.data;
};

export const logoutApi = async () => {
  const response = await authApi.post("/logout");
  return response.data;
};
