import { CreatePost, EditPost, FetchPosts, DeletePost } from "../actions/type";
import _ from "lodash";

export default (state = {}, action) => {
  switch (action.type) {
    case FetchPosts:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case CreatePost:
      return { ...state, ...action.payload };
    case EditPost:
      return { ...state, [action.payload.id]: action.payload };
    case DeletePost:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
