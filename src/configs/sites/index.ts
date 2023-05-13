import { Site as DescSite, StackSite as LogoSite } from '@/types'

import { logoPath } from '@/util/link.util'

type Site = DescSite & LogoSite

export const phind: Site = {
  name: 'phind',
  link: 'https://www.phind.com/',
  logo: logoPath('phind.png'),
  desc: '面向开发者的AI搜索引擎'
}

export const chatgpt_cn: Site = {
  name: 'ChatGPT-镜像',
  link: 'https://gpt1.moyunav.com',
  logo: logoPath('chatgpt_cn.png'),
  desc: '聊天机器人'
}

export const chatgpt: Site = {
  name: 'ChatGPT',
  link: 'https://chat.openai.com/chat',
  logo: logoPath('chatgpt.png'),
  desc: '聊天机器人'
}

export const react: Site = {
  name: 'React',
  link: 'https://react.dev/learn',
  logo: logoPath('react.png'),
  desc: 'React'
}

export const leetcode: Site = {
  name: 'LeetCode',
  link: 'https://leetcode.cn/problemset/all/',
  logo: logoPath('leetcode.ico'),
  desc: 'leetcode'
}

export const vue: Site = {
  name: 'Vue',
  link: 'https://cn.vuejs.org/guide/introduction.html',
  logo: logoPath('vue.png'),
  desc: 'Vue'
}

export const svelte: Site = {
  name: 'Svelte',
  link: 'https://svelte.dev/docs',
  logo: logoPath('svelte.png'),
  desc: 'Svelte'
}

export const solid: Site = {
  name: 'Solid',
  link: 'https://www.solidjs.com/',
  logo: logoPath('solid.png'),
  desc: 'Solid'
}

export const qwik: Site = {
  name: 'Qwik',
  link: 'https://qwik.builder.io/docs/overview/',
  logo: logoPath('qwik.png'),
  desc: 'Qwik'
}

export const ant_design: Site = {
  name: 'Ant Design',
  link: 'https://ant.design/components/button-cn',
  logo: logoPath('ant_design.png'),
  desc: 'Ant Design'
}

export const webpack: Site = {
  name: 'Webpack',
  link: 'https://webpack.js.org/concepts/',
  logo: logoPath('webpack.png'),
  desc: 'Webpack'
}

export const vite: Site = {
  name: 'Vite',
  link: 'https://cn.vitejs.dev/guide/',
  logo: logoPath('vite.png'),
  desc: 'Vite'
}

export const rollup: Site = {
  name: 'Rollup',
  link: 'https://rollupjs.org/introduction/',
  logo: logoPath('rollup.png'),
  desc: 'Rollup'
}

export const esbuild: Site = {
  name: 'ESbuild',
  link: 'https://esbuild.github.io/',
  logo: logoPath('esbuild.png'),
  desc: 'ESbuild'
}

export const bun: Site = {
  name: 'Bun',
  link: 'https://bun.sh/docs',
  logo: logoPath('bun.png'),
  desc: 'Bun'
}

export const tailwindcss: Site = {
  name: 'TailwindCSS',
  link: 'https://tailwindcss.com/docs/installation',
  logo: logoPath('tailwind.png'),
  desc: 'TailwindCSS'
}

export const unocss: Site = {
  name: 'unocss',
  link: 'https://github.com/unocss/unocss',
  logo: logoPath('unocss.png'),
  desc: 'unocss'
}

export const scss: Site = {
  name: 'SCSS',
  link: 'https://sass-lang.com/documentation/',
  logo: logoPath('sass.svg'),
  desc: 'SCSS'
}

export const styled_components: Site = {
  name: 'styled-components',
  link: 'https://styled-components.com/docs/basics',
  logo: logoPath('styled.png'),
  desc: 'styled-components'
}

export const nodejs: Site = {
  name: 'Node',
  link: 'https://nodejs.org/en/docs',
  logo: logoPath('node.png'),
  desc: 'Node'
}

export const nestjs: Site = {
  name: 'Nest',
  link: 'https://docs.nestjs.com/',
  logo: logoPath('nest.png'),
  desc: 'Nest'
}

export const expressjs: Site = {
  name: 'Express',
  link: 'http://expressjs.com/en/guide/routing.html',
  logo: logoPath('express.png'),
  desc: 'Express'
}

export const nextjs: Site = {
  name: 'Next',
  link: 'https://nextjs.org/docs',
  logo: logoPath('next.png'),
  desc: 'Next'
}

export const nuxtjs: Site = {
  name: 'Nuxt',
  link: 'https://nuxt.com/docs/getting-started/introduction',
  logo: logoPath('nuxt.png'),
  desc: 'Nuxt'
}

export const astro: Site = {
  name: 'Astro',
  link: 'https://astro.build/',
  logo: logoPath('astro.png'),
  desc: 'Astro'
}

export const mongodb: Site = {
  name: 'MongoDB',
  link: 'https://www.mongodb.com/',
  logo: logoPath('mongodb.ico'),
  desc: 'mongodb'
}

export const prisma: Site = {
  name: 'Prisma',
  link: 'https://www.prisma.io/docs/getting-started',
  logo: logoPath('prisma.png'),
  desc: 'Prisma'
}

export const fireboom: Site = {
  name: 'fireboom',
  link: 'https://ansons-organization.gitbook.io/product-manual/',
  logo: logoPath('fireboom.ico'),
  desc: 'fireboom'
}

export const blog_stefanjudis: Site = {
  name: 'stefanjudis',
  link: 'https://www.stefanjudis.com/',
  logo: '',
  desc: '其中有web weekly。作者自己搞的前端周刊'
}

export const blog_amitmerchant: Site = {
  name: 'amitmerchant',
  link: 'https://www.amitmerchant.com/posts/javascript/',
  logo: '',
  desc: ''
}

export const blog_csdiy: Site = {
  name: 'CS自学指南',
  link: 'https://csdiy.wiki/',
  logo: '',
  desc: '北大的同学收集的计算机自学课程集合'
}

export const blog_shanyue: Site = {
  name: '山月行',
  link: 'https://shanyue.tech/',
  logo: '',
  desc: '其中有前端工程化，开发者工具箱等内容'
}

export const blog_zhangxinxu: Site = {
  name: '鑫空间，鑫生活',
  link: 'https://www.zhangxinxu.com/wordpress/',
  logo: '',
  desc: '张鑫旭大佬的技术博客'
}

export const blog_chokcoco: Site = {
  name: 'ChokCoco - 博客园',
  link: 'https://www.cnblogs.com/coco1s',
  logo: '',
  desc: '国服第一切图仔，万物皆可 CSS'
}

export const blog_robinwieruch: Site = {
  name: 'robinwieruch',
  link: 'https://www.robinwieruch.de/blog/',
  logo: '',
  desc: '来自柏林/德国的德国软件工程师和自由开发人员, 致力于学习和教授JavaScript'
}

export const blog_lutaonan: Site = {
  name: 'lutaonan',
  link: 'https://lutaonan.com',
  logo: '',
  desc: '微软前端工程师'
}

export const oss_bestofjs: Site = {
  name: 'bestofjs',
  link: 'https://bestofjs.org/',
  logo: '',
  desc: '一个关于前端开源项目最新最热趋势的站点'
}

export const oss_publint: Site = {
  name: 'publint',
  link: 'https://publint.dev/',
  logo: '',
  desc: '检查一个npm包是否发布正确，作者是vite和svelte成员'
}

export const oss_dict_code: Site = {
  name: '编程字典',
  link: 'http://dict.code-nav.cn/',
  logo: logoPath('dict_code.png'),
  desc: '计算机编程领域专业术语大全'
}

export const oss_js_tutorial: Site = {
  name: '现代 JavaScript 教程',
  link: 'https://zh.javascript.info/',
  logo: logoPath('js_tutorial.png'),
  desc: '现代 JavaScript 教程：有关示例和任务的简单但详细的解释包括：闭包、文档和事件，以及面向对象编程等。'
}

export const oss_ts_tutorial: Site = {
  name: 'TypeScript 使用指南手册',
  link: 'http://www.patrickzhong.com/TypeScript/',
  logo: '',
  desc: 'TypeScript Handbook 中文翻译。'
}

export const spec_html: Site = {
  name: 'html规范',
  link: 'https://html.spec.whatwg.org/',
  logo: '',
  desc: ''
}

export const spec_wintercg: Site = {
  name: 'WinterCG',
  link: 'https://wintercg.org/work',
  logo: '',
  desc: 'WinterCG工作组'
}

export const teamblog_web: Site = {
  name: 'web.dev',
  link: 'https://web.dev/blog/',
  logo: '',
  desc: 'Chrome DevRel 团队的博客'
}

export const teamblog_builder: Site = {
  name: 'builder.io',
  link: 'https://www.builder.io/blog',
  logo: '',
  desc: 'builder.io公司的技术博客，CTO是angular和qwik作者'
}

export const teamblog_chrome: Site = {
  name: 'chrome开发团队',
  link: 'https://developer.chrome.com/blog/',
  logo: '',
  desc: 'chrome团队的博客，Chrome有什么新特性出来了，一般都会发博客'
}

export const tech_stackoverflow: Site = {
  name: 'stackoverflow',
  link: 'https://stackoverflow.com/',
  logo: '',
  desc: '一个面向程序员的问答社区，用户可以在这里提出问题、回答问题、评论和投票'
}

export const tech_dev: Site = {
  name: 'dev.to',
  link: 'https://dev.to/',
  logo: '',
  desc: '拥有百万开发者的技术社区，开发者分享交流，获取最新技术资讯，提高专业能力的好地方'
}

export const tech_juejin: Site = {
  name: '掘金',
  link: 'https://juejin.cn/',
  logo: logoPath('juejin.png'),
  desc: '一个面向程序员的技术社区，主要关注前端、后端、移动端、人工智能、区块链等技术领域。用户可以在掘金社区中分享自己的技术经验、学习心得、开源项目等，也可以在社区中获取最新的技术资讯、解决问题、结交同行'
}

export const tech_segmentfault: Site = {
  name: 'segmentfault',
  link: 'https://segmentfault.com/',
  logo: '',
  desc: '中国最大的技术社区之一，社区中有丰富的技术分类，包括编程语言、开发框架、前端技术、后端技术、数据库、云计算等，用户可以在其中提问、分享经验、交流技术'
}

export const tech_v2ex: Site = {
  name: 'v2ex',
  link: 'https://www.v2ex.com/',
  logo: '',
  desc: '是一个关于分享和探索的地方'
}

export const tech_hive: Site = {
  name: 'hive.one',
  link: 'https://hive.one/',
  logo: '',
  desc: '列出Twitter上某个技术社区里的名人、大佬，可以一键批量关注'
}

export const weekly_node: Site = {
  name: 'node-weekly',
  link: 'https://nodeweekly.com/issues',
  logo: '',
  desc: 'node技术周刊，约每周四更新'
}

export const weekly_js: Site = {
  name: 'javascript-weekly',
  link: 'https://javascriptweekly.com/issues',
  logo: '',
  desc: 'js技术周刊，约每周五更新'
}

export const weekly_frontend: Site = {
  name: 'frontend-weekly',
  link: 'https://frontender-ua.medium.com/',
  logo: '',
  desc: '前端周刊，周一更新'
}

export const weekly_75team: Site = {
  name: '奇舞周刊',
  link: 'https://weekly.75.team/',
  logo: '',
  desc: '360前端团队——奇舞团的周刊，周五更新'
}

export const weekly_ruanyf: Site = {
  name: '科技爱好者周刊',
  link: 'https://github.com/ruanyf/weekly/',
  logo: '',
  desc: '阮一峰科技爱好者周刊，周五更新'
}

export const weekly_zaotalk: Site = {
  name: '早早鸟日刊',
  link: 'https://www.yuque.com/zaotalk/worm',
  logo: '',
  desc: '早早鸟日刊'
}

export const weekly_mdh: Site = {
  name: 'MDH Weekly',
  link: 'https://mdhweekly.com/weekly',
  logo: '',
  desc: '云谦的周刊，周一更新'
}

export const carrot: Site = {
  name: 'carrot',
  link: 'https://github.com/xx025/carrot',
  logo: '',
  desc: '这儿为你准备了无数个免费好用的ChatGPT镜像站点'
}

export const aigc: Site = {
  name: 'AIGC工具导航',
  link: 'https://aigc.cn/',
  logo: '',
  desc: '全球1240+AI工具集合导航'
}

export const ai_toolkit: Site = {
  name: 'AI工具百宝箱',
  link: 'https://www.explainthis.io/zh-hans/ai-toolkit',
  logo: '',
  desc: '最实用、最热门的 AI 工具，帮助你在工作与学习上更轻松有效率'
}

export const duomosmart: Site = {
  name: '多模智能',
  link: 'https://duomosmart.com/',
  logo: '',
  desc: 'AI一键生成文档、流程图、思维导图'
}

export const regex_vis: Site = {
  name: '正则生成、图解',
  link: 'https://regex-vis.com/',
  logo: '',
  desc: '除了常见的图解正则，还可以通过鼠标点点点，对正则进行逻辑的增删改，详见GitHub的README'
}

export const runoob_tool: Site = {
  name: '菜鸟工具',
  link: 'https://c.runoob.com/',
  logo: '',
  desc: '菜鸟工具，为开发设计人员提供在线工具，网址导航，提供在线PHP、Python、 CSS、JS 调试，中文简繁体转换，进制转换等工具。致力于打造国内专业WEB开发工具，集成开发环境，WEB开发教程。..'
}

export const runjs_tool: Site = {
  name: '前端工具箱',
  link: 'https://www.runjs.cool',
  logo: '',
  desc: '丰富的前端工具，前端工程师开发小帮手!'
}

export const jsv9000: Site = {
  name: 'JavaScript可视化执行',
  link: 'https://www.jsv9000.app/',
  logo: '',
  desc: '以可视化的方式展示js的事件循环'
}

export const jsbench: Site = {
  name: 'JavaScript性能对比',
  link: 'https://jsbench.me/',
  logo: '',
  desc: '可以对比多段js代码的性能差异'
}

export const aloc_js: Site = {
  name: '单行JavaScript实用代码',
  link: 'https://1loc.dev/',
  logo: '',
  desc: ''
}

export const imageslidermaker: Site = {
  name: '轮播图生成器',
  link: 'https://imageslidermaker.com/v2',
  logo: '',
  desc: ''
}

export const astexplorer: Site = {
  name: '语言AST展示',
  link: 'https://www.astexplorer.net/',
  logo: '',
  desc: '一个用于探索由各种解析器生成的AST的Web工具，支持非常多语言'
}

export const icones: Site = {
  name: 'Icones',
  link: 'https://icones.js.org/',
  logo: '',
  desc: '一个免费的图标资源库，提供了大量的图标和图形，可以用于网站设计、移动应用设计、UI设计等各种设计领域'
}

export const sprite_generator: Site = {
  name: '雪碧图/精灵图生成器',
  link: 'https://www.toptal.com/developers/css/sprite-generator',
  logo: '',
  desc: '把所有的图片上传，即可获得一张雪碧图，并且带CSS代码'
}

export const ray_so: Site = {
  name: '代码Demo图生成',
  link: 'https://www.ray.so/',
  logo: '',
  desc: '虚心向大佬请教的时候，用这个或许比截图更容易让大佬一眼看见问题，给大佬良好的体验'
}

export const carbon: Site = {
  name: 'Carbon',
  link: 'https://carbon.now.sh/',
  logo: '',
  desc: '代码块截图工具'
}

export const figma: Site = {
  name: 'figma',
  link: 'https://www.figma.com/',
  logo: '',
  desc: '作为一个团队构建更好的产品。 使用 Figma 在一个地方进行设计、原型设计和收集反馈。'
}

export const framer: Site = {
  name: 'framer',
  link: 'https://www.framer.com/',
  logo: '',
  desc: 'Framer 是一个交互式的设计工具，可以帮助您创建高保真的原型，以及设计和代码的桥梁。'
}

export const pixso: Site = {
  name: 'pixso',
  link: 'https://pixso.cn/',
  logo: '',
  desc: '产品设计一体化工具 一站式完成白板、原型、设计、交付和管理，把产品设计得更美好'
}

export const ilovepdf: Site = {
  name: 'i Love PDF',
  link: 'https://www.ilovepdf.com/zh-cn/compress_pdf',
  logo: '',
  desc: '在线编辑PDF，合并PDF，拆分PDF，压缩PDF，PDF转换'
}

export const codepen: Site = {
  name: 'codepen',
  link: 'https://codepen.io/',
  logo: '',
  desc: '一个在线代码编辑器、学习环境和社区，用于使用HTML、CSS和JavaScript代码片段、项目和web应用程序进行前端web开发'
}

export const codesandbox: Site = {
  name: 'codesandbox',
  link: 'https://codesandbox.io/',
  logo: '',
  desc: 'CodeSandbox是一个云开发平台，使开发人员能够在创纪录的时间内从任何设备上编写、协作和发布任何规模的项目'
}

export const nginx_config: Site = {
  name: 'Nginx配置生成',
  link: 'https://www.digitalocean.com/community/tools/nginx?global.app.lang=zhCN',
  logo: '',
  desc: ''
}

export const reduced: Site = {
  name: 'reduced.to',
  link: 'https://reduced.to/',
  logo: '',
  desc: '一个短链服务，前端用qwik，后端用nest'
}

export const long_ng: Site = {
  name: 'long.ng',
  link: 'https://loooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo.ng/',
  logo: '',
  desc: '一个长链服务，前端用Astro，谨慎使用！'
}

export const caniuse: Site = {
  name: 'caniuse',
  link: 'https://caniuse.com/',
  logo: '',
  desc: '浏览器兼容性'
}

export const component_party: Site = {
  name: 'component-party',
  link: 'https://component-party.dev/',
  logo: '',
  desc: '前端框架语法比较'
}

export const node_toolbox: Site = {
  name: 'Node Toolbox',
  link: 'https://nodejstoolbox.com/',
  logo: '',
  desc: '查找Node生态下各分类最流行的代码库'
}

export const check_ip: Site = {
  name: 'IP/IPv6查询',
  link: 'https://ip.tool.chinaz.com/',
  logo: '',
  desc: '快速查询用户的IP和浏览器、操作系统。可以批量查询IP地址所在地，可以解析域名的多个IP地址。已完美支持IPv6查询。'
}

export const websafecolors: Site = {
  name: 'Web安全色',
  link: 'https://www.bootcss.com/p/websafecolors/',
  logo: '',
  desc: ''
}

export const svgbackgrounds: Site = {
  name: 'SVG Backgrounds',
  link: 'https://www.svgbackgrounds.com/',
  logo: '',
  desc: ''
}

export const svgwave: Site = {
  name: 'SVG 波浪背景生成',
  link: 'https://svgwave.in/',
  logo: '',
  desc: ''
}

export const css_inspiration: Site = {
  name: 'CSS灵感',
  link: 'https://csscoco.com/inspiration/#/',
  logo: '',
  desc: '这里可以让你寻找到使用或者是学习 CSS 的灵感，以分类的形式，展示不同 CSS 属性或者不同的课题使用 CSS 来解决的各种方法'
}

export const css_tricks: Site = {
  name: 'CSS Tricks',
  link: 'https://qishaoxuan.github.io/css_tricks/',
  logo: '',
  desc: '总结一些常用的 CSS 样式;记录一些 CSS 的新属性和一点奇技淫巧'
}

export const you_need_to_know_css: Site = {
  name: 'You-need-to-know-css',
  link: 'https://lhammer.cn/You-need-to-know-css/#/',
  logo: '',
  desc: '针对我们常见的网页设计问题，从不同的角度提供了多种实用而优雅的解决方案'
}

export const neumorphism: Site = {
  name: '拟态风生成器',
  link: 'https://neumorphism.io/#e0e0e0',
  logo: '',
  desc: ''
}

export const cubic_bezier: Site = {
  name: '贝塞尔曲线生成',
  link: 'https://easings.co/',
  logo: '',
  desc: ''
}

export const css_layoutit: Site = {
  name: '网格布局代码生成器',
  link: 'https://grid.layoutit.com/',
  logo: '',
  desc: ''
}

export const css_layoutit2: Site = {
  name: '另一个网格布局代码生成器',
  link: 'https://cssgrid-generator.netlify.app/',
  logo: '',
  desc: ''
}

export const accordionslider: Site = {
  name: '纯CSS手风琴折叠面板生成',
  link: 'https://accordionslider.com/',
  logo: '',
  desc: ''
}

export const bennettfeely: Site = {
  name: 'clip-path生成',
  link: 'https://bennettfeely.com/clippy/',
  logo: '',
  desc: ''
}

export const scrollbar: Site = {
  name: '滚动条生成',
  link: 'https://scrollbar.app/',
  logo: '',
  desc: '快速生成滚动条样式的css代码'
}

export const webgradients: Site = {
  name: 'CSS渐变色',
  link: 'https://webgradients.com/',
  logo: '',
  desc: ''
}

export const glassgenerator: Site = {
  name: 'CSS毛玻璃效果生成器',
  link: 'https://glassgenerator.netlify.app/#',
  logo: '',
  desc: ''
}

export const css_filter: Site = {
  name: '滤镜扭转颜色工具',
  link: 'https://www.zhangxinxu.com/sp/filter.html',
  logo: '',
  desc: '可以将一个颜色，利用CSS滤镜强行扭转成另一个颜色，如：一个深蓝色的logo图片，在深色模式下对比度太低难以看清，这时需要一个白色的logo，但是可能UI给不出来，或者没有UI，这时候前端就可以利用这个工具对图片颜色进行转换'
}

export const shadows_brumm: Site = {
  name: '平滑阴影生成器',
  link: 'https://shadows.brumm.af/',
  logo: '',
  desc: ''
}

export const animista: Site = {
  name: 'animista',
  link: 'https://animista.net/',
  logo: '',
  desc: '一堆CSS动画供君选择'
}

export const fancy_border_radius: Site = {
  name: '不规则圆形生成器',
  link: 'https://9elements.github.io/fancy-border-radius/',
  logo: '',
  desc: ''
}

export const fancy_border_radius2: Site = {
  name: '不规则圆角矩形生成器',
  link: 'https://9elements.github.io/fancy-border-radius/full-control.html',
  logo: '',
  desc: ''
}

export const tobiasahlin_loading: Site = {
  name: '一些纯CSS的Loading图标',
  link: 'https://tobiasahlin.com/spinkit/',
  logo: '',
  desc: '顶部的`source`按钮可以查看代码'
}

export const css_easings: Site = {
  name: '缓动函数速查表',
  link: 'https://easings.net/zh-cn',
  logo: '',
  desc: '除了CSS代码，它还给出了函数的代码，供一些可以自定义缓动函数的动画函数'
}

export const defensivecss: Site = {
  name: '防御性CSS提示',
  link: 'https://defensivecss.dev/tips',
  logo: '',
  desc: '实用的CSS和设计技巧，有助于建立面向未来且经得起考验的用户界面'
}

export const element: Site = {
  name: 'Element',
  link: 'https://element.eleme.cn/#/zh-CN/component/installation',
  logo: logoPath('element.svg'),
  desc: 'Element，一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的桌面端组件库'
}

export const framer_motion: Site = {
  name: 'Framer Motion',
  link: 'https://www.framer.com/motion/examples/',
  logo: logoPath('framer_motion.png'),
  desc: 'Framer Motion 是一个用于 React 的开源的动画和交互式 UI 库'
}

export const animecss: Site = {
  name: 'Animecss',
  link: 'https://animate.style/',
  logo: logoPath('animecss.ico'),
  desc: 'Animate.css 是一个随时可用的跨浏览器动画库，供您在项目中使用。 非常适合强调、主页、滑块和注意力引导提示。'
}

export const postgresql: Site = {
  name: 'PostgreSQL',
  link: 'https://www.postgresql.org/',
  logo: logoPath('postgresql.ico'),
  desc: 'PostgreSQL 是一个功能强大的开源对象-关系型数据库管理系统，是自由软件基金会的一个项目'
}

export const github: Site = {
  name: 'GitHub',
  link: 'https://github.com/',
  logo: logoPath('github.svg'),
  desc: 'GitHub 是人们构建软件的地方。已经有超过 1 亿人使用 GitHub 去 discover，fork 和 contribute 超过 3.3 亿个项目。'
}

export const drawio: Site = {
  name: 'draw.io',
  link: 'https://app.diagrams.net/',
  logo: logoPath('drawio.png'),
  desc: 'Drawio 是一个开源的在线绘图工具，可以用来绘制流程图、UML图、组织结构图、网络图、思维导图、战略地图等'
}
