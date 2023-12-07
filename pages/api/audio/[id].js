import dbConnect from "@/database/connect";
import Audio from "../../../database/models/Audio";

export default async function handler(request, response) {
  try {
    await dbConnect();

    const { id } = request.query;

    if (request.method === "GET") {
      const audioEquipment = await Audio.findById(id);

      if (!audioEquipment) {
        return response
          .status(404)
          .json({ status: "error", message: "Video equipment not found" });
      }
      return response.status(200).json(audioEquipment);
    } else {
      return response
        .status(405)
        .json({ status: "error", message: "Method not allowed for audio id" });
    }
  } catch (error) {
    console.error("Error in handler:", error);
    return response.status(500).json({
      status: "error",
      message: "Internal Server Error. Contact the Administrator",
    });
  }
}
