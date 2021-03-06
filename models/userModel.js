const mongoose = require("mongoose");

let UserSchema = mongoose.Schema(
  {
    id: { type: String },
    name: { type: String, required: true },
    email: { type: String, required: true },
    mobile: { type: String, required: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false },
    isActive: { type: Boolean, default: true },
    join_time: { type: Date, default: Date.now },
  },
  { timestamp: true }
);

module.exports = mongoose.model("users", UserSchema);
