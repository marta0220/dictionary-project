import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import DictionaryInfo from "./DictionaryInfo";
import Images from "./Images";

export default function Dictionary({ defaultKeyword }) {
  let [keyword, setKeyword] = useState(defaultKeyword);
  let [data, setData] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [images, setImages] = useState(null);

  function handleDictionaryResponse(response) {
    setData(response.data[0]);
    setLoaded(true);
  }
  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);
    let key = `JQRsBP1PU25FYQhL5dMUrquhHbKmRvKzTnQWwJSAKRU`;
    let url = `https://api.unsplash.com/search/photos?page=1&per_page=3&query=${keyword}&client_id=${key}`;
    axios.get(url).then(handleResponse);
  }
  function handleResponse(response) {
    setImages(response.data.results);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleChangeOfKeyword(event) {
    setKeyword(event.target.value);
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <h1>Dictionary</h1>
        <h5 className="p-1">What word would you like to look up?</h5>
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder={defaultKeyword}
            onInput={handleChangeOfKeyword}
          />
          <input type="submit" value="Search" />
        </form>

        <DictionaryInfo data={data} />

        {images.map(function (image, index) {
          return (
            <span key={index}>
              <Images images={image} />{" "}
            </span>
          );
        })}
      </div>
    );
  } else {
    search();
  }
}
