/* eslint-disable no-undef */
const CodeModel = require("../models/CodeModel");

module.exports.getCode = async (req, res) => {
  const code = await CodeModel.find();
  res.send(code);
};
module.exports.saveCode = (req, res) => {
  const { code } = req.body;

  CodeModel.create(code)
    .then((data) => {
      console.log("Saved Successfully ");

      res.status(201).send(data);
    })
    .catch((err) => {
      console.log(err);
      res.send({ error: err, msg: "something went wrong :(" });
    });
};

module.exports.updateCode = (req, res) => {
  const { id } = req.prams;
  const { code } = req.body;
  CodeModel.findByIdAndUpdate(id, { code })
    .then(() => res.send("Updated successfully"))
    .catch((err) => {
      console.log(err);
      res.send({ error: err, msg: "something went wrong :(" });
    });
};

module.exports.deleteCode = (req, res) => {
  const { id } = req.prams;

  CodeModel.findByIdAndDelete(id)
    .then(() => res.send("Deleted successfully"))
    .catch((err) => {
      console.log(err);
      res.send({ error: err, msg: "something went wrong :(" });
    });
};
