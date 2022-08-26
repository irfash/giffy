import React from "react";

export const Button = ({ title, className }) => {
  return (
    <button className={className} type="button">
      {title}
    </button>
  );
};
Button.defaultProps = {
  className: "button",
};
