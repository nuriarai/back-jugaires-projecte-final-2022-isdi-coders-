import "./loadEnvirontment.js";
import environtment from "./loadEnvirontment.js";
import express from "express";
import morgan from "morgan";
import cors from "cors";

const { corsAllowedOrigins } = environtment;

const app = express();

app.disable("x-powered-by");

const allowedOrigins = [corsAllowedOrigins];
const options: cors.CorsOptions = {
  origin: allowedOrigins,
};

app.use(cors(options));

app.use(morgan("dev"));
app.use(express.json());

app.use("/", (req, res) => res.send("Jugaires"));

export default app;
