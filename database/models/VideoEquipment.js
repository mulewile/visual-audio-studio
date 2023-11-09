import mongoose from "mongoose";

const { Schema } = mongoose;

const videoEquipmentSchema = new Schema({
  name: { type: String, required: true },
  type: { type: String, required: false },
  model: { type: String, required: false },
  serialNumber: { type: String, required: true },
  purchaseDate: { type: Date, required: false },
  condition: { type: String, required: false },
  color: { type: String, required: false },
  availability: { type: Number, required: false },
  departmentLocation: { type: String, required: true },
});

const VideoEquipment =
  mongoose.models.Event ||
  mongoose.model("VideoEquipment", videoEquipmentSchema);

export default VideoEquipment;
