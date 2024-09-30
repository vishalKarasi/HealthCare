import { useServiceContext } from "@context/servicesContext";
import "./serviceCard.css";
import { DeleteIcon, EditIcon } from "@assets/icons/icons";
import useDeleteService from "@hooks/service/useDeleteService";
import { useAuthContext } from "@context/authContext";
import service from "@assets/images/services/service.jpg";

function ServiceCard(props) {
  const { _id, name, head, description, price } = props;
  const { authUser } = useAuthContext();
  const { setForm, setIsEdit, setSelectedService } = useServiceContext();
  const { deleteService } = useDeleteService();

  const handleEdit = () => {
    setForm(true);
    setIsEdit(true);
    setSelectedService(props);
  };

  const handleDelete = async () => {
    await deleteService(_id);
  };

  return (
    <li className="serviceCard">
      {authUser && (
        <div className="cardOptions">
          <button className="editBtn" onClick={handleEdit}>
            <EditIcon />
          </button>
          <button onClick={handleDelete}>
            <DeleteIcon />
          </button>
        </div>
      )}
      <h2>{name}</h2>
      <h3>{head}</h3>
      <p className="serviceDesc">
        {description.length > 30
          ? `${description.slice(0, 200)}...`
          : description}
      </p>
      <span className="servicePrice">{price}$</span>
      <button className="btn btnSecondary">View more</button>
    </li>
  );
}

export default ServiceCard;
