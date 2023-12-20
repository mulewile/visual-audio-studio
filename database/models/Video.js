import mongoose from "mongoose";

const { Schema } = mongoose;

const videoSchema = new Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  model: { type: String, required: true },
  serialnumber: { type: String, required: true, unique: true },
  purchasedate: { type: String, required: true },
  condition: { type: String, required: true },
  color: { type: String, required: true },
  availability: { type: String, required: true },
  departmentlocation: { type: String, required: true },
});

const Video =
  mongoose.models.Video || mongoose.model("Video", videoSchema, "video");

export default Video;
