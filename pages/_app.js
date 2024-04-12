import React, { useState, useEffect } from "react";
import { SWRConfig } from "swr";
import Footer from "@/components/Footer";
import GlobalStyle from "../styles";

import "bootstrap/dist/css/bootstrap.min.css";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function App({ Component, pageProps }) {
  const [formStatus, setFormStatus] = useState({
    videoForm: false,
    audioForm: false,
    customerForm: false,
    isVideoEdit: false,
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
