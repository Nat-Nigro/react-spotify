import { MY_ALBUM } from "../action";

const initialState = {
  results: [],
};
const albumReducer = (state = initialState, action) => {
  switch (action.type) {
    case MY_ALBUM:
      return {
        ...state,
        results: action.payload,
      };
    default:
      return state;
  }
};

export default albumReducer;
