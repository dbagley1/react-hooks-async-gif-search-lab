import giphyAPIKey from "./giphyAPIKey";

export default function searchGIFs(searchTerm) {
  const fetchURL = `https://api.giphy.com/v1/gifs/search?api_key=${giphyAPIKey}&rating=g`;

  return fetch(`${fetchURL}&q=${searchTerm}`)
    .then(response => response.json())
    .then(json => json.data.map(gif => gif.images.original.url));
}
