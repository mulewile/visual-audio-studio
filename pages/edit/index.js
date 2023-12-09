import Button from "@/components/Button";
import Form, { FormTitle } from "@/components/Form";
import { StyledFormContainer } from "@/components/Form";
import myEditImage from "../../resources/edit.png";
import { StyledLink } from "../video/[id]";

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

export default function Edit() {
  const linkText = "Cancel";

  return (
    <div style={backgroundStyle}>
      <StyledFormContainer>
        <Form>
          <FormTitle>Video Details Form</FormTitle>
          <label htmlFor="videoNameInput"> Name</label>
          <input id="videoNameInput" name="name" />
          <label htmlFor="videoTypeInput">Type</label>
          <input id="videoTypeInput" name="type" />
          <label htmlFor="videoModelInput"> Model</label>
          <input id="videoModelInput" name="model" />
          <label htmlFor="videoSerialNumberInput">Serial Number</label>
          <input id="videoSerialNumberInput" name="serialnumber" />
          <label htmlFor="videoPurchaseDateInput"> Purchase Date</label>
          <input id="videoPurchaseDateInput" name="purchasedate" />
          <label htmlFor="videoConditionInput">Condition</label>
          <input id="videoConditionInput" name="condition" />
          <label htmlFor="videoColorInput">Color</label>
          <input id="videoColorInput" name="color" />
          <label htmlFor="videoAvailabilityInput">Availability</label>
          <input id="videoAvailabilityInput" name="availability" />
          <Button type="submit" disabled={true}>
            Submit
          </Button>
          <StyledLink href={"/videoEquip"}>{linkText}</StyledLink>
        </Form>
      </StyledFormContainer>
    </div>
  );
}
