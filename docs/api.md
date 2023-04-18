# 关于本站开放的 api 说明

你们好呀，本站已经开放 API 接口，以便能够更灵活地使用本站的服务。本文将介绍如何使用本站的 API，如果对本站的 API 接口感兴趣，请继续阅读。

> 本站的 `BASE_URL` 为 `https://awesome-sites.top/api` ，并设置允许跨域。

## 必应每日一图

介绍：获取每日一图的图片地址

举例: [https://awesome-sites.top/api/bing](https://awesome-sites.top/api/bing)

路由: /bing

参数: 无

## RSSHub

介绍：RSSHub 是一个开源、简单易用、易于扩展的 RSS 生成器，可以给任何奇奇怪怪的内容生成 RSS 订阅源。更多使用指南，请查看[https://docs.rsshub.app/](https://docs.rsshub.app/)

### Bilibili UP 主动态

举例: [https://www.awesome-sites.top/api/rss/bilibili/user/dynamic/442642038](https://www.awesome-sites.top/api/rss/bilibili/user/dynamic/442642038)

路由: /bilibili/user/dynamic/:uid/:disableEmbed?

参数:

uid, 必选 - 用户 id, 可在 UP 主主页中找到

disableEmbed, 可选 - 默认为开启内嵌视频, 任意值为关闭
