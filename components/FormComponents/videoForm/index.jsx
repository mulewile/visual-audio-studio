import { styled } from "styled-components";
import { FormTitle } from "@/components/Form";
import useSWR from "swr";
import { useRouter } from "next/router";
import useStore from "@/store/formStore";

const StyledFieldsContainer = styled.div`
  display: grid;
  gap: 2rem;
  width: 100%;
  grid-template-areas:
    "main_video_equipment_details-fieldset  extra_video_equipment_details-fieldset "
    "main_video_equipment_details-fieldset  extra_video_equipment_details-fieldset ";
`;

export default function VideoFormDetails() {
  const isVideoEdit = useStore((state) => state.isVideoFormEdit);
  const videoToEditId = useStore((state) => state.videoToEditId);
  console.log("videoToEditId", videoToEditId);
  console.log("isVideoEdit", isVideoEdit);
  const router = useRouter();

  const { data: video, error } = useSWR(isVideoEdit && videoToEditId ? `/api/video/${videoToEditId}` : null);
  console.log("video", video);

  if (isVideoEdit && error) {
    return (
      <div>
        <p>Error loading data: Administrator will connect to the database soon</p>
      </div>
    );
  }

  if (isVideoEdit && !video) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }


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
            defaultValue={isVideoEdit && video ? video.name : ""}
          />
          <label htmlFor="videoTypeInput">Type</label>
          <input
            id="videoTypeInput"
            name="type"
            aria-label="Type"
            placeholder="e.g., Documentary"
            defaultValue={isVideoEdit && video ? video.type : ""}
          />
          <label htmlFor="videoModelInput"> Model</label>
          <input
            id="videoModelInput"
            name="model"
            aria-label="Model"
            placeholder="Enter the model"
            defaultValue={isVideoEdit && video ? video.model : ""}
          />
          <label htmlFor="videoSerialNumberInput">Serial Number</label>
          <input
            id="videoSerialNumberInput"
            name="serialnumber"
            aria-label="Serial Number"
            placeholder="Enter the serial number"
            defaultValue={isVideoEdit && video ? video.serialnumber : ""}
          />
          <label htmlFor="videoColorInput">Color</label>
          <input
            id="videoColorInput"
            name="color"
            aria-label="Color"
            placeholder="Enter the color"
            defaultValue={isVideoEdit && video ? video.color : ""}
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
            placeholder="Enter the purchase date"
            defaultValue={isVideoEdit && video ? video.purchasedate : ""}
          />
          <label htmlFor="videoConditionInput">Condition</label>
          <input
            id="videoConditionInput"
            name="condition"
            aria-label="Condition"
            placeholder="e.g., Good, Excellent, etc."
            defaultValue={isVideoEdit && video ? video.condition : ""}
          />

          <label htmlFor="videoAvailabilityInput">Availability</label>
          <input
            id="videoAvailabilityInput"
            name="availability"
            aria-label="Availability"
            placeholder="Enter the availability status"
            defaultValue={isVideoEdit && video ? video.availability : ""}
          />
          <label htmlFor="videoDepartmentlocationInput">Location</label>
          <input
            id="videoDepartmentlocationInput"
            name="departmentlocation"
            aria-label="Location"
            placeholder="Enter the location"
            defaultValue={isVideoEdit && video ? video.departmentlocation : ""}
          />
        </fieldset>
      </StyledFieldsContainer>
    </>
  );
}
