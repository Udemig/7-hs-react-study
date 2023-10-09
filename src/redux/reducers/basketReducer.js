import { actionTypes } from "../actions/actionTypes";

const initialState = {
  basket: [],
  total: 0,
};

const basketReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.ADD_TO_BASKET:
      //elelemanın sırasını bulma
      const index = state.basket.findIndex((i) => i.id === payload.id);
      //Eğer indeks varsa
      if (index >= 0) {
        const cloneBasket = [...state.basket];
        cloneBasket[index].amount++;
        return {
          ...state,
          basket: cloneBasket,
        };
      }
      //Eğer Sepette Eleman yoksa
      else {
        const newArray = state.basket.concat({ ...payload, amount: 1 });
        return {
          ...state,
          basket: newArray,
          total: state.total + payload.price,
        };
      }

    default:
      return state;
  }
};

export default basketReducer;
