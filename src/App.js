import React from "react";
import "./index.css"
import NavBar from "./component/NavBar";
import SearchBar from "./component/SearchBar";
import {  Route,  Routes } from "react-router-dom";
import { About } from "./page/About";
import { SearchPage } from "./page/SearchPage";
import { Home } from "./page/Home";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getGifTrend } from "./features/gifTrend/gifTrendSlice";
import { getGif } from "./features/gifFeatured/gifFeaturedSlice";


function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getGifTrend())
    dispatch(getGif());
  },[])
  return (
    <div className="BaseApp">
       <NavBar />
      <SearchBar />
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About/>} />
      <Route path="/search/*" element={<SearchPage/>}/>
      </Routes> 
     </div>
  );
}

export default App;
