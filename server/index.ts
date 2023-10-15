import express from "express";
import bodyParser from 'body-parser';
import { listSaved } from "./routes";
const port = 8088;
const app = express();

app.use(bodyParser.json());
app.get("/api/listSaved", listSaved);

app.listen(port, () => console.log(`Server listening on ${port}`));