export default function GifList({ gifs }) {
  return (
    <>
      {
        gifs.map(gif => (
          <img key={gif} src={gif} alt="" className="gif-image" />
        ))
      }
    </>
  );
}
