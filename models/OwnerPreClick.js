const mongoose = require("mongoose");

const preClickLogSchema = new mongoose.Schema({
  shortCode: {
    type: String,
    required: true,
    index: true,
  },
  ownerEmail: {
    type: String,
    required: true,
    index: true,
  },
  ip: String,
  userAgent: String,
  referer: String,
  source: {
    type: String,
    default: "unknown",
  },
  country: {
    type: String,
    default: "unknown",
  },
  countryCode: {
    type: String,
    default: "unknown",
  },
  clickedAt: {
    type: Date,
    default: Date.now,
  },
});

// Store non-redirected pre-clicks in the "ownerpreclicks" collection in MongoDB
const OwnerPreClick = mongoose.model("OwnerPreClick", preClickLogSchema, "ownerpreclicks");

module.exports = OwnerPreClick;
