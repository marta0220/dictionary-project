import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(null);
  let [data, setData] = useState({});
  function handleResponse(response) {
    setData(response.data[0]);
  }
  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleChangeOfKeyword(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <h1>Dictionary</h1>
      <h5>What word would you like to look up?</h5>
      <form onSubmit={search}>
        <input
          type="search"
          placeholder="Search"
          onInput={handleChangeOfKeyword}
        />
        <input type="submit" value="Search" />
      </form>
      <div className="word">{data.word}</div>
      <div className="text-muted text-start">{data.phonetic}</div>
    </div>
  );
}
