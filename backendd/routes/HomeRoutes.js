import express from "express";
import { Code } from "../models/codeModel.js";
import requireAuth from "../middleware/requireAuth.js";

const router = express.Router();
router.use(express.json());
router.use(requireAuth);
// route to save a new code
router.post("/", async (req, res) => {
  // Mark the callback function as async
  try {
    if (!req.body.title || !req.body.code || !req.body.language) {
      return res.status(400).send({
        message: "Please fill all the fields",
      });
    }
    const addNewCode = {
      title: req.body.title,
      code: req.body.code,
      language: req.body.language,
    };
    const newCode = await Code.create(addNewCode);

    return res.status(201).send(newCode);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

// route for get all codes from database
router.get("/", async (req, res) => {
  try {
    const code = await Code.find({});
    return res.status(200).json({
      count: code.length,
      data: code,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

// route for get a single code from database
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const code = await Code.findById(id);

    return res.status(200).json(code);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

// route for update a single code from database
router.put("/:id", async (req, res) => {
  try {
    if (!req.body.title || !req.body.code || !req.body.language) {
      return res.status(400).send({
        message: "Please fill all the fields",
      });
    }

    const { id } = req.params;
    const result = await Code.findByIdAndUpdate(id, req.body);

    if (!result) {
      return res.status(404).json({ message: "Code not found" });
    }
    return res.status(200).send({ message: "Code updated successfully" });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

// route for delete a single code from database
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Code.findByIdAndDelete(id);

    if (!result) {
      return res.status(404).json({ message: "Code not found" });
    }
    return res.status(200).send({ message: "Code deleted successfully" });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

export default router;
