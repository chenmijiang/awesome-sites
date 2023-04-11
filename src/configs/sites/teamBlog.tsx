import { Icon } from '@iconify-icon/react'
import { ATagSites } from '@/types'

export const teamBlog: ATagSites = {
  type: '技术团队博客',
  icon: (
    <Icon
      icon="fluent:people-team-20-filled"
      width={26}
      height={26}
    />
  ),
  sites: [
    {
      name: 'web.dev',
      link: 'https://web.dev/blog/',
      desc: 'Chrome DevRel 团队的博客'
    },
    {
      name: 'builder.io',
      link: 'https://www.builder.io/blog',
      desc: 'builder.io公司的技术博客，CTO是angular和qwik作者'
    },
    {
      name: 'chrome开发团队',
      link: 'https://developer.chrome.com/blog/',
      desc: 'chrome团队的博客，Chrome有什么新特性出来了，一般都会发博客'
    }
  ]
}