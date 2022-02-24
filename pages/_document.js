import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="es">
        <Head>
          <link
            as="font"
            crossOrigin="anonymous"
            href="/static/fonts/Cormorant SemiBold.eot"
            rel="preconnect"
          ></link>
          <link
            as="font"
            crossOrigin="anonymous"
            href="/static/fonts/Cormorant SemiBold.svg"
            rel="preconnect"
          ></link>
          <link
            as="font"
            crossOrigin="anonymous"
            href="/static/fonts/Cormorant SemiBold.woff"
            rel="preconnect"
          ></link>
          <link
            as="font"
            crossOrigin="anonymous"
            href="/static/fonts/Cormorant SemiBold.woff2"
            rel="preconnect"
          ></link>
          <link
            as="font"
            crossOrigin="anonymous"
            href="/static/fonts/Darker Grotesque Bold.eot"
            rel="preconnect"
          ></link>
          <link
            as="font"
            crossOrigin="anonymous"
            href="/static/fonts/Darker Grotesque Bold.svg"
            rel="preconnect"
          ></link>
          <link
            as="font"
            crossOrigin="anonymous"
            href="/static/fonts/Darker Grotesque Bold.woff"
            rel="preconnect"
          ></link>
          <link
            as="font"
            crossOrigin="anonymous"
            href="/static/fonts/Darker Grotesque Bold.woff2"
            rel="preconnect"
          ></link>
          <link
            as="font"
            crossOrigin="anonymous"
            href="/static/fonts/Darker Grotesque Medium.eot"
            rel="preconnect"
          ></link>
          <link
            as="font"
            crossOrigin="anonymous"
            href="/static/fonts/Darker Grotesque Medium.svg"
            rel="preconnect"
          ></link>
          <link
            as="font"
            crossOrigin="anonymous"
            href="/static/fonts/Darker Grotesque Medium.woff"
            rel="preconnect"
          ></link>
          <link
            as="font"
            crossOrigin="anonymous"
            href="/static/fonts/Darker Grotesque Medium.woff2"
            rel="preconnect"
          ></link>
          <link
            as="font"
            crossOrigin="anonymous"
            href="/static/fonts/Darker Grotesque Regular.eot"
            rel="preconnect"
          ></link>
          <link
            as="font"
            crossOrigin="anonymous"
            href="/static/fonts/Darker Grotesque Regular.svg"
            rel="preconnect"
          ></link>
          <link
            as="font"
            crossOrigin="anonymous"
            href="/static/fonts/Darker Grotesque Regular.woff"
            rel="preconnect"
          ></link>
          <link
            as="font"
            crossOrigin="anonymous"
            href="/static/fonts/Darker Grotesque Regular.woff2"
            rel="preconnect"
          ></link>
          <link
            as="font"
            crossOrigin="anonymous"
            href="/static/fonts/Darker Grotesque SemiBold.eot"
            rel="preconnect"
          ></link>
          <link
            as="font"
            crossOrigin="anonymous"
            href="/static/fonts/Darker Grotesque SemiBold.svg"
            rel="preconnect"
          ></link>
          <link
            as="font"
            crossOrigin="anonymous"
            href="/static/fonts/Darker Grotesque SemiBold.woff"
            rel="preconnect"
          ></link>
          <link
            as="font"
            crossOrigin="anonymous"
            href="/static/fonts/Darker Grotesque SemiBold.woff2"
            rel="preconnect"
          ></link>
        </Head>
        <body>
          <Main></Main>
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
