import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/index.scss";

import Script from "next/script";
import { Provider } from "react-redux";
import { store } from "@/store";

import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

export default function App({ Component, pageProps }) {
  let persistor = persistStore(store)
  return (
    <>
      {/* <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-7G8S2BB6LG" />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-7G8S2BB6LG', {
            page_path: window.location.pathname,
          });
        `,
        }}
      />  */}
      <PersistGate loading={null} persistor={persistor}>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </PersistGate>

    </>
  );
}
