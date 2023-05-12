import { StackCard } from '@/types'
import {
  animecss,
  ant_design,
  astro,
  bun,
  element,
  esbuild,
  expressjs,
  fireboom,
  framer_motion,
  leetcode,
  mongodb,
  nestjs,
  nextjs,
  nodejs,
  nuxtjs,
  postgresql,
  prisma,
  qwik,
  react,
  rollup,
  scss,
  solid,
  styled_components,
  svelte,
  tailwindcss,
  unocss,
  vite,
  vue,
  webpack
} from '@/configs/sites'

export const stackSites: StackCard[] = [
  {
    name: '前端框架/库',
    sites: [react, vue, svelte, solid, qwik]
  },
  {
    name: 'UI组件库',
    sites: [ant_design, element]
  },
  {
    name: '动画/交互',
    sites: [framer_motion, animecss]
  },
  {
    name: '构建工具',
    sites: [webpack, vite, rollup, esbuild, bun]
  },
  {
    name: 'CSS框架/工具',
    sites: [tailwindcss, unocss, scss, styled_components]
  },
  {
    name: '走向全栈',
    sites: [nodejs, nestjs, expressjs, nextjs, nuxtjs, astro]
  },
  {
    name: '数据库',
    sites: [mongodb, postgresql, prisma]
  },
  {
    name: '其他',
    sites: [leetcode, fireboom]
  }
]
