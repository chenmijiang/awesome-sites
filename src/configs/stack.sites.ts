import { StackCard } from '@/types'
import {
  ant_design,
  astro,
  bun,
  esbuild,
  expressjs,
  fireboom,
  leetcode,
  mongodb,
  nestjs,
  nextjs,
  nodejs,
  nuxtjs,
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
    sites: [ant_design]
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
    sites: [mongodb, prisma]
  },
  {
    name: '其他',
    sites: [leetcode, fireboom]
  }
]
