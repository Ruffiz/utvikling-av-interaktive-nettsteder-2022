import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getActor, getMoviesByActor } from "../lib/services/movieService";

export default function Actor() {
  const [actor, setActor] = useState([]);
  const [movies, setMovies] = useState([]);

  const { name } = useParams();
  //const actors = actor.find((person) => person.slug === slug);

  // useEffect(() => {
  //   const getActor = async () => {
  //     const data = await getActorByMovie({ name });
  //     setActor(data);
  //     console.log("actor: ", name);
  //   };
  //   getActor();
  // }, [name]);

  useEffect(() => {
    const getCurrentActor = async () => {
      const data = await getActor(name);
      setActor(data);
    };
    getCurrentActor();
  }, [name]);

  useEffect(() => {
    const getActorMovies = async () => {
      //console.log("slug", name);
      const data = await getMoviesByActor(name);
      setMovies(data);
      //console.log("data", data);
    };
    getActorMovies();
  }, [name]);

  return (
    <div key={actor._id} className="mainActor">
      {/* {console.log(actor)} */}
      <h2>{actor.fullName}</h2>
      <span>
        <img
          src={actor.actorImage?.asset.url}
          alt="actorImage"
          className="actorImg"
        />
      </span>
      <h3>{actor.fullName} spiller i flere filmer som du kan se under</h3>
      <ul className="actorMoviesList">
        {movies &&
          movies.map((movie, index) => (
            <li key={movie._id} className="actorMoviesListItem">
              <h4>{movie.title}</h4>
              <img
                src={movie.movieImage?.asset.url}
                alt="movieImage"
                className="movieImageInActor"
              />
            </li>
          ))}
      </ul>
    </div>
  );
}
