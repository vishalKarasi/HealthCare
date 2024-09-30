import { createToken } from "../utils/createToken.js";

// admin login
export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Please fill in all fields" });
    }

    const isMatch =
      email === process.env.ADMIN_EMAIL &&
      password === process.env.ADMIN_PASSWORD;

    if (!isMatch) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    createToken(process.env.ADMIN_ID, res);

    return res.status(200).json({
      email: process.env.ADMIN_EMAIL,
      message: "Login successful",
    });
  } catch (error) {
    next(error);
  }
};

// admin logout
export const logout = async (req, res, next) => {
  try {
    res.clearCookie("accessToken");
    res.status(200).json({ message: "Logout successful" });
  } catch (error) {
    next(error);
  }
};
