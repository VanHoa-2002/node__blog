const express = require("express");
const path = require("path");
const morgan = require("morgan");
const handleBar = require("express-handlebars").engine;
const app = express();
app.use(express.static(path.join(__dirname, "public")));
app.engine(
  "hbs",
  handleBar({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resource/view"));
// console.log(__dirname );
const port = 3000;
app.use(morgan("combined"));
app.get("/", (req, res) => {
  res.render("home");
});
app.get("/new", (req, res) => {
  res.render("new");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
