import React from "react";

export const GiftGridItem = ({ img }) => {
  return (
    <div className="gif-item animate__animated animate__heartBeat animate__delay-1s">
      <img className="gif" src={img.url} alt={img.title} />
      <li className="gif"> {img.title} </li>
    </div>
  );
};
