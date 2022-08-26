import React from "react";
import { useSelector } from "react-redux";

// ---------------------------
// import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
// import { Trending } from "../../component/trending/Trending";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// ---------------------------
// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../scss/Trend.scss";

import { GifSlide } from "../../component/gifSlide/GifSlide.component";

export const GifTrend = () => {
  const { trending, status } = useSelector(({ gifTrend }) => gifTrend);


  return <GifSlide title="Trending!..." tag="trending" images={trending} status = {status}/>


  
  
};

