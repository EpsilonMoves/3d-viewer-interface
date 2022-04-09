import express from "express";
import { json } from "body-parser";
import { filesRouter } from "./routes/files";
import cors from "cors";

const app = express();
app.use(json());
app.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204,
  })
);

// serve the files
app.use(express.static("uploads"));

app.use(filesRouter);

export { app };
