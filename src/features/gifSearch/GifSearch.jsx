import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getIt, inputChange, setSearchTerm } from "./gifSearchSlice";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { BrandLogo } from "../../component/util/BrandLogo";
import { useNavigate } from "react-router";
export const GifSearch = ({ show }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { searchTerm } = useSelector(({ gifSearch }) => gifSearch);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim().length >= 1) {
      navigate(`/search?${searchTerm}`);
      dispatch(setSearchTerm(searchTerm));
      dispatch(getIt(searchTerm));
    }
  };

  return (
    <div className="TopBar">
      <div className="container">
        <BrandLogo
          linkClass="navbar-brand"
          linkStyle={show ? { opacity: 1 } : {}}
        />

        <div className="search-bar-wrapper" style={show ? { left: 90 } : {}}>
          <form
            className="SearchBar"
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <input
              placeholder="Search Gifs"
              value={searchTerm}
              onChange={(e) => dispatch(inputChange(e.target.value))}
            />
            <FontAwesomeIcon
              className="iconfont-search"
              icon={faMagnifyingGlass}
            />
          </form>
        </div>
      </div>
    </div>
  );
};
