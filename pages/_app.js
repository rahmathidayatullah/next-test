import "../styles/globals.css";
import axios from "axios";
axios.defaults.baseURL = `${process.env.NEXT_PUBLIC_CMS_DOMAIN}`;

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
