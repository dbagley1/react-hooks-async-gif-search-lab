import "./App.css";
import React, { useEffect } from "react";

import NavBar from "./NavBar";
import GifSearch from "./GifSearch";
import GifListContainer from "./GifListContainer";

import searchGIFs from "./fetch.js";

// the App component should render out the GifListContainer component

function App() {
  const [searchTerm, setSearchTerm] = React.useState("The Office");
  const [gifs, setGifs] = React.useState([]);

  useEffect(() => {
    if (searchTerm) {
      console.log("saerchGIFs", searchTerm);
      searchGIFs(searchTerm).then(gifs => setGifs(gifs));
    }
  }, [searchTerm]);

  function onSearchSubmit(searchTerm) {
    setSearchTerm(searchTerm);
    console.log('searchTerm changed', searchTerm);
  }

  return (
    <div>
      <NavBar color="black" title="Giphy Search" />
      <GifSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} onSearchSubmit={onSearchSubmit} />

      <h1>{gifs.length} Search Results - "{searchTerm}"</h1>
      <GifListContainer gifs={gifs} />
    </div>
  );
}

export default App;
