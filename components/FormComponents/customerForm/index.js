import { styled } from "styled-components";
import { FormTitle } from "@/components/Form";

const StyledFieldsContainer = styled.div`
  display: grid;
  gap: 2rem;
  width: 100%;
  grid-template-areas:
    "main_customer_details-fieldset  extra_customer_details-fieldset "
    "main_customer_details-fieldset  extra_customer_details-fieldset ";
`;

export default function CustomerFormDetails() {
  return (
    <>
      <FormTitle>Customer Details Form</FormTitle>
      <StyledFieldsContainer>
        <fieldset className="main_customer_details-fieldset">
          <legend>Main Customer Details</legend>
          <label htmlFor="videoNameInput">Company Name</label>
          <input
            id="customerNameInput"
            name="customerName"
            aria-label="customerName"
            placeholder="Enter customer name"
            autoFocus
          />
          <label htmlFor="phoneNumberInput">Phone Number</label>
          <input
            id="phoneNumberInput"
            name="phoneNumber"
            aria-label="phoneNumberInput"
            placeholder="e.g., +273-076-2232-2900"
          />
          <label htmlFor="industryInput">Industry</label>
          <input
            id="industryInput"
            name="industry"
            aria-label="Industry"
            placeholder="Enter the Industry"
          />
          <label htmlFor="specializationInput">Specialisation</label>
          <input
            id="specializationInput"
            name="specialization"
            aria-label="Specialisation"
            placeholder="Enter the specialization"
          />
        </fieldset>
        <fieldset className="extra_customer_details-fieldset">
          <legend>Address</legend>
          <label htmlFor="streetInput">Street</label>
          <input
            id="streetInput"
            name="street"
            aria-label="Street"
            placeholder="Enter the street"
          />
          <label htmlFor="cityInput">City</label>
          <input
            id="cityInput"
            name="city"
            aria-label="City"
            placeholder="Enter the City"
          />
          <label htmlFor="stateInput">State - Region</label>
          <input
            id="stateInput"
            name="state"
            aria-label="State"
            placeholder="Enter the State"
          />

          <label htmlFor="videoAvailabilityInput">ZIP - Postal Code</label>
          <input
            id="videoAvailabilityInput"
            name="availability"
            aria-label="Availability"
            placeholder="Enter the availability status"
          />

          <legend>Contact Person</legend>
          <label htmlFor="nameInput">Name</label>
          <input id="nameInput" name="name" aria-label="Contact Person Name" />
          <label htmlFor="emailInput">Email</label>
          <input
            id="emailInput"
            name="email"
            aria-label="Email"
            placeholder="e.g., rossi@mailme.tx."
          />
        </fieldset>
      </StyledFieldsContainer>
    </>
  );
}
