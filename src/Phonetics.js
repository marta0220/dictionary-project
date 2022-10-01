import React from "react";

import ReactAudioPlayer from "react-audio-player";
export default function Phonetics(props) {
  if (props.phonetics.audio) {
    return (
      <div>
        <div className="text">{props.phonetics.text}</div>
        <ReactAudioPlayer src={props.phonetics.audio} controls />
      </div>
    );
  } else {
    return <div className="text">{props.phonetics.text}</div>;
  }
}
