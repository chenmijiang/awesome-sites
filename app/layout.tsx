import "@/styles/globals.css";
import { isDev } from "@/util";
import { Metadata, Viewport } from "next/types";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "前端森林",
    description:
      "收录前端各类技术站点，包括但不限于前端技术站点、技术周刊、高质量个人博客、前端公众号、技术规范、开源项目站点等。提供前端开发中常用的工具和资源，如图标库、正则表达式、CSS、JavaScript、服务等。",
    keywords:
      "前端,学习,搜索引擎,导航,前端森林,前端工具,前端工具箱,网站收集,创作,ai,开源项目,官方文档,免费接口,前端酷站,前端资源,计算机,计算机学习,前端导航,前端工具集,前端工具大全,前端工具库,前端工具推荐,前端框架推荐",
    authors: [{ name: "chenmijiang", url: "https://github.com/chenmijiang" }],
    openGraph: {
      type: "website",
      title: "前端森林",
      description:
        "收录前端各类技术站点，包括但不限于前端技术站点、技术周刊、高质量个人博客、前端公众号、技术规范、开源项目站点等。提供前端开发中常用的工具和资源，如图标库、正则表达式、CSS、JavaScript、服务等。",
      siteName: "前端森林",
      images: [{ url: "https://www.awesome-sites.top/favicon.ico" }],
    },
    icons: {
      icon: "https://www.awesome-sites.top/favicon.ico",
    },
    // isDev 为 true 时，禁用 verification
    verification: isDev
      ? undefined
      : { google: "ABRmhm3CDQH-Stdz8oF6lmtF8-mRgi9n_WSr5ngCLdE" },
  };
}

// {/* <link
// rel="stylesheet"
// href="https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/5.2.0/github-markdown-light.min.css"
// integrity="sha512-bm684OXnsiNuQSyrxuuwo4PHqr3OzxPpXyhT66DA/fhl73e1JmBxRKGnO/nRwWvOZxJLRCmNH7FII+Yn1JNPmg=="
// crossOrigin="anonymous"
// referrerPolicy="no-referrer"
// /> */}

export const viewport: Viewport = {
  themeColor: "#2C2E2F",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  minimumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
