import GifList from "./GifList";

export default function GifListContainer({ gifs }) {
  return (
    <div className="gif-list-container">
      <GifList gifs={gifs} />
    </div>
  );
}
