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
      const {
        name,
        type,
        model,
        serialnumber,
        purchasedate,
        condition,
        color,
        availability,
        departmentlocation,
      } = videoData;

      if (name === "") {
        console.error("Validation error: Please provide a valid name");

        return response
          .status(HTTP_STATUS_BAD_REQUEST)
          .json({ error: "Please provide a valid name" });
      } else {
        console.info("Name is valid:", name);
      }
      if (type === "") {
        console.error("Validation error: Please provide a valid type");

        return response
          .status(HTTP_STATUS_BAD_REQUEST)
          .json({ error: "Please provide a valid type" });
      } else {
        console.info("Type is valid:", type);
      }

      if (model === "") {
        console.error("Validation error: Please provide a valid model");

        return response
          .status(HTTP_STATUS_BAD_REQUEST)
          .json({ error: "Please provide a valid model" });
      } else {
        console.info("Model is valid:", model);
      }

      if (serialnumber === "") {
        console.error(
          "Validation error: Please provide a valid serial number input"
        );

        return response
          .status(HTTP_STATUS_BAD_REQUEST)
          .json({ error: "Please provide a valid serial number input" });
      } else {
        console.info("Serial Number is valid:", serialnumber);
      }

      if (purchasedate === "") {
        console.error(
          "Validation error: Please provide a valid purchase date input"
        );

        return response
          .status(HTTP_STATUS_BAD_REQUEST)
          .json({ error: "Please provide a valid purchase date input" });
      } else {
        console.info("Purchase Date is valid:", purchasedate);
      }

      if (condition === "") {
        console.error(
          "Validation error: Please provide a valid condition input"
        );

        return response
          .status(HTTP_STATUS_BAD_REQUEST)
          .json({ error: "Please provide a valid condition input" });
      } else {
        console.info("Condition is valid:", condition);
      }

      if (color === "") {
        console.error("Validation error: Please provide a valid color input");

        return response
          .status(HTTP_STATUS_BAD_REQUEST)
          .json({ error: "Please provide a valid color input" });
      } else {
        console.info("Color is valid:", color);
      }

      if (availability === "") {
        console.error(
          "Validation error: Please provide a valid availability input"
        );

        return response
          .status(HTTP_STATUS_BAD_REQUEST)
          .json({ error: "Please provide a valid availability input" });
      } else {
        console.info("Availability is valid:", availability);
      }
      if (departmentlocation === "") {
        console.error(
          "Validation error: Please provide a valid department or location input"
        );

        return response
          .status(HTTP_STATUS_BAD_REQUEST)
          .json({
            error: "Please provide a valid department or location input",
          });
      } else {
        console.info("Department or Location is valid:", departmentlocation);
      }

      console.log("Hello", videoData);
      const video = await Video.create(videoData);

      response
        .status(HTTP_STATUS_CREATED)
        .json(RESPONSE_VIDEO_CREATED, video, { success: "Form is valid" });
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
