import type { HotSite } from '@/types'
import vue from '@/lib/images/logos/vue.png'
import react from '@/lib/images/logos/react.png'
import svelte from '@/lib/images/logos/svelte.png'
import astro from '@/lib/images/logos/astro.png'
import solid from '@/lib/images/logos/solid.png'
import vite from '@/lib/images/logos/vite.png'
import webpack from '@/lib/images/logos/webpack.png'
import rollup from '@/lib/images/logos/rollup.png'
import esbuild from '@/lib/images/logos/esbuild.png'
import tailwind from '@/lib/images/logos/tailwind.png'
import qwik from '@/lib/images/logos/qwik.png'
import bun from '@/lib/images/logos/bun.png'
import unocss from '@/lib/images/logos/unocss.png'
import chatgpt_cn from '@/lib/images/logos/chatgpt_cn.png'
import chatgpt from '@/lib/images/logos/chatgpt.png'
import next from '@/lib/images/logos/next.png'
import ant_design from '@/lib/images/logos/ant_design.png'
import leetcode from '@/lib/images/logos/leetcode.ico'
import dict_code from '@/lib/images/logos/dict_code.png'
import nuxt from '@/lib/images/logos/nuxt.png'
import phind from '@/lib/images/logos/phind.png'

export const hotSites: HotSite[] = [
  {
    name: 'phind',
    link: 'https://www.phind.com/',
    logo: phind
  },
  {
    name: 'ChatGPT 中文版',
    link: 'https://gpt1.moyunav.com',
    logo: chatgpt_cn
  },
  {
    name: 'ChatGPT',
    link: 'https://chat.openai.com/chat',
    logo: chatgpt
  },
  {
    name: '编程字典',
    link: 'http://dict.code-nav.cn/',
    logo: dict_code
  },
  {
    name: 'React',
    link: 'https://react.dev',
    logo: react
  },
  {
    name: 'Vue',
    link: 'https://cn.vuejs.org/guide/introduction.html',
    logo: vue
  },
  {
    name: 'Next',
    link: 'https://nextjs.org/docs',
    logo: next
  },
  {
    name: 'Ant Design',
    link: 'https://ant.design/components/button-cn',
    logo: ant_design
  },
  {
    name: 'Svelte',
    link: 'https://svelte.dev/docs',
    logo: svelte
  },
  {
    name: 'Qwik',
    link: 'https://qwik.builder.io/docs/overview/',
    logo: qwik
  },
  {
    name: 'Astro',
    link: 'https://astro.build/',
    logo: astro
  },
  {
    name: 'Solid',
    link: 'https://www.solidjs.com/',
    logo: solid
  },
  {
    name: 'Vite',
    link: 'https://cn.vitejs.dev/guide/',
    logo: vite
  },
  {
    name: 'Rollup',
    link: 'https://rollupjs.org/introduction/',
    logo: rollup
  },
  {
    name: 'Esbuild',
    link: 'https://esbuild.github.io/',
    logo: esbuild
  },
  {
    name: 'Webpack',
    link: 'https://webpack.js.org/concepts/',
    logo: webpack
  },
  {
    name: 'TailwindCSS',
    link: 'https://tailwindcss.com/docs/installation',
    logo: tailwind
  },
  {
    name: 'unocss',
    link: 'https://github.com/unocss/unocss',
    logo: unocss
  },
  {
    name: 'LeetCode',
    link: 'https://leetcode.cn/problemset/all/',
    logo: leetcode
  },
  {
    name: 'Bun',
    link: 'https://bun.sh/docs',
    logo: bun
  },
  {
    name: 'Nuxt',
    link: 'https://nuxt.com/docs/getting-started/introduction',
    logo: nuxt
  }
]
