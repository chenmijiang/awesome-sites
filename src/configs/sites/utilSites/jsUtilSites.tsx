import { Icon } from '@iconify-icon/react'
import { ATagSites } from '@/types'

export const jsUtilSites: ATagSites = {
  type: '工具-js',
  icon: (
    <Icon
      icon="ri:javascript-fill"
      width={26}
      height={26}
    />
  ),
  sites: [
    {
      name: 'JavaScript可视化执行',
      link: 'https://www.jsv9000.app/',
      desc: '以可视化的方式展示js的事件循环'
    },
    {
      name: 'JavaScript性能对比',
      link: 'https://jsbench.me/',
      desc: '可以对比多段js代码的性能差异'
    },
    {
      name: '单行JavaScript实用代码',
      link: 'https://1loc.dev/',
      desc: ''
    },
    {
      name: '轮播图生成器',
      link: 'https://imageslidermaker.com/v2',
      desc: ''
    },
    {
      name: '语言AST展示',
      link: 'https://www.astexplorer.net/',
      desc: '一个用于探索由各种解析器生成的AST的Web工具，支持非常多语言'
    }
  ]
}