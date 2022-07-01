import "../styles/globals.css";
import "../styles/index.css";

import { NavBar, Footer } from "../components";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
