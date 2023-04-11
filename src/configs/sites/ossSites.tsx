import { Icon } from '@iconify-icon/react'
import { ATagSites } from '@/types'

// 热门开源项目的站点
export const ossSites: ATagSites = {
  type: '开源项目站点',
  icon: (
    <Icon
      icon="fluent:communication-16-filled"
      width={26}
      height={26}
    />
  ),
  sites: [
    {
      name: 'bestofjs',
      link: 'https://bestofjs.org/',
      desc: '一个关于前端开源项目最新最热趋势的站点'
    },
    {
      name: 'publint',
      link: 'https://publint.dev/',
      desc: '检查一个npm包是否发布正确，作者是vite和svelte成员'
    },
    {
      name: '编程词典',
      link: 'http://dict.code-nav.cn/',
      desc: '计算机编程领域专业术语大全'
    }
  ]
}
