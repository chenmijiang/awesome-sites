import '@/styles/globals.css'
import Head from 'next/head'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, scale-to-fit=no"
        />
        <title>前端森林</title>
        <meta
          name="description"
          content="前端酷站 尽收眼底"
        />
      </Head>
      <Component {...pageProps} />
      <footer>
        <p>前端森林</p>
      </footer>
    </>
  )
}
