const mongoose = require("mongoose");
const Schema = mongoose.Schema

const consultationSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    date: {
      type: String
    },
    package: {
      type: String
    },
    price: {
      type: Number
    },
    payment_method: {
      type: String
    },
    payment_status: {
      type: String
    },
    payment_details: {
      type: Object
    },
    stress_testscore: {
      type: Number
    }
  },
  { timestamps: true }
);

const ConsultationSchema = mongoose.model("Consultation", consultationSchema);

module.exports = ConsultationSchema;