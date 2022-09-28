import React from "react";
import Synonyms from "./Synonyms";
export default function Meaning({ meaning }) {
  return (
    <div className="Meaning">
      <div className="partOfSpeech">{meaning.partOfSpeech}</div>
      {meaning.definitions.map(function (definition, index) {
        return (
          <div key={index} className="p-1">
            ▹ {definition.definition}
          </div>
        );
      })}
      <Synonyms synonyms={meaning.synonyms} />
    </div>
  );
}
