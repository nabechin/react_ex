import { FetchPost } from "../actions/type";

export default (state = {}, action) => {
  switch (action.type) {
    case FetchPost:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
