import Form from "@/components/Form";
import { useRouter } from "next/router";
import useStore from "@/store/formStore";
import { StyledFormContainer } from "@/components/Form";
import VideoFormDetails from "@/components/FormComponents/videoForm";
import AudioFormDetails from "@/components/FormComponents/audioForm";
import CustomerFormDetails from "@/components/FormComponents/customerForm";
import myEditImage from "../../../resources/edit.png";
import Button from "@/components/Button";
import { StyledLink } from "@/pages/audio/[id]";


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

 const isVideoFormEdit = useStore((state) => state.isVideoFormEdit);
 const isAudioFormEdit = useStore((state) => state.isAudioFormEdit);
const isCustomerFormEdit = useStore((state) => state.isCustomerFormEdit);

  const router = useRouter();
  const LINK_TEXT = "Cancel";






  return (
    <div style={backgroundStyle}>
    <StyledFormContainer>
    <Form>
      {isVideoFormEdit? <VideoFormDetails /> : null}
      {isAudioFormEdit? <AudioFormDetails /> : null}
      {isCustomerFormEdit? <CustomerFormDetails /> : null}
      <Button>Update</Button>
      <StyledLink href="/videoEquip">{LINK_TEXT}</StyledLink>
      </Form>
    </StyledFormContainer>
    </div>
  );
}
