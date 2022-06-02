import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => (
  <Html lang="cs">
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Yrsa:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <meta
        name="description"
        content="Digitální encyklopedie obce Loděnice u Berouna"
      />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
