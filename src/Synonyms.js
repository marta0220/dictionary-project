import React from "react";
export default function Synonyms(props) {
  console.log(props.synonyms);
  if (props.synonyms.length === 0) {
    return null;
  } else {
    return (
      <div className="Synonyms">
        Synonyms:
        {props.synonyms.map(function (synonym, index) {
          return <span key={index}> {synonym}, </span>;
        })}
        ...
        <br />
      </div>
    );
  }
}
