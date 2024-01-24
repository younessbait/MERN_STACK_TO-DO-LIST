var express = require("express");
var router = express.Router();
const Controller = require("../Controller/ControlerFun");
router.get("/", Controller.Home);
router.get("/:id", Controller.task);
router.post("/", Controller.create);
router.put("/:id", Controller.Edit);
router.delete("/:id", Controller.delete);
module.exports = router;
