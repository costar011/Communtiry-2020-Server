import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import bodyParser from "body-parser";
import helmet from "helmet";
import cors from "cors";

dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();

app.use(morgan(`dev`));
app.use(cors());
app.use(helmet());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

app.listen(PORT, () => {
  console.log(`Server start http://localhost:${PORT}`);
});