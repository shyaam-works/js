import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

const arr = ["ss", "sh", "ah", "am"];

app.post("/submit", (req, res) => {
  const a = arr[Math.floor(Math.random() * arr.length)];
  res.render("index.ejs", { h: a });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
