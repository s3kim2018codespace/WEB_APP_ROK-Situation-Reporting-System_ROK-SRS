const mongoose = require("mongoose");

const unitModel = mongoose.Schema(
  {
    Unitname: { type: String, trim: true },
    Unitslogan: { type: String, trim: true },
    Orgchartdata: { type: String, required: true },
    Logo: {
      type: "String",
      required: false,
      default:
        "https://i.imgur.com/rnJLXCo.png",
    },
    Members: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    ReportCard: [{ type: mongoose.Schema.Types.ObjectId, ref: "Report" }],
    unitAdmins: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }]
  },
  { timestamps: true }
);

const Unit = mongoose.model("Unit", unitModel);

module.exports = Unit;
