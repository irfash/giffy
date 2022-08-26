import React from "react";
import Slider from "react-slick";
import { GifRefImg } from "../gif/GifRefImg";
import { slideSettings } from "./gifSlide.config";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../scss/Ref.scss";
export const GifSlide = ({ images, title, status, tag }) => {
  return (
    <>
      <h2 className="related-container">{title}</h2>
      {status === "loading..." || null ? (
        <h3>Loading...</h3>
      ) : (
        <Slider {...slideSettings} className="slider">
          {images.map((image, id) => (
            <GifRefImg key={id} image={image} tag={tag} />
          ))}
        </Slider>
      )}
    </>
  );
};
