import axios from "axios";
import React, { useEffect } from "react";
import { options } from "../constants/apiConstants";
import { useDispatch } from "react-redux";
import { actionTypes } from "../redux/actions/ActionsTypes";
import Hero from "../components/Hero";
import { getMovies, setLoading ,getGenres} from "../redux/actions/actions";
import { useSelector } from "react-redux";
import MovieList from "../components/MovieList";

const MainPage = () => {
  const dispatch = useDispatch();
  const {genres}=useSelector((store)=>({genres:store.movieReducer.genres}))
  
  useEffect(() => {
    dispatch(setLoading(true));

    //Film çekme işlemini tetikleme

    dispatch(getMovies());

   //Kategori çekme işlemini tetikleme

   dispatch(getGenres())
  }, []);
  console.log(genres)
  return (
  <div>
  <Hero />

  {genres.map((genre)=>(
    <MovieList key={genre.id} genre={genre}/>
  ))}
  </div>
  

  

  );
};

export default MainPage;
