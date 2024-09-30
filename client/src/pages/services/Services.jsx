import "./services.css";
import { AddIcon, SearchIcon } from "@assets/icons/icons";
import ServiceCard from "@components/serviceCard/ServiceCard";
import ServiceForm from "./ServiceForm";
import { useServiceContext } from "@context/servicesContext";
import { useEffect, useState } from "react"; // Import useState
import useGetServices from "@hooks/service/useGetServices";
import { useAuthContext } from "@context/authContext";

function Services() {
  const { loading, getServices } = useGetServices();
  const { authUser } = useAuthContext();
  const { form, setForm } = useServiceContext();
  const { services } = useServiceContext();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredServices = services.filter((service) =>
    service.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    getServices();
  }, []);

  return (
    <main className="services">
      <h1>Services</h1>
      <div className="wrapper">
        <form className="searchBar" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="Search service"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit">
            <SearchIcon />
          </button>
        </form>
        {authUser && (
          <button
            className="btn btnSecondary addBtn"
            onClick={() => setForm(true)}
          >
            <AddIcon />
            Add service
          </button>
        )}
      </div>
      <ul className="serviceList">
        {filteredServices.map((service, index) => (
          <ServiceCard {...service} key={index} />
        ))}
      </ul>
      {form && <ServiceForm />}
    </main>
  );
}

export default Services;
