import express from "express";
import bodyParser from 'body-parser';
import { listSaved, saveTranslation } from "./routes";
const port = 8088;
const app = express();

app.use(bodyParser.json());
app.get("/api/listSaved", listSaved);
app.post("/api/saveTranslation", saveTranslation)

app.listen(port, () => console.log(`Server listening on ${port}`));