import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Preconnect for fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Inter Font (Google Fonts) */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/JystharajLogo.jpg" />

        {/* Charset and theme */}
        <meta charSet="UTF-8" />
        <meta name="theme-color" content="#1E3A8A" /> {/* Deep Blue from your logo */}
      </Head>
      <body className="font-sans bg-white text-gray-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
