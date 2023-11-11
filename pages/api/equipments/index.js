import dbConnect from "@/database/connect";
import VideoEquipment from "@/database/models/VideoEquipment";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    try {
      const videoEquipments = await VideoEquipment.find();
      response.status(200).json(videoEquipments);
    } catch (error) {
      console.error("Error fetching video equipment:", error);
      response.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    response.status(405).json({ error: "Method Not Allowed" });
  }
}
