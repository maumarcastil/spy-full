import Head from "next/head";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <style jsx>{`
        div {
          display: grid;
          place-items: center;
          height: 100vh;
        }
      `}</style>
    </>
  );
}

export default MyApp;
