const express = require("express");
const router = express.Router();
const newController = require("../app/controller/NewsController");

router.get("/:slud", newController.show);
router.get("/", newController.index);
module.exports = router;
