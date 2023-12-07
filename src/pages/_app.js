import "src/styles/globals.css";
import Head from "next/head";
import { Plus_Jakarta_Sans } from "next/font/google";

const plusjakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  return (
    <main className={plusjakartaSans.className}>
      <Head>
        <title>BlazeChatter | Realtime Chat App</title>
        <link rel="icon" type="image/x-icon" href="/favicon.ico?v=1" />
      </Head>
      <Component {...pageProps} />;
    </main>
  );
}
