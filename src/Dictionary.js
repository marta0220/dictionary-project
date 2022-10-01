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
  function handleUnsplashResponse(response) {
    setImages(response.data.results);
  }
  function search() {
    let DictionaryApiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(DictionaryApiUrl).then(handleDictionaryResponse);
    let UnsplashApiKey = `JQRsBP1PU25FYQhL5dMUrquhHbKmRvKzTnQWwJSAKRU`;
    let UnsplashApiUrl = `https://api.unsplash.com/search/photos?page=1&per_page=3&query=${keyword}&client_id=${UnsplashApiKey}`;
    axios.get(UnsplashApiUrl).then(handleUnsplashResponse);
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
            className="input"
          />
          <input type="submit" value="Search" className="submit-button" />
        </form>
        <DictionaryInfo data={data} />
        <Images images={images} />
      </div>
    );
  } else {
    search();
    return null;
  }
}
