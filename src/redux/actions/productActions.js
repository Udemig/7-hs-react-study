import axios from "axios";
import { actionTypes } from "./actionTypes";

//senkron action
export const addToBasket = (product) => {
  return {
    type: actionTypes.ADD_TO_BASKET,
    payload: product,
  };
};

//Asenkron işlem

/**
 * Thunk sayesinde aksiyon dispatch edilmeden önce
 * API çağrısı yapar
 * gelen veriye tetikleme işlemi yapar
 */
export const getProduct = () => (dispatch) => {
  axios
    .get("https://fakestoreapi.com/products")
    .then((res) =>
      dispatch({
        type: actionTypes.SET_PRODUCTS,
        payload: res.data,
      })
    )
    .catch((error) =>
      dispatch({
        type: actionTypes.SET_ERROR,
      })
    );
};
