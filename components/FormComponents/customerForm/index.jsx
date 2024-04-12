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
  const STREET = "street";
  const STATE = "state";
  const CITY = "city";
  const ZIP_CODE = "zip_code";
  const NAME = "name";
  const EMAIL = "email";

  return (
    <>
      <FormTitle>Customer Details Form</FormTitle>
      <StyledFieldsContainer>
        <fieldset className="main_customer_details-fieldset">
          <legend>Main Customer Details</legend>
          <label htmlFor="videoNameInput">Company Name</label>
          <input
            id="customerNameInput"
            name="company_name"
            aria-label="customerName"
            placeholder="Enter customer name"
            autoFocus
          />
          <label htmlFor="phoneNumberInput">Phone Number</label>
          <input
            id="phoneNumberInput"
            name="phone_number"
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
            name={STREET}
            aria-label="Street"
            placeholder="Enter the street"
          />
          <label htmlFor="cityInput">City</label>
          <input
            id="cityInput"
            name={CITY}
            aria-label="City"
            placeholder="Enter the City"
          />
          <label htmlFor={"stateInput"}>State - Region</label>
          <input
            id="stateInput"
            name={STATE}
            aria-label="State"
            placeholder="Enter the State"
          />

          <label htmlFor={"zipCodeInput"}>ZIP - Postal Code</label>
          <input
            id="zipCodeInput"
            name={ZIP_CODE}
            aria-label="ZIP or Postal Code"
            placeholder="Enter the ZIP or Postal Code"
          />

          <legend>Contact Person</legend>
          <label htmlFor="nameInput">Name</label>
          <input id="nameInput" name={NAME} aria-label="Contact Person Name" />
          <label htmlFor={EMAIL}>Email</label>
          <input
            id="emailInput"
            name={EMAIL}
            aria-label="Email"
            placeholder="e.g., rossi@mailme.tx."
          />
        </fieldset>
      </StyledFieldsContainer>
    </>
  );
}
