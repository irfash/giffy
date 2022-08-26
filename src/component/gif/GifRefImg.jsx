import React from "react";
import { useDispatch } from "react-redux";

import { NavLink } from "react-router-dom";
import { getIt, setSearchTerm } from "../../features/gifSearch/gifSearchSlice";

export const GifRefImg = ({ tag, image, key }) => {
  const dispatch = useDispatch();
  const handelClick = () => {
    dispatch(setSearchTerm(image.term));
    dispatch(getIt(image.term));
  };

  return (
    <div className={`${tag}Tag`}>
      <NavLink
        to={`/search?${image.term}`}
        className="imgLink"
        onClick={() => handelClick()}
      >
        <div
          className="img"
          style={{
            backgroundImage: `url(${image.url})`,
          }}
        ></div>
        <span>
          <p className="info">{image.term}</p>
        </span>
      </NavLink>
    </div>
  );
};
