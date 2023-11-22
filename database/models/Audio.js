import mongoose from "mongoose";

const { Schema } = mongoose;

const audioSchema = new Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  model: { type: String, required: true },
  serialnumber: { type: String, required: true },
  purchasedate: { type: String, required: true },
  condition: { type: String, required: true },
  color: { type: String, required: true },
  availability: { type: String, required: true },
  departmentlocation: { type: String, required: true },
});

const Audio =
  mongoose.models.Audio || mongoose.model("Audio", audioSchema, "audio");

export default Audio;
