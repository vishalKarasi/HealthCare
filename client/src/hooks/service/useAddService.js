import { useState } from "react";
import { addServiceApi } from "@api/serviceApi";
import { useServiceContext } from "@context/servicesContext";
import toast from "react-hot-toast";
import { validateServiceInput } from "@utils/validateServiceInput";

const useAddService = () => {
  const { addServiceState } = useServiceContext();
  const [loading, setLoading] = useState(false);

  const addService = async (newService) => {
    const valid = validateServiceInput(newService);
    if (!valid) return;
    setLoading(true);
    try {
      const res = await addServiceApi(newService);
      addServiceState(res.service);
      toast.success(res.message);
    } catch (error) {
      const errorMessage = error.response?.data?.error || error.message;
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return { loading, addService };
};

export default useAddService;
