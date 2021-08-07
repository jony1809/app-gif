import React from "react";

export const GiftGridItem = ({ img }) => {
  return (
    <div className="gif-item animate__animated animate__bounce animate__delay-1s">
      <img className="img" src={img.url} alt={img.title} />
      <li className="li"> {img.title} </li>
    </div>
  );
};
