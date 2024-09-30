import toast from "react-hot-toast";

export const validateServiceInput = ({ name, price, description }) => {
  if (!name || !price || !description) {
    toast.error("All fields must be filled.");
    return false;
  }

  if (name.length > 25) {
    toast.error("Name must be at most 15 characters long");
    return false;
  }

  const priceNumber = parseFloat(price);
  if (isNaN(priceNumber) || priceNumber <= 0 || priceNumber >= 10000) {
    toast.error("Price must be a positive integer between 1-10000");
    return false;
  }

  const wordCount = description.split(/\s+/).length;
  if (wordCount < 15 && description.length < 100) {
    toast.error("Description must be at least 15 - 100 characters long");
    return false;
  }

  return true;
};
