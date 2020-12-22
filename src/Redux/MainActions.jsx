export const ACTIONS = {
  INPUT_CHANGE: {
    CREATE_POST_TEXT_AREA_CHANGE: "CREATE_POST_TEXT_AREA_CHANGE",
  },
  CREATE_NEW_POST:"CREATE_NEW_POST",
  POSTS:"POSTS",
  LIKESANDCOLOR:"LIKESANDCOLOR",
};

export const createPostTextArea = (value) => ({
  type: ACTIONS.INPUT_CHANGE.CREATE_POST_TEXT_AREA_CHANGE,
  payload: value,
});


export const createNewPost = (info) => ({
  type: ACTIONS.CREATE_NEW_POST,
  payload: info,
});

export const PostsRedux = (posts) => ({
  type: ACTIONS.POSTS,
  payload: posts,
});

export const likesAndColor = (posts) => ({
  type: ACTIONS.LIKESANDCOLOR,
  payload: posts,
});