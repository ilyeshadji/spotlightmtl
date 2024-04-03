const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const Schema = mongoose.Schema;

const eventSchema = new Schema({
  title: { type: String, required: true, unique: true },
  status: {
    type: String,
    enum: ["COMING", "PASSED", "DELETED"],
    required: true,
    default: "COMING",
  },
  description: { type: String, required: false },
  organizer: { type: String, required: true },
  date: { type: Date, required: true },
  attendeesNumber: { type: Number, required: true, default: 200 },
  cost: { type: Number, required: false },
  address: { type: String, required: true },
});

eventSchema.plugin(uniqueValidator);

module.exports = mongoose.model("Event", eventSchema);
