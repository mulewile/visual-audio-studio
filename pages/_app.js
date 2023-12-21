import { SWRConfig } from "swr";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import GlobalStyle from "../styles";
import Footer from "@/components/Footer";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function App({ Component, pageProps }) {
  const [videoForm, setVideoForm] = useState(false);
  const [audioForm, setAudioForm] = useState(false);

  function setFormStatus() {
    setVideoForm(!false);
  }

  function setFormStatusAudio() {
    setAudioForm(!false);
  }

  return (
    <>
      <GlobalStyle />
      <SWRConfig value={{ fetcher }}>
        <Component
          {...pageProps}
          setFormStatus={setFormStatus}
          setFormStatusAudio={setFormStatusAudio}
          videoForm={videoForm}
          audioForm={audioForm}
        />
      </SWRConfig>
      <Footer />
    </>
  );
}
