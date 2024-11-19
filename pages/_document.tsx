import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&family=Paytone+One&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="antialiased bg-background text-one">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
