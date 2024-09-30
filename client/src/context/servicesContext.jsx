import React, { createContext, useContext, useState } from "react";

const ServiceContext = createContext();

export const useServiceContext = () => {
  return useContext(ServiceContext);
};

export const ServiceProvider = ({ children }) => {
  const [services, setServices] = useState([]);
  const [form, setForm] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const addServiceState = (newService) => {
    setServices((prev) => [...prev, newService]);
  };

  const updateServiceState = (id, updatedService) => {
    setServices((prev) =>
      prev.map((service) => (service._id === id ? updatedService : service))
    );
  };

  const deleteServiceState = (id) => {
    setServices((prev) => prev.filter((service) => service._id !== id));
  };

  const providingValues = {
    services,
    setServices,
    selectedService,
    setSelectedService,
    form,
    setForm,
    isEdit,
    setIsEdit,
    addServiceState,
    updateServiceState,
    deleteServiceState,
  };

  return (
    <ServiceContext.Provider value={providingValues}>
      {children}
    </ServiceContext.Provider>
  );
};
