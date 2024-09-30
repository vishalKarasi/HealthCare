import { useState } from "react";
import { deleteServiceApi } from "@api/serviceApi";
import { useServiceContext } from "@context/servicesContext";
import toast from "react-hot-toast";

const useDeleteService = () => {
  const { deleteServiceState } = useServiceContext();
  const [loading, setLoading] = useState(false);

  const deleteService = async (id) => {
    setLoading(true);
    try {
      const res = await deleteServiceApi(id);
      deleteServiceState(id);
      toast.success(res.message);
    } catch (error) {
      const errorMessage = error.response?.data?.error || error.message;
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return { loading, deleteService };
};

export default useDeleteService;
