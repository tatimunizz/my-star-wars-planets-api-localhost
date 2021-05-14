import express from "express";
import controller from "../Controllers/planetControllers.js"

const router = express.Router();

router.post("/", async (req, res) => {
  controller.addPlanet(req, res);
});

router.get("/", async (req, res) => {
  controller.listPlanets(req, res);
});

router.get('/:id', async (req, res) => {
  controller.searchPlanetByID(req, res);
});

router.post('/planeta-com-nome', async (req, res) => {
  controller.searchPlanetByName(req, res);
});

router.delete('/:id', (req, res) => {
  controller.deletePlanetByID(req, res);
})

export default router;
