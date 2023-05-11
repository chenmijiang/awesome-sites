import { StackCard } from '@/types'

import { logoPath } from '@/util/link.util'

export const stackSites: StackCard[] = [
  {
    name: '框架',
    level: 1,
    sites: [
      {
        name: 'React',
        link: 'https://react.dev',
        logo: logoPath('react.png')
      },
      {
        name: 'Solid',
        link: 'https://www.solidjs.com/',
        logo: logoPath('solid.png')
      },
      {
        name: 'Vue',
        link: 'https://cn.vuejs.org/guide/introduction.html',
        logo: logoPath('vue.png')
      },
      {
        name: 'Svelte',
        link: 'https://svelte.dev/docs',
        logo: logoPath('svelte.png')
      },
      {
        name: 'Qwik',
        link: 'https://qwik.builder.io/docs/overview/',
        logo: logoPath('qwik.png')
      }
    ]
  },
  {
    name: '组件库',
    sites: [
      {
        name: 'Ant Design',
        link: 'https://ant.design/components/button-cn',
        logo: logoPath('ant_design.png')
      }
    ]
  },
  {
    name: '构建工具',
    sites: [
      {
        name: 'Webpack',
        link: 'https://webpack.js.org/concepts/',
        logo: logoPath('webpack.png')
      },
      {
        name: 'Vite',
        link: 'https://cn.vitejs.dev/guide/',
        logo: logoPath('vite.png')
      },
      {
        name: 'Rollup',
        link: 'https://rollupjs.org/introduction/',
        logo: logoPath('rollup.png')
      },
      {
        name: 'Esbuild',
        link: 'https://esbuild.github.io/',
        logo: logoPath('esbuild.png')
      }
    ]
  },
  {
    name: 'CSS框架/引擎',
    sites: [
      {
        name: 'TailwindCSS',
        link: 'https://tailwindcss.com/docs/installation',
        logo: logoPath('tailwind.png')
      },
      {
        name: 'unocss',
        link: 'https://github.com/unocss/unocss',
        logo: logoPath('unocss.png')
      },
      {
        name: 'scss',
        link: 'https://sass-lang.com/documentation/',
        logo: logoPath('sass.svg')
      },
      {
        name: 'styled-components',
        link: 'https://styled-components.com/docs/basics',
        logo: logoPath('styled.png')
      }
    ]
  },
  {
    name: '运行时',
    sites: [
      {
        name: 'Bun',
        link: 'https://bun.sh/docs',
        logo: logoPath('bun.png')
      },
      {
        name: 'Node',
        link: 'https://nodejs.org/en/docs',
        logo: logoPath('node.png')
      }
    ]
  },
  {
    name: '走向全栈',
    sites: [
      {
        name: 'Nest',
        link: 'https://docs.nestjs.com/',
        logo: logoPath('nest.png')
      },
      {
        name: 'Express',
        link: 'http://expressjs.com/en/guide/routing.html',
        logo: logoPath('express.png')
      },
      {
        name: 'Next',
        link: 'https://nextjs.org/docs',
        logo: logoPath('next.png')
      },
      {
        name: 'Nuxt',
        link: 'https://nuxt.com/docs/getting-started/introduction',
        logo: logoPath('nuxt.png')
      },
      {
        name: 'Astro',
        link: 'https://astro.build/',
        logo: logoPath('astro.png')
      }
    ]
  },
  {
    name: '数据库',
    sites: [
      {
        name: 'mongodb',
        link: 'https://www.mongodb.com/',
        logo: logoPath('mongodb.ico')
      },
      {
        name: 'Prisma',
        link: 'https://www.prisma.io/docs/getting-started',
        logo: logoPath('prisma.png')
      }
    ]
  },
  {
    name: '其他',
    sites: [
      {
        name: 'LeetCode',
        link: 'https://leetcode.cn/problemset/all/',
        logo: logoPath('leetcode.ico')
      },
      {
        name: 'fireboom',
        link: 'https://ansons-organization.gitbook.io/product-manual/',
        logo: logoPath('fireboom.ico')
      }
    ]
  }
]
