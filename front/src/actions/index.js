import { FetchPost } from "./type";
import streams from "../api/streams";

export const fetchPosts = () => async (dispatch) => {
  const response = await streams.get("/");
  dispatch({ type: FetchPost, payload: response.data });
};
