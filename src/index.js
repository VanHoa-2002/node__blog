const express = require("express");
const path = require("path");
const morgan = require("morgan");
const handleBar = require("express-handlebars").engine;
const app = express();
const route = require("./routes/index");
const db = require("./app/config/db/index");
db.connect();
app.use(express.static(path.join(__dirname, "public")));
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.engine(
  "hbs",
  handleBar({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resource", "view"));
const port = 3000;
app.use(morgan("combined"));
route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
