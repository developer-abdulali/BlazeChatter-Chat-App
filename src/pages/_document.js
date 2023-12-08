import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>BlazeChatter | Realtime Chat App</title>
        <link rel="icon" type="image/x-icon" href="/favicon.ico?v=1" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
