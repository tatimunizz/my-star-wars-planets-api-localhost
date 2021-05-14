import mongoose from "mongoose";

const planetsSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  clima: {
    type: String,
    required: true,
  },
  terreno: {
    type: String,
    required: true,
  },
  filmes: {
    type: Number,
  },
});

export default mongoose.model("planets", planetsSchema);
