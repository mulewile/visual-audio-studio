import { styled } from "styled-components";
import { FormTitle } from "@/components/Form";

const StyledFieldsContainer = styled.div`
  display: grid;
  gap: 2rem;
  width: 100%;
  grid-template-areas:
    "main_video_equipment_details-fieldset  extra_video_equipment_details-fieldset "
    "main_video_equipment_details-fieldset  extra_video_equipment_details-fieldset ";
`;

export default function VideoFormDetails() {
  return (
    <>
      <FormTitle>Video Details Form</FormTitle>
      <StyledFieldsContainer>
        <fieldset className="main_video_equipment_details-fieldset">
          <legend>Main Details</legend>

          <label htmlFor="videoNameInput"> Name</label>
          <input
            id="videoNameInput"
            name="name"
            aria-label="Name"
            placeholder="Enter video equipment name"
            autoFocus
          />
          <label htmlFor="videoTypeInput">Type</label>
          <input
            id="videoTypeInput"
            name="type"
            aria-label="Type"
            placeholder="e.g., Documentary"
          />
          <label htmlFor="videoModelInput"> Model</label>
          <input
            id="videoModelInput"
            name="model"
            aria-label="Model"
            placeholder="Enter the model"
          />
          <label htmlFor="videoSerialNumberInput">Serial Number</label>
          <input
            id="videoSerialNumberInput"
            name="serialnumber"
            aria-label="Serial Number"
            placeholder="Enter the serial number"
          />
          <label htmlFor="videoColorInput">Color</label>
          <input
            id="videoColorInput"
            name="color"
            aria-label="Color"
            placeholder="Enter the color"
          />
        </fieldset>
        <fieldset className="extra_video_equipment_details-fieldset">
          <legend>Extra Details</legend>
          <label htmlFor="videoPurchaseDateInput"> Purchase Date</label>
          <input
            id="videoPurchaseDateInput"
            name="purchasedate"
            type="date"
            aria-label="Purchase Date"
          />
          <label htmlFor="videoConditionInput">Condition</label>
          <input
            id="videoConditionInput"
            name="condition"
            aria-label="Condition"
            placeholder="e.g., Good, Excellent, etc."
          />

          <label htmlFor="videoAvailabilityInput">Availability</label>
          <input
            id="videoAvailabilityInput"
            name="availability"
            aria-label="Availability"
            placeholder="Enter the availability status"
          />
          <label htmlFor="videoDepartmentlocationInput">Location</label>
          <input
            id="videoDepartmentlocationInput"
            name="departmentlocation"
            aria-label="Location"
            placeholder="Enter the location"
          />
        </fieldset>
      </StyledFieldsContainer>
    </>
  );
}
