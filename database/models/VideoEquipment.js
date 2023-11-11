import mongoose from "mongoose";

const { Schema } = mongoose;

const videoEquipmentSchema = new Schema({
  Name: { type: String, required: true },
  Type: { type: String, required: false },
  Model: { type: String, required: false },
  SerialNumber: { type: String, required: true },
  PurchaseDate: { type: Date, required: false },
  Condition: { type: String, required: false },
  Color: { type: String, required: false },
  Availability: { type: String, required: false },
  DepartmentLocation: { type: String, required: true },
});

const VideoEquipment =
  mongoose.models.VideoEquipment ||
  mongoose.model("VideoEquipment", videoEquipmentSchema);

export default VideoEquipment;
