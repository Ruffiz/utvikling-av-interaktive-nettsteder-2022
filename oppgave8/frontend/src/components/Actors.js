import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getActors } from "../lib/services/movieService";

const Actors = () => {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    const getActorList = async () => {
      const data = await getActors();
      setActors(data);
    };
    getActorList();
  }, []);

  return (
    <ul>
      {actors &&
        actors?.map((actor, index) => (
          <li key={actor._id} className="actorItem">
            <h2>{actor.fullName}</h2>
            <h3>Trykk på skuespilleren for mer info</h3>
            <Link to={"/actor/" + actor.name.current} key={actor.name.current}>
              <span key={index}>
                <img
                  src={actor.actorImage?.asset.url}
                  alt="actor"
                  className="actorImg"
                />
                <span>
                  <h2>{actor.fullName}</h2>
                </span>
              </span>
            </Link>
          </li>
        ))}
    </ul>
  );
};

export default Actors;
