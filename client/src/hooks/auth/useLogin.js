import { useState } from "react";
import { useAuthContext } from "@context/authContext";
import toast from "react-hot-toast";
import { loginApi } from "@api/authApi";
import { validateAuthInput } from "@utils/validateAuthInput";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const login = async (credential) => {
    const valid = validateAuthInput(credential);
    if (!valid) return;

    setLoading(true);
    try {
      const res = await loginApi(credential);
      localStorage.setItem("admin", JSON.stringify(res));
      setAuthUser(res);
      toast.success(res.message);
    } catch (error) {
      const errorMessage = error.response?.data?.error || error.message;
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return { loading, login };
};

export default useLogin;
