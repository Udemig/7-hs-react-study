import React from "react";
import { useDispatch } from "react-redux";
import { addToBasket } from "../redux/actions/productActions";
const BasketItem = ({ basketProduct }) => {
  const dispatch = useDispatch();
  const { image, price, amount, title } = basketProduct;

  //console.log(basketProduct)
  return (
    <div className="p-4 bg-warning d-flex justify-content-between my-5">
      <div className="d-flex align-items-center gap-5">
        <img src={image} className="rounded" width={50} height={50} alt="" />
        <h4>{title.slice(0, 20) + "..."}</h4>
        <h4>${price}</h4>
      </div>

      <div className="d-flex gap-3 align-items-center">
        <h6>Mikar : {amount}</h6>
        <button className="btn btn-danger">-</button>
        <button
          className="btn btn-success"
          onClick={() => dispatch(addToBasket(basketProduct))}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default BasketItem;
