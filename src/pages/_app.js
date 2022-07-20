import "../styles/globals.css";

import { Footer, Header } from "../modules/core";
function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <Header /> */}
      <Component {...pageProps} />
      {/* <Footer /> */}
    </>
  );
}

export default MyApp;
