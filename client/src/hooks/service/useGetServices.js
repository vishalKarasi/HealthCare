import { useState } from "react";
import { useServiceContext } from "@context/servicesContext";
import { getServicesApi } from "@api/serviceApi";
import toast from "react-hot-toast";

const useGetServices = () => {
  const { setServices } = useServiceContext();
  const [loading, setLoading] = useState(true);

  const getServices = async () => {
    try {
      const services = await getServicesApi();
      setServices(services);
    } catch (error) {
      const errorMessage = error.response?.data?.error || error.message;
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return { loading, getServices };
};

export default useGetServices;
