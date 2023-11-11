import dbConnect from "@/database/connect";
import VideoEquipment from "@/database/models/VideoEquipment";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    const videoEquipment = await VideoEquipment.findById(id);
    if (!videoEquipment) {
      console.log("Nodata");
      return response
        .status(404)
        .json({ status: "No Video Equipment has Been Found" });
    }
    return response.status(200).json(videoEquipment);
  }
}
