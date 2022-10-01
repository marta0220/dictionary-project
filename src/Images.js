import React from "react";
export default function Images(props) {
  return (
    <div className="Images">
      <img
        src={props.images.urls.small}
        alt={props.images.alt_description}
        className=" img-fluid"
      ></img>
    </div>
  );
}
