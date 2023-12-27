import mongoose from "mongoose";

const { Schema } = mongoose;

const customersSchema = new Schema({
  company_name: { type: String, required: true },
  phone_number: { type: String, required: true },
  industry: { type: String, required: true },
  specialization: { type: String, required: true },
  address: {
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zip_code: { type: String, required: true },
  },
  contact_person: {
    name: { type: String, required: false },
    email: { type: String, required: false },
  },
});

const Customers =
  mongoose.models.Customers ||
  mongoose.model("Customers", customersSchema, "customers");

export default Customers;
