const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "/public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", function (req, res) {
  res.render("index");
});

app.get("/vision", function (req, res) {
  res.render("vision", { subTitle: "vision" });
});

app.get("/search", function (req, res) {
  res.render("search", { subTitle: "search" });
});

app.listen(3000, function () {
  console.log("3000 번에서 서버 대기 중");
});
