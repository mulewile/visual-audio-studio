import dbConnect from "@/database/connect";
import Customers from "@/database/models/Customer";

export default async function handler(request, response) {
  try {
    await dbConnect();
    const { id } = request.query;

    if (request.method === "GET") {
      const customerDetails = await Customers.findById(id);

      if (!customerDetails) {
        return response
          .status(404)
          .json({ status: "error", message: "Customer details not found" });
      }
      return response.status(200).json(customerDetails);
    } else if (request.method === "PUT") {
      await Customers.findByIdAndUpdate(id, { $set: request.body });

      response.status(200).json({
        status: `Customer with ${id} has been updated`,
        message: "Rating updated successfully",
      });
    } else {
      return response.status(405).json({
        status: "error",
        message: "Method not allowed for getting customer id",
      });
    }
  } catch (error) {
    console.error("Error in handler:", error);
    return response.status(500).json({
      status: "error",
      message: "Internal Server Error. Contact the Administrator",
    });
  }
}
