import Header from "@/components/Header";
import useStore from "@/store/formStore";
import AudioEquipmentStyledTable from "@/components/AudioEquipment";
import StyledButton from "../components/Button";

import { StyledLink } from "./audio/[id]";
import Link from "next/link";

import myAudioImage from "../resources/mixer.png";



const audioViewHeader = "Audio Equipment";

export const backgroundStyle = {
  backgroundImage: `url(${myAudioImage.src})`,
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

export default function AudioEquipment() {

const activateAudioFormCreate = useStore((state)=>(state.activateAudioFormCreate))

  return (
    <div style={backgroundStyle}>
      <Header>{audioViewHeader}</Header>
      <StyledLink href={""}>{audioViewHeader}</StyledLink>
      <Link href={`/add`}>
        <StyledButton
          disabled={false}
          onClick={() => {
            activateAudioFormCreate();
          }}
        >
          Add
        </StyledButton>
      </Link>
      <AudioEquipmentStyledTable />
    </div>
  );
}
