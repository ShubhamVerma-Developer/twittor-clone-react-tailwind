import axios from "axios";
import { TWEET_API_END_POINT } from "../utils/constant";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTweets } from "../redux/tweetSlice";
const useGetMyTweets = async (id) => {
  const dispatch = useDispatch();
  const { refresh } = useSelector((store) => store.tweet);
  useEffect(() => {
    const fetchMyTweets = async () => {
      try {
        const res = await axios.get(`${TWEET_API_END_POINT}/alltweets/${id}`, {
          withCredentials: true,
        });
        console.log(res.data);
        dispatch(getAllTweets(res.data.tweets));
        console.log(res.data.tweets);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMyTweets();
  }, [refresh]);
};

export default useGetMyTweets;
