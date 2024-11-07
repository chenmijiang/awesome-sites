export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta name="theme-color" content="#2C2E2F" />
        <meta
          name="keywords"
          content="前端,学习,搜索引擎,导航,前端森林,前端工具,前端工具箱,网站收集,创作,ai,开源项目,官方文档,免费接口,前端酷站,前端资源,计算机,计算机学习,前端导航,前端工具集,前端工具大全,前端工具库,前端工具推荐,前端框架推荐"
        />
        <meta
          name="description"
          content="收录前端各类技术站点，包括但不限于前端技术站点、技术周刊、高质量个人博客、前端公众号、技术规范、开源项目站点等。提供前端开发中常用的工具和资源，如图标库、正则表达式、CSS、JavaScript、服务等。"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
