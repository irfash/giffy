import React from "react";
import "../../scss/Masonry.scss";
import { GifCard } from "../gif/GifCard";
import { useDispatch, useSelector } from "react-redux";
import { getIt, getNext } from "../../features/gifSearch/gifSearchSlice";
import {
  getGif,
  selectFeaturedNext,
} from "../../features/gifFeatured/gifFeaturedSlice";

import { MasonryLayout } from "@appnest/masonry-layout/masonry-layout";

export const Masonry = ({ gifList, title }) => {
  const dispatch = useDispatch();

  const { searchTerm, next } = useSelector(({ gifSearch }) => gifSearch);
  const featuredNext = useSelector(selectFeaturedNext);

  const scrollToEnd = () => {
    if (title === "Featured") {
      if (featuredNext !== null) {
        dispatch(getGif());
      }
    } else {
      if (next !== null || next.length > 0) {
        dispatch(getIt({ searchTerm }));
      }
    }
  };

  window.onscroll = function () {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    ) {
    } else {
      scrollToEnd();
    }
  };

  return (
    <div className="related-terms-container">
      <div className="space"></div>
      <h2 className="related-title"> {title}</h2>
      <masonry-layout>
        {gifList.map((gif, id) => (
          <GifCard key={id} url={gif.itemurl} alt={gif.content_description} />
        ))}
      </masonry-layout>
      {/* <masonry-layout>
        {gifList.map((gif, id) => (
          <GifCard key={id} url={gif.itemurl} alt={gif.content_description} />
        ))}
      </masonry-layout> */}
    </div>
  );
};
