const newRouter = require("./new");
const siteRouter = require("./site");
const courseRouter = require("./course");
function router(app) {
  app.use("/new", newRouter);
  app.use("/search", siteRouter);
  app.use("/course", courseRouter);
}
module.exports = router;
