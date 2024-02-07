import mongoose from "mongoose";

const { Schema } = mongoose;

const customersSchema = new Schema({
  company_name: { type: String, required: false },
  phone_number: { type: String, required: false },
  industry: { type: String, required: false },
  specialization: { type: String, required: false },
  rating: { type: Number, required: false },
  address: {
    street: { type: String, required: false },
    city: { type: String, required: false },
    state: { type: String, required: false },
    zip_code: { type: String, required: false },
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
