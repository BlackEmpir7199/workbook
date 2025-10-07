import express from "express";
import { ENV } from "./config/env.js";
import { connectToDB } from "./config/db.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors);

const PORT = ENV.PORT;

app.listen(PORT, () => {
  console.log("Server is up on port: ", PORT);
  // invoke db connection
  connectToDB();
});
