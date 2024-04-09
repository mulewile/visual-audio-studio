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

export default function Edit() {



  const router = useRouter();
  
  const { id } = router.query;
  
  const { data: video, error } = useSWR(id ? `/api/video/${id}` : null);

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
  
  console.log(id);
  
 


  return (
    <div style={backgroundStyle}>
  
      <StyledFormContainer>
      </StyledFormContainer>
    </div>
  );
}
