import express from "express";
import isAuthenticated from "../config/Auth.js";
import {
  createTweet,
  deleteTweet,
  getAllTweets,
  likeorDislike,
} from "../controllers/tweetController.js";

const router = express.Router();

router.route("/create").post(isAuthenticated, createTweet);
router.route("/delete/:id").delete(isAuthenticated, deleteTweet);
router.route("/like/:id").put(isAuthenticated, likeorDislike);
router.route("/alltweets/:id").get(isAuthenticated, getAllTweets);

export default router;
