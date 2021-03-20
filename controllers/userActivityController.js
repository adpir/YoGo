const db = require("../models");
const mongoose = require("mongoose");

module.exports = {
  findAll: function (req, res) {
    db.UserActivity.find(req.query)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.UserActivity.findOne({ _id: req.params.id })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findByUserId: function (req, res) {
    db.UserActivity.find({ createdBy: req.params.id })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    const newActivity = {
      name: req.body.name,
      type: req.body.type,
      durationMinutes: req.body.durationMinutes,
      createdBy: mongoose.Types.ObjectId(req.body.createdBy),
      description: req.body.description,
    };
    db.UserActivity.create(newActivity)
      .then((dbModel) => {
        console.log("dbModel", dbModel);
        res.json(dbModel);
      })
      .catch((err) => res.status(422).json(err));
  },
  update: function (req, res) {
    db.UserActivity.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.UserActivity.findById({ _id: req.params.id })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
