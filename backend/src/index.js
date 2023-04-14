import express from "express";
// import connectDatabase from "./config/db.js";
import times from "./routes/routes-times.js";
import { errorHandling } from "./errors/error.js";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(errorHandling);

app.use("/api/time", times);

app.listen(8080, () => {
  // connectDatabase();
  console.log("Servidor rodando na porta 8080");
});
