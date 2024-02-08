import dbConnect from "../../../database/connect";
import Customer from "../../../database/models/Customer";

export default async function handler(request, response) {
  const HTTP_STATUS_OK = 200;
  const HTTP_STATUS_CREATED = 201;
  const HTTP_STATUS_BAD_REQUEST = 400;
  const HTTP_STATUS_METHOD_NOT_ALLOWED = 405;
  const HTTP_STATUS_INTERNAL_SERVER_ERROR = 500;

  const RESPONSE_CUSTOMER_CREATED = { status: "customer created" };

  const allowedMethods = ["GET", "POST", "PATCH", "PUT", "DELETE"];

  try {
    await dbConnect();

    if (request.method === "GET") {
      const customer = await Customer.find();

      return response.status(HTTP_STATUS_OK).json(customer);
    } else if (request.method === "POST") {
      const customerData = request.body;

      const {
        company_name,
        phone_number,
        industry,
        specialization,
        street,
        city,
        state,
        zip_code,
        name,
        email,
      } = customerData;
      const newCustomerData = {
        ...customerData,
        address: { street, city, state, zip_code },
        contact_person: { name, email },
      };

      const existingPhoneNumber = await Customer.findOne({ phone_number });
      if (company_name === "") {
        console.error("Validation error: Please provide a valid company name");

        return response
          .status(HTTP_STATUS_BAD_REQUEST)
          .json({ error: "Please provide a valid company name" });
      }

      if (street === "") {
        console.error("Validation error: Please provide a street");

        return response
          .status(HTTP_STATUS_BAD_REQUEST)
          .json({ error: "Please provide a valid street input" });
      }
      if (existingPhoneNumber) {
        return response.status(HTTP_STATUS_BAD_REQUEST).json({
          error: `"${phone_number}" is in the database. Change "${existingPhoneNumber}" in the form`,
        });
      } else {
        console.info("Phone Number is valid:", phone_number);
      }
      if (city === "") {
        console.error("Validation error: Please provide a city");

        return response
          .status(HTTP_STATUS_BAD_REQUEST)
          .json({ error: "Please provide a city input" });
      } else {
        console.info("City is valid:", city);
      }

      if (state === "") {
        console.error("Validation error: Please provide a state");

        return response
          .status(HTTP_STATUS_BAD_REQUEST)
          .json({ error: "Please provide a state input" });
      } else {
        console.info("State is valid:", state);
      }

      if (zip_code === "") {
        console.error(
          "Validation error: Please provide a valid zip code input"
        );

        return response
          .status(HTTP_STATUS_BAD_REQUEST)
          .json({ error: "Please provide a valid zip code input" });
      } else {
        console.info("Zip code is valid:", zip_code);
      }

      if (name === "") {
        console.error("Validation error: Please provide a name input");

        return response.status(HTTP_STATUS_BAD_REQUEST).json({
          error: "Please provide a valid name",
        });
      } else {
        console.info("Name is valid:", name);
      }
      if (email === "") {
        console.error("Validation error: Please provide an Email input");

        return response.status(HTTP_STATUS_BAD_REQUEST).json({
          error: "Please provide a valid Email",
        });
      } else {
        console.info("Email is valid:", email);
      }

      const customer = await Customer.create(newCustomerData);

      response
        .status(HTTP_STATUS_CREATED)
        .json(RESPONSE_CUSTOMER_CREATED, customer, {
          success: "Form is valid",
        });
    } else if (!allowedMethods.includes(request.method)) {
      return response
        .status(HTTP_STATUS_METHOD_NOT_ALLOWED)
        .json({ message: "Method not allowed for customer details" });
    }
  } catch (error) {
    console.error("Error in handler:", error);
    return response
      .status(HTTP_STATUS_INTERNAL_SERVER_ERROR)
      .json({ message: "Internal Server Error: " + error });
  }
}
