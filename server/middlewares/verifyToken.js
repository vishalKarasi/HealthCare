import jwt from "jsonwebtoken";

export const verifyToken = async (req, res, next) => {
  try {
    const token = req.cookies.accessToken;

    if (!token) {
      return res.status(403).json({ message: "Forbiden - Token doesnt exist" });
    }

    const verified = jwt.verify(token, process.env.JWT_SECRET);

    if (!verified) {
      return res.status(401).json({ message: "Unauthorized - Invalid Token" });
    }

    const user = {
      id: verified.id,
      email: process.env.ADMIN_EMAIL,
    };

    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
};
