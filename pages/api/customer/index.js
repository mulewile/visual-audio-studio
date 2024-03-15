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

  const validateInputs = (value, errorMessage) => {
    if (!value) {
      console.error(errorMessage);
      response.status(HTTP_STATUS_BAD_REQUEST).json({ error: errorMessage });
      return false;
    }
    return true;
  };

  const checkDuplicatePhoneNumber = (duplicatePhoneNumber) => {
    if (duplicatePhoneNumber) {
      response.status(HTTP_STATUS_BAD_REQUEST).json({
        error: `"${duplicatePhoneNumber}" is in the database. Please enter a unique Phone number`,
      });
      return true;
    } else {
      return false;
    }
  };

  const validateEmail = (email) => {
    const EMAIL_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!EMAIL_REGEX.test(email)) {
      console.error("Validation error: Please provide a valid Email input");
      response
        .status(HTTP_STATUS_BAD_REQUEST)
        .json({ error: "Please provide a valid Email" });
      return false;
    }
    return true;
  };

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

      const existingPhoneNumber = await Customer.findOne(
        { phone_number },
        { phone_number: 1 }
      );
      const duplicatePhoneNumber = existingPhoneNumber
        ? existingPhoneNumber.phone_number
        : null;

      if (
        !validateInputs(company_name, "Please provide a valid company name") ||
        checkDuplicatePhoneNumber(duplicatePhoneNumber) ||
        !validateInputs(phone_number, "Please provide a phone number") ||
        !validateInputs(street, "Please provide a street") ||
        phone_number.length < 10 ||
        !validateInputs(city, "Please provide a city") ||
        !validateInputs(state, "Please provide a state") ||
        !validateInputs(zip_code, "Please provide a valid zip code") ||
        !validateInputs(name, "Please provide a contact name") ||
        !validateEmail(email)
      ) {
        return;
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
