import { ACTIONS } from "./MainActions";

const appState = {
  createPostTextAreaValue: { value: "", img: "" },
  posts: [],
  color:'',
  likes:0,
};

export const appReducer = (state = appState, { type, payload }) => {
  switch (type) {
    case ACTIONS.INPUT_CHANGE.CREATE_POST_TEXT_AREA_CHANGE:
      return {
        ...state,
        createPostTextAreaValue: { value: payload.value, img: payload.img },
      };
    case ACTIONS.POSTS:
      return { ...state, posts: [...payload] };
    case ACTIONS.LIKESANDCOLOR:
      return { ...state, likes:payload.likes, color:payload.color };

    default:
      return state;
  }
};
