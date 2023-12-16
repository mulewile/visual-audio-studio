import dbConnect from "../../../database/connect";
import Video from "../../../database/models/Video";

export default async function handler(request, response) {
  const HTTP_STATUS_OK = 200;
  const HTTP_STATUS_CREATED = 201;
  const HTTP_STATUS_BAD_REQUEST = 400;
  const HTTP_STATUS_METHOD_NOT_ALLOWED = 405;
  const HTTP_STATUS_INTERNAL_SERVER_ERROR = 500;

  const RESPONSE_VIDEO_CREATED = { status: "Video created" };

  const allowedMethods = ["GET", "POST"];

  try {
    await dbConnect();

    if (request.method === "GET") {
      const videos = await Video.find();
      console.log("Hello Get");

      return response.status(HTTP_STATUS_OK).json(videos);
    } else if (request.method === "POST") {
      const videoData = request.body;
      if (videoData.name === "") {
        console.log("Validation error: Please provide a valid name");

        return response
          .status(HTTP_STATUS_BAD_REQUEST)
          .json({ error: "Please provide a valid name" });
      }

      console.log("Hello", videoData);
      const video = await Video.create(videoData);

      response.status(HTTP_STATUS_CREATED).json(RESPONSE_VIDEO_CREATED, video);
    } else if (!allowedMethods.includes(request.method)) {
      return response
        .status(HTTP_STATUS_METHOD_NOT_ALLOWED)
        .json({ message: "Method not allowed for video details" });
    }
  } catch (error) {
    console.error("Error in handler:", error);
    return response
      .status(HTTP_STATUS_INTERNAL_SERVER_ERROR)
      .json({ message: "Internal Server Error" });
  }
}
