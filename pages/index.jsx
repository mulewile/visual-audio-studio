
import myVideoImage from "../resources/videocamera.png";
import Header from "@/components/Header";

export const backgroundStyle = {
  backgroundImage: `url(${myVideoImage.src})`,
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

export default function HomePage() {
  return (
    <div style={backgroundStyle}>
     <Header />

    </div>
  );
}
