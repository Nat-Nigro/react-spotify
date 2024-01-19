import { combineReducers, configureStore } from "@reduxjs/toolkit";
import albumReducer from "../reducers/album";
import likesReducer from "../reducers/likes";
import playerReducer from "../reducers/player";
import searchReducer from "../reducers/search";

const bigReducer = combineReducers({
  search: searchReducer,
  album: albumReducer,
  player: playerReducer,
  likes: likesReducer,
});

const store = configureStore({
  reducer: bigReducer,
});
export default store;
