const mongoose = require("mongoose");

const consultationSchema = new mongoose.Schema(
  {
    user: {
      type: String,
    },
    psikolog: {
      type: String,
    },
    consultation_schedule: {
      type: Date,
      required: true,
    },
    consultation_paket: {
      type: String,
    },
  },
  { timestamps: true }
);

const ConsultationSchema = mongoose.model("Consultation", consultationSchema);

module.exports = ConsultationSchema;
