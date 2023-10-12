import axios from "axios";
import { actionTypes } from "./ActionsTypes";
import { options } from "../../constants/apiConstants";


//Tüm atılan isteklerin başına gelir
axios.defaults.baseURL = "https://api.themoviedb.org/3";

//Senkron (Anında Gerçkelşen Süre gerektirmeyen işlemler)

//Yüklenin durumna göre isLoading değerini değiştirini eğiştirme
export const setLoading=(payload)=>({
    type:actionTypes.SET_LOADING,
    payload
})


//Asenkron (Anında gerçkeleşmeyen ve üreç gerektiren işlemler (API çağrıları,Veri tabanı istekleri vb))

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


//Filmler için kategori verisi çekme

export const getGenres=()=>(dispatch)=>{

  axios.get('/genre/movie/list?language=tr',options).
  //Sonucu Reducera gönderme işlemi
  then((response)=>dispatch({
    type:actionTypes.SET_CATEGORIES,
    payload:response.data.genres
  }))
}
