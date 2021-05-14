import mongoose from "mongoose";

const DB_URL = `${process.env.MONGODB_URL}`;
mongoose.connect(DB_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  writeConcern: { j: true },
});

export default mongoose.connection.once("open", () => {
  console.log("MongoDB connection");
});
