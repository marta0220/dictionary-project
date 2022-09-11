import React from "react";

export default function Meaning({ meaning }) {
  console.log(meaning);
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
    </div>
  );
}
