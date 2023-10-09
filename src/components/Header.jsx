import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="d-flex w-100 align-items-center flex-wrap justify-content-between px-4 py-3 bg-light text-black ">
      <div>E-Commerce</div>

      <div className="d-flex gap-4">
        <Link className="btn btn-primary" to={"/"}>
          AnaSayfa
        </Link>

        <Link className="btn btn-warning" to={"/basket"}>
          Sepet
        </Link>
      </div>
    </header>
  );
};

export default Header;
