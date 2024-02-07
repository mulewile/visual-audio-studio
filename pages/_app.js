import { SWRConfig } from "swr";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import GlobalStyle from "../styles";
import Footer from "@/components/Footer";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function App({ Component, pageProps }) {
  const [formStatus, setFormStatus] = useState({
    videoForm: false,
    audioForm: false,
    customerForm: false,
  });

  function toggleFormStatus(formName) {
    setFormStatus((prevStatus) => ({
      ...prevStatus,
      [formName]: !prevStatus[formName],
    }));
  }

  return (
    <>
      <GlobalStyle />
      <SWRConfig value={{ fetcher }}>
        <Component
          {...pageProps}
          toggleFormStatus={toggleFormStatus}
          formStatus={formStatus}
        />
      </SWRConfig>
      <Footer />
    </>
  );
}
