import { useState } from "react";
import { useAuthContext } from "@context/authContext";
import toast from "react-hot-toast";
import { logoutApi } from "@api/authApi";

const useLogout = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const logout = async () => {
    setLoading(true);
    try {
      const res = await logoutApi();
      localStorage.removeItem("admin");
      toast.success(res.message);
      setAuthUser(null);
    } catch (error) {
      const errorMessage = error.response?.data?.error || error.message;
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return { loading, logout };
};
export default useLogout;
