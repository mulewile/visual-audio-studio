import useSWR from "swr";
import { useRouter } from "next/router";
import { StyledFormContainer } from "@/components/Form";
import myEditImage from "../../../resources/edit.png";


export const backgroundStyle = {
  backgroundImage: `url(${myEditImage.src})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start",
  alignItems: "center",
};

export default function Edit({isEdit, setEditMode, toggleFormStatus, formStatus}) {



  const router = useRouter();
  
  const { id } = router.query;
  
  const { data: video, error } = useSWR(id ? `/api/video/${id}` : null);
  console.log("isEdit edit", isEdit);

  if (error) {
    return (
      <div>
        <p>Error loading data: Administrator will connect to the database soon</p>
      </div>
    );
  }

  if (!video) { 
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  } 

  console.log(video);
  console.log("isEdit", isEdit);
  console.log(id);
  
 


  return (
    <div style={backgroundStyle}>
  <form>
    <StyledFormContainer>
      <fieldset className="main_video_equipment_details-fieldset">
        <legend>Main Details</legend>

        <label htmlFor="videoNameInput"> Name</label>
        <input
          id="videoNameInput"
          name="name"
          aria-label="Name"
          placeholder="Enter video equipment name"
          autoFocus
          defaultValue={video.name}
        />
        <label htmlFor="videoTypeInput">Type</label>
        <input
          id="videoTypeInput"
          name="type"
          aria-label="Type"
          placeholder="e.g., Documentary"
          defaultValue={video.type}
        />
        <label htmlFor="videoModelInput">Model</label>
        <input
          id="videoModelInput"
          name="model"
          aria-label="Model"
          placeholder="e.g., Canon EOS 5D Mark IV"
          defaultValue={video.model}
        />
        <label htmlFor="videoSerialNumberInput">Serial Number</label>
        <input
          id="videoSerialNumberInput"
          name="serialnumber"
          aria-label="Serial Number"
          placeholder="e.g., 123456789"
          defaultValue={video.serialnumber}
        />
        <label htmlFor="videoPurchaseDateInput">Purchase Date</label>
        <input
          id="videoPurchaseDateInput"
          name="purchasedate"
          aria-label="Purchase Date"
          placeholder="e.g., 2021-12-31"
          defaultValue={video.purchasedate}
        />
        <label htmlFor="videoConditionInput">Condition</label>
        <input
          id="videoConditionInput"
          name="condition"
          aria-label="Condition"
          placeholder="e.g., Good"
          defaultValue={video.condition}
        />
        <label htmlFor="videoColorInput">Color</label>
        <input
          id="videoColorInput"
          name="color"
          aria-label="Color"
          placeholder="e.g., Black"
          defaultValue={video.color}
        />
        <label htmlFor="videoAvailabilityInput">Availability</label>
        <input
          id="videoAvailabilityInput"
          name="availability"
          aria-label="Availability"
          placeholder="e.g., Available"
          defaultValue={video.availability}
        />
        <label htmlFor="videoLocationInput">Location</label>
        <input
          id="videoLocationInput"
          name="location"
          aria-label="Location"
          placeholder="e.g., Room 101"
          defaultValue={video.location}
        />
      </fieldset>
      <button type="submit">Submit</button>
    </StyledFormContainer>
  </form>

    </div>
  );
}
