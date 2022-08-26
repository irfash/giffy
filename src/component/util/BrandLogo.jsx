import logo from "../../assets/tenor-logo-white.svg";
import { LOGO } from "../../constants";
import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSearchTerm } from "../../features/gifSearch/gifSearchSlice";
export const BrandLogo = ({
  linkClass,
  logoClass,
  alt,
  logoStyle,
  linkStyle,
}) => {
  const dispatch = useDispatch();

  return (
    <NavLink
      className={linkClass}
      to="/"
      style={linkStyle}
      onClick={() => dispatch(setSearchTerm(""))}
    >
      <img src={logo} className={logoClass} alt={alt} style={logoStyle} />
    </NavLink>
  );
};

BrandLogo.defaultProps = {
  linkClass: LOGO.LINK_CLASS,
  logoClass: LOGO.LOG_CLASS,
  alt: LOGO.BRAND_NAME,
  logoStyle: {},
  linkStyle: {},
};
