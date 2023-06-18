const newRouter = require("./new");
const siteRouter = require("./site");
function route(app) {
  app.get("/", siteRouter);
  app.use("/new", newRouter);
  app.get("/search", siteRouter);
}
module.exports = route;
