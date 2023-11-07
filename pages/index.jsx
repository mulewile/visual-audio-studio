import StyledHeader from "@/components/Header";
import usestate from "react";
import VideoEquipmentStyledList from "@/components/VideoEquipment";
import Footer from "@/components/Footer";
export default function HomePage() {
  return (
    <div>
      <StyledHeader>Visual Audio Studio</StyledHeader>
      <VideoEquipmentStyledList/>
      <Footer/>
    </div>
  );
}
