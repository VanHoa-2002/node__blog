class CourseController {
  show(req, res, next) {
    res.send("Show");
  }
  index(req, res) {}
}
module.exports = new CourseController();
