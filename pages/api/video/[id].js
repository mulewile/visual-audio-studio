import dbConnect from "@/database/connect";
import Video from "../../../database/models/Video";

export default async function handler(request, response) {
  try {
    await dbConnect();

    const { id } = request.query;

    if (request.method === "GET") {
      const videoEquipment = await Video.findById(id);
      if (!videoEquipment) {
        return response
          .status(404)
          .json({ status: "error", message: "Video equipment not found" });
      }

      return response.status(200).json(videoEquipment, {
        status: "success",
        message: `"Video with id ${id} found."`,
      });
    } else {
      return response
        .status(405)
        .json({ status: "error", message: "Method not allowed video id" });
    }
  } catch (error) {
    console.error("Error in handler:", error);
    return response.status(500).json({
      status: "error",
      message: "Internal Server Error. Contact the Administrator",
    });
  }
}
