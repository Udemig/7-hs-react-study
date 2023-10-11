import axios from "axios";
import React, { useEffect } from "react";
import { options } from "../constants/apiConstants";
import { useDispatch } from "react-redux";
import { actionTypes } from "../redux/actions/ActionsTypes";
import Hero from "../components/Hero";
import { getMovies, setLoading } from "../redux/actions/actions";

const MainPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setLoading(true))
dispatch(getMovies())
  }, []);

  return (<Hero/>);
};

export default MainPage;