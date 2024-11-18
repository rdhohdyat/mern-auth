import express from "express";
import {
  signup,
  login,
  logout,
  verifyEmail,
  forgotPassword,
} from "../controllers/auth.controller.js";

const authRouter = express.Router();

authRouter.post("/signup", signup);
authRouter.post("/login", login);
authRouter.post("/logout", logout);

authRouter.post("/verify-email", verifyEmail);
authRouter.post("/forgot-password", forgotPassword);

export default authRouter;
