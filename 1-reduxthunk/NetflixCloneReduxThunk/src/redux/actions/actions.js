import axios from "axios";
import { actionTypes } from "./ActionsTypes";
import { options } from "../../constants/apiConstants";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

//Senkron

export const setLoading=(payload)=>({
    type:actionTypes.SET_LOADING,
    payload
})

//Asenkron
//async ===> asenkron yani anlık gerçkelşmeyen
export const getMovies = () => {
  return async function (dispatch) {
    const response = await axios.get("/movie/popular", options);
    dispatch({
      type: actionTypes.SET_MOVIES,
      payload: response.data.results,
    });
  };
};
