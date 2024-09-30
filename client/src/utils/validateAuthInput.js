import toast from "react-hot-toast";

export const validateAuthInput = ({ email, password }) => {
  if (!email || !password) {
    toast.error("Please fill in all fields");
    return false;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    toast.error("Please enter a valid email address");
    return false;
  }

  const passwordPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (!passwordPattern.test(password)) {
    toast.error(
      "Password must be at least 8 characters long and include - (uppercase letter, lowercase letter,  number, and special character)"
    );
    return false;
  }

  return true;
};
