import React from "react";
export default function Images({ images }) {
  return (
    <div className="Images">
      {images.map(function (image, index) {
        return (
          <span key={index}>
            <img
              src={image.urls.small}
              alt={image.alt_description}
              className="img-fluid"
            ></img>{" "}
          </span>
        );
      })}
    </div>
  );
}
