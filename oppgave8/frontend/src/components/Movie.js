import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovie } from "../lib/services/movieService";
import imageUrlBuilder from "@sanity/image-url";
import { sanityClient } from "@sanity/client";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

const Movie = () => {
  const [movie, setMovie] = useState([]);

  const { slug } = useParams();

  useEffect(() => {
    const getCurrentMovie = async () => {
      const data = await getMovie(slug);
      setMovie(data);
    };
    getCurrentMovie();
  }, [slug]);

  //if (!movie) return <div>Loading...</div>;

  // TODO - DEnne skal ta imot 2 props (title, actor) for senere å bruke propsa når du skal vise data
  return (
    <div>
      <h2>Film</h2>
      {/* {console.log("movie: ", movie.actor)} */}
      <h2>{movie.title}</h2>
      <span>
        <img
          src={movie.movieImage?.asset.url}
          alt="movie cover"
          className="movieImg"
        />
      </span>
      {/* <div>
        <img src={urlFor(movie.movieImage).width(100).url()} alt="imageFile" />
      </div> */}
    </div>
  );
};

export default Movie;
