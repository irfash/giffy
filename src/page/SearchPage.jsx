import React from "react";
import { useSelector } from "react-redux";
import { Masonry } from "../component/util/Masonry";
import { STATUS } from "../constants";

export const SearchPage = () => {
  const { status, gif } = useSelector(({ gifSearch }) => gifSearch);
  return (
    <div className="view container">
      {gif && (
        <div className="gif-container">
          <Masonry gifList={gif} title="Search" />
        </div>
      )}
      {status === STATUS.LOADING && <h3>Loading...</h3>}
    </div>
  );
};
