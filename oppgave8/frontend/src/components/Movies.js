import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
//import Movie from "./Movie";
import { getMovies } from "../lib/services/movieService";

const Movies = () => {
  // TODO - Lage state her som skal holde på data fra Sanity!
  const [movies, setMovies] = useState([]);
  // const [actors, setActors] = useState([]);

  //   const handleClick = async () => {
  //     //const actor = event.target.value.toLowerCase();
  //     const data = await getMovies();
  //     setMovies(data);
  //   };

  //   useEffect(() => {});

  //   return (
  //     <div>
  //       <h2>HEISANN!!</h2>
  //       {/* <Movie /> */}
  //       {movies?.length > 0 ? <p>{JSON.stringify(movies)}</p> : null}
  //       <button className="getDataBtn" type="button" onClick={handleClick}>
  //         Hent filmer
  //       </button>
  //       {/* Optimalt sett endre button til å bruke useEffect til å vise data umiddelbart */}
  //     </div>
  //   );

  useEffect(() => {
    const getMovieList = async () => {
      const data = await getMovies();
      setMovies(data);
    };
    getMovieList();
  }, []);

  // useEffect(() => {
  //   const getActorList = async () => {
  //     const data = await getActors();
  //     setActors(data);
  //   };
  //   getActorList();
  // }, []);

  // const { name } = useParams();
  // useEffect(() => {
  //   const getActorMovies = async () => {
  //     const data = await getMoviesByActor({ name });
  //     setData(data);
  //     //console.log(data);
  //   };
  //   getActorMovies();
  // }, [name]);

  return (
    // TODO - Denne under fungerer riktig nå
    <div className="mainMoviesContent">
      {/* <ul>
        {movies?.map((movie) => (
          <li key={movie._id}>
            <h2>
              {movie.title} - {movie.year}
            </h2>
            <Link to={`/actor/${movie.actor.fullName}`}>
              {movie.actor.fullName}
            </Link>
          </li>
        ))}
      </ul> */}
      <h2 className="moviesmainHeader">Velkommen til film listen</h2>
      <ul className="movieList">
        {movies &&
          movies?.map((movie, index) => (
            <li key={movie.slug} className="movieItem">
              <h2>{movie.title + " (" + movie.year + ")"}</h2>
              <h3>Trykk på bildet for mer info om filmen</h3>
              <Link
                to={"/movie/" + movie.slug.current}
                key={movie.slug.current}
              >
                <span key={index}>
                  <img
                    src={movie.movieImage?.asset.url}
                    alt="movie cover"
                    className="movieListImg"
                  />
                  <span>{/* <h2>{movie.title}</h2> */}</span>
                </span>
              </Link>
              <h5>Skuespillere:</h5>
              <Link to={`/actor/${movie.actor.name}`} key={movie.actor._id}>
                <span key={movie.actor._id}>{movie.actor.fullName}</span>
                {/* <img src={movie.actor.actorImage?.asset.url} alt="actorImage" /> */}
              </Link>
            </li>
          ))}
      </ul>
      <Link to={`/actors`}>
        <h2 className="actorLinkList">
          Trykk her for en liste over alle skuespillere
        </h2>
      </Link>
    </div>
  );
};

export default Movies;
