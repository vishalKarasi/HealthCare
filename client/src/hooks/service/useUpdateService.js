import { useState } from "react";
import { updateServiceApi } from "@api/serviceApi";
import { useServiceContext } from "@context/servicesContext";
import toast from "react-hot-toast";
import { validateServiceInput } from "@utils/validateServiceInput";

const useUpdateService = () => {
  const { updateServiceState } = useServiceContext();
  const [loading, setLoading] = useState(false);

  const updateService = async (id, updatedService) => {
    const valid = validateServiceInput(updatedService);
    if (!valid) return;
    setLoading(true);
    try {
      const res = await updateServiceApi(id, updatedService);
      updateServiceState(id, res.service);
      toast.success(res.message);
    } catch (error) {
      const errorMessage = error.response?.data?.error || error.message;
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return { loading, updateService };
};

export default useUpdateService;
