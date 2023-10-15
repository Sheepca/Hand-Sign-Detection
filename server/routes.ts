import { Request, Response } from "express";
/////////////////////////////////////
//possible bloat/garbage from chatgpt below
// const express = require('express');
// const app = express();
// const port = 3000;

// app.get('/', (req, res) => {
//   res.send('Hello, World!');
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

/////////////////////////////////////
//real code starts from here:

type translation = {
    englishPhrase: string
}

const translationHistory: string[] = [];
export function listSaved(req: Request, res: Response) {
  if (translationHistory.length === 0) {
    res.status(400).send("No saved translations");
    return;
  }
  res.json(translationHistory);
}
export function saveTranslation(req: Request, res: Response) {
  const translation = req.body.text;
  if (translation === undefined) {
    res.status(400).send("Error sending translation to server");
    return;
  }
  translationHistory.push(translation)
}
