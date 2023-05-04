import Head from 'next/head'
import type { AppProps } from 'next/app'
import { Analytics } from '@vercel/analytics/react'

import '@/styles/globals.css'
import '@/styles/font-awesome.min.css'

import '@/util/init-data'

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
          content="前端,学习,搜索引擎,导航,前端森林,前端工具,前端工具箱,网站收集,创作,ai,开源项目,官方文档,免费接口,前端酷站,前端资源,计算机,计算机学习,前端导航,前端工具集,前端工具大全,前端工具库,前端工具推荐,前端框架推荐"
        />
        <meta
          name="description"
          content="收录前端各类技术站点，包括但不限于前端技术站点、技术周刊、高质量个人博客、前端公众号、技术规范、开源项目站点等。提供前端开发中常用的工具和资源，如图标库、正则表达式、CSS、JavaScript、服务等。"
        />
      </Head>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
      <Analytics />
    </>
  )
}
