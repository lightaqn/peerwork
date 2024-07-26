import Document, { Html, Head, Main, NextScript } from "next/document";

const google = window.google;

export default class extends Document {
  static async getInitialProps(ctx) {}

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="application-name" content="App" />
          ...
          <script
            src={`https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_API_KEY}&callback=initMap&libraries=&v=weekly`}
            type="text/javascript"
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
