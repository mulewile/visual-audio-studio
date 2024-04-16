import { styled } from "styled-components";
import { FormTitle } from "@/components/Form";
import useStore from "@/store/formStore";
import useSWR from "swr";

const StyledFieldsContainer = styled.div`
  display: grid;
  gap: 2rem;
  width: 100%;
  grid-template-areas:
    "main_customer_details-fieldset  extra_customer_details-fieldset "
    "main_customer_details-fieldset  extra_customer_details-fieldset ";
`;

export default function CustomerFormDetails() {
  const isCustomerFormEdit = useStore((state) => state.isCustomerFormEdit);
  const customerToEditId = useStore((state) => state.customerToEditId);
  console.log("customerToEditId", customerToEditId);
  console.log("isCustomerFormEdit", isCustomerFormEdit);

  const { data: customer, error } = useSWR( isCustomerFormEdit && customerToEditId ? `/api/customer/${customerToEditId}` : null);

  if (isCustomerFormEdit && error) {
    return (
      <div>
        <p>Error loading customer data: Contact System Administrator</p>
      </div>
    );
  }

  if (isCustomerFormEdit && !customer) {
    return (
      <div> 
        <h1>Loading...</h1>
      </div>
    );
  }

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
            defaultValue={isCustomerFormEdit && customer ? customer.company_name : ""}
          />
          <label htmlFor="phoneNumberInput">Phone Number</label>
          <input
            id="phoneNumberInput"
            name="phone_number"
            aria-label="phoneNumberInput"
            placeholder="e.g., +273-076-2232-2900"
            defaultValue={isCustomerFormEdit && customer ? customer.phone_number : ""}
          />
          <label htmlFor="industryInput">Industry</label>
          <input
            id="industryInput"
            name="industry"
            aria-label="Industry"
            placeholder="Enter the Industry"
            defaultValue={isCustomerFormEdit && customer ? customer.industry : ""}
          />
          <label htmlFor="specializationInput">Specialisation</label>
          <input
            id="specializationInput"
            name="specialization"
            aria-label="Specialisation"
            placeholder="Enter the specialization"
            defaultValue={isCustomerFormEdit && customer ? customer.specialization : ""}
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
            defaultValue={isCustomerFormEdit && customer ? customer.address.street : ""}
          />
          <label htmlFor="cityInput">City</label>
          <input
            id="cityInput"
            name={CITY}
            aria-label="City"
            placeholder="Enter the City"
            defaultValue={isCustomerFormEdit && customer ?  customer.address.city : ""}
          />
          <label htmlFor={"stateInput"}>State - Region</label>
          <input
            id="stateInput"
            name={STATE}
            aria-label="State"
            placeholder="Enter the State"
            defaultValue={isCustomerFormEdit && customer ?  customer.address.state : ""}
          />

          <label htmlFor={"zipCodeInput"}>ZIP - Postal Code</label>
          <input
            id="zipCodeInput"
            name={ZIP_CODE}
            aria-label="ZIP or Postal Code"
            placeholder="Enter the ZIP or Postal Code"
            defaultValue={isCustomerFormEdit && customer ?  customer.address.zip_code : ""}
          />

          <legend>Contact Person</legend>
          <label htmlFor="nameInput">Name</label>
          <input id="nameInput" name={NAME} aria-label="Contact Person Name" 
          defaultValue={isCustomerFormEdit && customer ? customer.contact_person.name : ""}
          />
          <label htmlFor={EMAIL}>Email</label>
          <input
            id="emailInput"
            name={EMAIL}
            aria-label="Email"
            placeholder="e.g., rossi@mailme.tx."
            defaultValue={isCustomerFormEdit && customer ? customer.contact_person.email : ""}
          />
        </fieldset>
      </StyledFieldsContainer>
    </>
  );
}
