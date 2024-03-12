// /* eslint-disable no-undef */
const { Router } = require("express");
const CodeController = require("../controllers/CodeControllers");
const router = Router();
router.get("/get", CodeController.getCode);


module.exports = { router };

