import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";

export default function DictionaryInfo(props) {
  if (props.data) {
    return (
      <div className="DictionaryInfo text-start">
        <section>
          <div className="word">{props.data.word}</div>
          {props.data.phonetics.map(function (phonetic, index) {
            return (
              <div key={index} className="Phonetics">
                <Phonetics phonetics={phonetic} />
              </div>
            );
          })}
        </section>
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
