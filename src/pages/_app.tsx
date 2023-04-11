import Head from 'next/head'
import type { AppProps } from 'next/app'

import '@/styles/globals.css'
import '@/styles/font-awesome.min.css'

import { AppProvider } from '@/store'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <title>前端森林</title>
        <meta
          name="keywords"
          content="前端，"
        />
        <meta
          name="description"
          content="前端酷站 尽收眼底"
        />
      </Head>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </>
  )
}
