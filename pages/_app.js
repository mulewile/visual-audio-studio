import { SWRConfig } from "swr";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import GlobalStyle from "../styles";
import Footer from "@/components/Footer";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function App({ Component, pageProps }) {
  const [videoForm, setVideoForm] = useState(false);

  function setFormStatus() {
    setVideoForm(!false);
  }

  return (
    <>
      <GlobalStyle />
      <SWRConfig value={{ fetcher }}>
        <Component
          {...pageProps}
          setFormStatus={setFormStatus}
          videoForm={videoForm}
        />
      </SWRConfig>
      <Footer />
    </>
  );
}
