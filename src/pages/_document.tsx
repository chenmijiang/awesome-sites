import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta
          http-equiv="Content-Type"
          content="text/html; charset=UTF-8"
        />
        <meta
          name="theme-color"
          content="#2C2E2F"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
