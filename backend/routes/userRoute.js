import express from "express";
import {
  Login,
  Logout,
  Register,
  Bookmarks,
  getMyProfile,
} from "../controllers/userController.js";
import isAuthenticated from "../config/Auth.js";

const router = express.Router();

router.route("/register").post(Register);
router.route("/login").post(Login);
router.route("/logout").get(Logout);
router.route("/bookmark/:id").put(isAuthenticated, Bookmarks);
router.route("/profile/:id").get(isAuthenticated, getMyProfile);

export default router;
