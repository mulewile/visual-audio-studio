import { SWRConfig } from "swr";
import "bootstrap/dist/css/bootstrap.min.css";
import GlobalStyle from "../styles";
import Footer from "@/components/Footer";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <SWRConfig value={{ fetcher }}>
        <Component {...pageProps} />
      </SWRConfig>
      <Footer />
    </>
  );
}
