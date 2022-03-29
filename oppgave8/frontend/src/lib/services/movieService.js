import client from "../client";

// const movieFields = `
//   _id,
//   title,
//   year,
//   movieImage{
//     asset->{
//       _id,
//       url
//     }
//   }
//   'slug': slug.current,
//   'actor': actor->{'name': name.current, fullName}
// `;

const movieFields = `
  _id,
  title,
  year,
  slug,
  'movieImage': movieImage{asset->{url}},
  'actor': actor->{'name': name.current, fullName, 'actorImage': actorImage{asset->{url}}}
`;

const currentMovieFields = `
  _id,
  title,
  year,
  slug,
  'movieImage': movieImage{asset->{url}},
  'actor': actor->{'name': name.current, fullName, 'actorImage': actorImage{asset->{url}}}
`;

const actorFields = `
  _id,
  fullName,
  'actorImage': actorImage{asset->{url}},
  name,
`;

const actorMoviesFields = `
  _id,
  title,
  year,
  'movieImage': movieImage{asset->{url}},
  'actor': actor->{fullName, "name": name.current}
`;

// TODO - Denne funker fint og henter ut filmene lett til Movies komp
// export const getMovies = async () => {
//   const data = await client.fetch(`*[_type == "movie"]{${movieFields}}`, {});
//   console.log(data);
//   return data;
// };

export const getMovies = async () => {
  const data = await client.fetch(`*[_type == "movie"]{${movieFields}}`, {});
  //console.log(data);
  return data;
};

export const getActors = async () => {
  const data = await client.fetch(`*[_type == "actor"]{${actorFields}}`, {});
  //console.log(data);
  return data;
};

export const getMovie = async (slug) => {
  const data = await client.fetch(
    `*[_type == "movie" && slug.current == $slug]{${currentMovieFields}}`,
    {
      slug,
    }
  );
  return data?.[0];
};

export const getActor = async (name) => {
  const data = await client.fetch(
    `*[_type == "actor" && name.current == $name]{${actorFields}}`,
    {
      name,
    }
  );
  return data?.[0];
};

export const getActorByMovie = async (name) => {
  const data = await client.fetch(
    `*[_type == "movies" && actor->{'name': name.current, fullName]{${movieFields}}`,
    { name }
  );
  //console.log(data);
  return data;
};

// export const getActorByMovie = async () => {
//   const data = await client.fetch(`*[_type == "actor"]{${actorFields}}`, {});
//   console.log(data);
//   return data;
// };

// export const getActorByMovie = async (slug) => {
//   const data = await client.fetch(
//     `*[_type == "actor" && slug.current == $slug]{${actorFields}}`,
//     { slug }
//   );
//   //console.log(data);
//   return data?.[0];
// };

export const getMoviesByActor = async (name) => {
  const data = await client.fetch(
    `*[_type == "movie" && actor->name.current==$name]{${actorMoviesFields}}`,
    { name }
  );
  //console.log(data);
  return data;
};
