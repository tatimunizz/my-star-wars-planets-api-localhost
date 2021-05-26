import axios from "axios";

const searchPlanet = async (name) => {
  const moviesApperiance = await axios
    .get(`https://swapi.dev/api/planets/?search=${name}`)
    .then((response) => {
      return response.data.results[0].films.length;
    });

  return moviesApperiance;
};

export default searchPlanet;
