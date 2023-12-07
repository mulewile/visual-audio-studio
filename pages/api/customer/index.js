import dbConnect from "../../../database/connect";
import Customers from "@/database/models/Customer";

export default async function handler(request, response) {
  try {
    await dbConnect();

    if (request.method === "GET") {
      const customers = await Customers.find();
      console.log("Customers are ===", customers);
      return response.status(200).json(customers);
    } else {
      return response
        .status(405)
        .json({ message: "Method not allowed for getting customer details" });
    }
  } catch (error) {
    console.error("Error in handler:", error);
    return response.status(500).json({ message: "Internal Server Error" });
  }
}
