import { CreatePost, EditPost, FetchPosts } from "./type";
import streams from "../api/streams";
import history from "../history";

export const fetchPosts = () => async (dispatch) => {
  const response = await streams.get("/");
  dispatch({ type: FetchPosts, payload: response.data });
};

export const createPost = (formValues) => async (dispatch) => {
  const response = await streams.post("/posts", formValues);
  dispatch({ type: CreatePost, payload: response.data });
  history.push("/");
};

export const editPost = (formValues, id) => async (dispatch) => {
  const response = await streams.patch(`/posts/${id}`, formValues);
  dispatch({ type: EditPost, payload: response.data });
};
