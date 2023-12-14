import dbConnect from "../../../database/connect";
import Video from "../../../database/models/Video";

export default async function handler(request, response) {
  try {
    await dbConnect();

    if (request.method === "GET") {
      const videos = await Video.find();
      return response.status(200).json(videos);
    } else if (request.method === "POST") {
      const videoData = request.body;
      const video = await Video.create(videoData);
      response.status(201).json({ status: "Video created", video });
    } else {
      return response
        .status(405)
        .json({ message: "Method not allowed video details" });
    }
  } catch (error) {
    console.error("Error in handler:", error);
    return response.status(500).json({ message: "Internal Server Error" });
  }
}
