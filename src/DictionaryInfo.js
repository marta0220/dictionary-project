import React from "react";
import Meaning from "./Meaning";

export default function DictionaryInfo(props) {
  if (props.data) {
    return (
      <div className="DictionaryInfo text-start">
        <div className="word">{props.data.word}</div>
        <div className="text-muted text-start">{props.data.phonetic}</div>
        {props.data.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />{" "}
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
