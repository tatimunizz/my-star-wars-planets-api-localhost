import Planet from "../Models/planetSchema.js";
import searchApperiancesInMovies from "../Services/planetsLib.js";


const addPlanet = async (req, res) => {
  const name = req.body.nome.charAt(0).toUpperCase() + req.body.nome.slice(1);
  Planet.find({ nome: name }, (err, Registredplanet) => {
    if (Registredplanet.length > 0) {
      res.status(409).send({
        status_code: 409,
        message: `Não pode ser efetuado o cadastro do planeta de nome '${name}' pois ele já está cadastrado no nosso banco de dados.`,
      });
    } else {
      let apperiancesInMovies = 0;
      searchApperiancesInMovies(name)
        .then((response) => {
              apperiancesInMovies = response;
          })
        .catch((err) => {
          res.status(400).send({
            status_code: 400,
            message:`O nome '${name}' não é nenhum planeta reconhecido no mundo do Star Wars.`,
          })
        })
        .then(() => {
          let planet = new Planet({
            nome: name,
            clima: req.body.clima,
            terreno: req.body.terreno,
            filmes: apperiancesInMovies,
          });
          planet
            .save()
            .then((planet) => {
              res.status(201).send({
                status_code: 201,
                data: planet,
              });
            })
            .catch((err) => {
              res.status(500).send({
                status_code: 500,
                message: `${err.message}`,
              });
            });
        });
    }
  });
};

const listPlanets = async (req, res) => {
  Planet.find((err, planets) => {
    if (err) res.status(500).send(err);
    res.send({ status_code: 200, count: planets.length, data: planets });
  });
};

const searchPlanetByID = async (req, res) => {
  Planet.findById(req.params.id, (err, planet) => {
    if (planet) {
      res.send({ status_code: 200, data: planet });
    } else {
      res.status(404).send({
        status_code: 404,
        message: `O planeta com o ID '${req.params.id}' não foi encontrado.`,
      });
    }
  });
};

const searchPlanetByName = async (req, res) => {
  const name = req.body.nome;
  Planet.find({ nome: name }, (err, planet) => {
    if (planet.length <= 0) {
      res.status(404).send({
        status_code: 404,
        message: `O planeta com o nome ${name} não foi encontrado.`,
      });
    } else {
      res.send({ status_code: 200, data: planet });
    }
  });
};

const deletePlanetByID = async (req, res) => {
  Planet.findByIdAndDelete(req.params.id, (err, planet) => {
    if (planet == null || planet == undefined || err) {
      res.status(500).send({
        status_code: 500,
        message: `Planeta com ID '${req.params.id}' não foi encontrado.`,
      });
    } else {
      res.status(204).send({
        status_code: 204,
        message: `Planeta com ID '${req.params.id}' foi deletado com sucesso.`,
      });
    }
  });
};

export default {
  addPlanet,
  listPlanets,
  searchPlanetByID,
  searchPlanetByName,
  deletePlanetByID,
};
