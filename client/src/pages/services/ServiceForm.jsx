import { useEffect, useState } from "react";
import { useServiceContext } from "@context/servicesContext";
import "./services.css";
import { CloseIcon } from "@assets/icons/icons";
import useAddService from "@hooks/service/useAddService";
import useUpdateService from "@hooks/service/useUpdateService";

function ServiceForm() {
  const { setForm, isEdit, setIsEdit, selectedService, setSelectedService } =
    useServiceContext();
  const { loading: addLoading, addService } = useAddService();
  const { loading: updateLoading, updateService } = useUpdateService();

  const [service, setService] = useState({
    name: isEdit ? selectedService.name : "",
    price: isEdit ? selectedService.price : "",
    description: isEdit ? selectedService.description : "",
  });

  const handleChange = (e) => {
    setService({ ...service, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isEdit) {
      await updateService(selectedService._id, service);
    } else {
      await addService(service);
    }
    setForm(false);
    setIsEdit(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3 className="formHead">
        {isEdit ? "Update Service Details" : "Enter Service Details"}
        <span
          className="btnClose"
          onClick={() => {
            setIsEdit(false);
            setSelectedService({ name: "", price: "", description: "" });
            setForm(false);
          }}
        >
          <CloseIcon />
        </span>
      </h3>
      <input
        type="text"
        name="name"
        placeholder="Enter service name"
        value={service.name}
        onChange={handleChange}
      />
      <input
        type="number"
        name="price"
        placeholder="Enter price"
        value={service.price}
        onChange={handleChange}
      />
      <textarea
        rows={4}
        name="description"
        value={service.description}
        onChange={handleChange}
      ></textarea>
      <button type="submit" className="btn btnPrimary">
        {addLoading || updateLoading
          ? "Loading..."
          : isEdit
          ? "Update"
          : "Create"}
      </button>
    </form>
  );
}

export default ServiceForm;
