import { styled } from "styled-components";
import { FormTitle } from "@/components/Form";
import useStore from "@/store/formStore";
import useSWR from "swr";

const StyledFieldsContainer = styled.div`
  display: grid;
  gap: 2rem;
  width: 100%;
  grid-template-areas:
    "main_audio_equipment_details-fieldset  extra_audio_equipment_details-fieldset "
    "main_audio_equipment_details-fieldset  extra_audio_equipment_details-fieldset ";
`;

export default function AudioFormDetails() {
const audioToEditId = useStore((state) => state.audioToEditId);
const isAudioEdit = useStore((state) => state.isAudioFormEdit);

const { data: audio, error } = useSWR(isAudioEdit && audioToEditId ? `/api/audio/${audioToEditId}` : null);

  return (
    <>
      <FormTitle>Audio Details Form</FormTitle>
      <StyledFieldsContainer>
        <fieldset className="main_audio_equipment_details-fieldset">
          <legend>Main Details</legend>

          <label htmlFor="audioNameInput"> Name</label>
          <input
            id="audioNameInput"
            name="name"
            aria-label="Name"
            placeholder="Enter audio equipment name"
            autoFocus
            defaultValue={isAudioEdit && audio ? audio.name : ""}
          />
          <label htmlFor="audioTypeInput">Type</label>
          <input
            id="audioTypeInput"
            name="type"
            aria-label="Type"
            placeholder="e.g., Documentary"
            defaultValue={isAudioEdit && audio ? audio.type : ""}
          />
          <label htmlFor="audioModelInput"> Model</label>
          <input
            id="audioModelInput"
            name="model"
            aria-label="Model"
            placeholder="Enter the model"
            defaultValue={isAudioEdit && audio ? audio.model : ""}
          />
          <label htmlFor="audioSerialNumberInput">Serial Number</label>
          <input
            id="audioSerialNumberInput"
            name="serialnumber"
            aria-label="Serial Number"
            placeholder="Enter the serial number"
            defaultValue={isAudioEdit && audio ? audio.serialnumber : ""}
          />
          <label htmlFor="audioColorInput">Color</label>
          <input
            id="audioColorInput"
            name="color"
            aria-label="Color"
            placeholder="Enter the color"
            defaultValue={isAudioEdit && audio ? audio.color : ""}
          />
        </fieldset>
        <fieldset className="extra_audio_equipment_details-fieldset">
          <legend>Extra Details</legend>
          <label htmlFor="audioPurchaseDateInput"> Purchase Date</label>
          <input
            id="audioPurchaseDateInput"
            name="purchasedate"
            type="date"
            aria-label="Purchase Date"
            defaultValue={isAudioEdit && audio ? audio.purchasedate : ""}
          />
          <label htmlFor="audioConditionInput">Condition</label>
          <input
            id="audioConditionInput"
            name="condition"
            aria-label="Condition"
            placeholder="e.g., Good, Excellent, etc."
            defaultValue={isAudioEdit && audio ? audio.condition : ""}
          />

          <label htmlFor="audioAvailabilityInput">Availability</label>
          <input
            id="audioAvailabilityInput"
            name="availability"
            aria-label="Availability"
            placeholder="Enter the availability status"
            defaultValue={isAudioEdit && audio ? audio.availability : ""}
          />
          <label htmlFor="audioDepartmentlocationInput">Location</label>
          <input
            id="audioDepartmentlocationInput"
            name="departmentlocation"
            aria-label="Location"
            placeholder="Enter the location"
            defaultValue={isAudioEdit && audio ? audio.departmentlocation : ""}
          />
        </fieldset>
      </StyledFieldsContainer>
    </>
  );
}
