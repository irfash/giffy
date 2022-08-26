import React from "react";
import {  useSelector } from "react-redux";
import { Masonry } from "../../component/util/Masonry";
import { STATUS } from "../../constants";

export const GifFeatured = () => {
 
  const { status, gif } = useSelector(({ gifFeatured }) => gifFeatured);
  return (<>
    {
      gif &&
      <div className="gif-container">
          <Masonry gifList={gif} title="Featured"/>
        </div>
    }
    {
      status === STATUS.LOADING &&
      <h3>Loading...</h3>
    }
      </>
  );
};
