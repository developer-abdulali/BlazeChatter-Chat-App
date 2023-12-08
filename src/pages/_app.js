import "src/styles/globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";

const plusjakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  return (
    <main className={plusjakartaSans.className}>
      <Component {...pageProps} />;
    </main>
  );
}
