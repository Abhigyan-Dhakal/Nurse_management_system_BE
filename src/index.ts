import express, { Application } from "express";
import dotenv from "dotenv";
import cors from "cors";
import appRouter from "./routes/index";
import { notFound } from "./middlewares/notFound";
import { errorHandler } from "./middlewares/errorHandler";

dotenv.config();

const app: Application = express();

app.use(express.json({ limit: "5mb" }));
app.use(cors());

app.use(appRouter);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server Listening on PORT " + PORT);
});
