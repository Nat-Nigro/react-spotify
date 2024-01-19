import { MY_LIKES } from "../action";

const initialState = {
  likedSong: [],
};
const likesReducer = (state = initialState, action) => {
  switch (action.type) {
    case MY_LIKES:
      return {
        ...state,
        likedSong: [...state.likedSong, action.payload],
      };
    default:
      return state;
  }
};

export default likesReducer;
