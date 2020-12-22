import { appReducer } from "./MainReducer";
import userReducer from "./User/UserReducer";
const { createStore, combineReducers } = require("redux");

const comAllReducer = combineReducers({
  appStore: appReducer,
  userStore: userReducer,
});

const Store = createStore(comAllReducer);

export default Store;
