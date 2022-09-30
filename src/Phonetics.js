import React from "react";
export default function Phonetics(props) {
  if (props.phonetics.audio) {
    return (
      <div>
        <span className="text-muted text-start">{props.phonetics.text}</span>
        <a
          className="btn btn-warning text-white m-1 py-0 px-1"
          href={props.phonetics.audio}
          target="_blank"
          rel="noreferrer"
        >
          📢
        </a>
      </div>
    );
  } else {
    return <div className="text-muted text-start">{props.phonetics.text}</div>;
  }
}
