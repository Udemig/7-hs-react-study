import { actionTypes } from "../actions/ActionsTypes";

const initialState = {
  popularMovies: [],
  genres: [],
  isLoading: true,
};

export const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_MOVIES:
      return {
        ...state,
        popularMovies: action.payload,
        isLoading:false
      };

    default:
      return state;
  }
};
