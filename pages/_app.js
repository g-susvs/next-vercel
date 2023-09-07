import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || Component;

  return getLayout(<Component {...pageProps} />);
}

export default MyApp;
