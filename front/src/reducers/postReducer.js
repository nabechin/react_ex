import { CreatePost, FetchPosts } from "../actions/type";
import _ from "lodash";

export default (state = {}, action) => {
  console.log(_.mapKeys(action.payload, "id"));
  switch (action.type) {
    case FetchPosts:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case CreatePost:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
