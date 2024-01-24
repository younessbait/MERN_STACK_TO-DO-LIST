const mongoose = require("mongoose");
const ModelSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);
const model = mongoose.model("TodoList", ModelSchema);
module.exports = model;
