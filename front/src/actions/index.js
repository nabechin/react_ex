import { FetchPost } from "./type";

export const fetchPosts = () => {
  return {
    type: FetchPost,
    payload: [
      { id: 1, content: "content1", title: "header1" },
      { id: 2, content: "content2", title: "header2" },
      { id: 3, content: "content3", title: "header3" },
      { id: 4, content: "content4", title: "header4" },
      { id: 5, content: "content5", title: "header5" },
    ],
  };
};
