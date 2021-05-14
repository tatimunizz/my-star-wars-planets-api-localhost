import axios from 'axios';

const searchPlanets = async () => {
  let result = [];
  let response = [];
  for (let i = 1; i <= 6; i++) {
    const res = await axios
      .get(`https://swapi.dev/api/planets/?page=${i}`)
      .then((response) => {
        response.data.results.forEach((element) => {
          result.push({
            nome: element.name,
            clima: element.climate,
            terreno: element.terrain,
            filmes: element.films.length,
          });
        });
        return result;
      })
      .catch((error) => {
        return error;
      });
    let helper = [];
    response = helper.concat(res);
  }
  return response;
};

export default searchPlanets;
