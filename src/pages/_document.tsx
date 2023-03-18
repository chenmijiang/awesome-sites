import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Awesome Sites"
        />
        <meta
          name="author"
          content="Awesome Sites"
        />
        <meta
          name="keywords"
          content="Awesome Sites"
        />
        <meta
          name="theme-color"
          content="#000000"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
