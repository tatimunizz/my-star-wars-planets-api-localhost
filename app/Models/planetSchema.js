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
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("planets", planetsSchema);
