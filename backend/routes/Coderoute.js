// /* eslint-disable no-undef */
const { Router } = require("express");

const { getCodes } = require("../controllers/CodeControllers");
const router = Router();

router.get("/get", getCodes);

module.exports = router;

// const CodeModel = require("../models/CodeModel");

// module.exports.getCodeModel = async (req, res) => {
//   try {
//     const codes = await CodeModel.find();
//     res.json(codes);
//   } catch (error) {
//     console.error("Error fetching codes:", error);
//     res.status(500).json({ error: "Internal server error" });
//   }
// };
