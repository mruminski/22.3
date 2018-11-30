import {
  ADD_POST,
  ADD_POSTS,
  DELETE_POST,
  EDIT_POST,
  LIKE_POST,
  DISLIKE_POST
} from "./PostActions";

const initialState = { data: [] };

const PostReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        data: [action.post, ...state.data]
      };

    case ADD_POSTS:
      return {
        data: action.posts
      };

    case DELETE_POST:
      return {
        data: state.data.filter(post => post.cuid !== action.cuid)
      };

    case EDIT_POST:
      return {
        data: state.data.map(post => {
          return post.cuid === action.cuid
            ? Object.assign({}, post, action.post)
            : post;
        })
      };
    case LIKE_POST:
      return {
        data: state.data.map(post => {
          if (post.cuid === action.cuid) {
            return { ...post, vote: post.vote + 1 };
          }
          return post;
        })
      };

    case DISLIKE_POST:
      return {
        data: state.data.map(post => {
          if (post.cuid === action.cuid) {
            return { ...post, vote: post.vote - 1 };
          }
          return post;
        })
      };

    default:
      return state;
  }
};

export const getPosts = state => state.posts.data;

export const getPost = (state, cuid) =>
  state.posts.data.filter(post => post.cuid === cuid)[0];

export default PostReducer;
