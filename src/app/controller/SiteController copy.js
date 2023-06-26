const Course = require("../model/Course");
const { multipleMongoToObj } = require("../../util/mongoose");
class SiteController {
  index(req, res, next) {
    Course.find({})
      .then((Course) => {
        Course = multipleMongoToObj(Course);
        res.render("home", { Course });
      })
      .catch(next);
  }
  search(req, res) {
    res.render("search");
  }
}
module.exports = new SiteController();
