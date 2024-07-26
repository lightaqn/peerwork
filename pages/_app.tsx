import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { Provider } from "react-redux";
import { store } from "../store/store";
import ScrollMonitor from "../utils/ScrollMonitor";
import SizeMonitor from "../utils/SizeMonitor";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <ThemeProvider attribute="class" enableSystem={true}>
      <SizeMonitor>
        <ScrollMonitor>
          <SessionProvider session={session}>
            <Provider store={store}>
              <Toaster />
              <Component {...pageProps} />;
            </Provider>
          </SessionProvider>
        </ScrollMonitor>
      </SizeMonitor>
    </ThemeProvider>
  );
}

export default MyApp;
