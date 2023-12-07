import dbConnect from "../../../database/connect";
import Audio from "../../../database/models/Audio";
export default async function handler(request, response) {
  try {
    await dbConnect();

    if (request.method === "GET") {
      const audios = await Audio.find();

      return response.status(200).json(audios);
    } else {
      return response
        .status(405)
        .json({ message: "Method not allowed audio Details" });
    }
  } catch (error) {
    console.error("Error in handler:", error);
    return response.status(500).json({ message: "Internal Server Error" });
  }
}
