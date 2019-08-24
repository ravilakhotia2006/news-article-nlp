const Aylien = require("aylien_textapi");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const PORT = 5000;

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("dist"));

const aylienAPI = new Aylien({
  application_id: "83fdf260",
  application_key: "524ae24b87b4576d9b54f3af73047f9d"
});

app.get("/", (req, res) => res.sendFile("index.html"));

app.post("/checkStatement", (req, res) => {
  const { text } = req.body;
  console.log("Statement endpoint request -> ", text);
  aylienAPI.sentiment({ text }, (error, result, remaining) => {
    console.log("Aylien Callback -> ", result, remaining);
    res.send(result);
  });
});

app.post("/checkArticle", (req, res) => {
  const { text } = req.body;
  console.log("Article endpoint request -> ", text);
  aylienAPI.sentiment({ url: text }, (error, result, remaining) => {
    console.log("Aylien Callback -> ", result, remaining);
    res.send(result);
  });
});

app.listen(PORT, () => console.log(`NLP app listening on port ${PORT}!`));
