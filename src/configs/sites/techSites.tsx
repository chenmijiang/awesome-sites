import { Icon } from '@iconify-icon/react'
import { ATagSites } from '@/types'

export const techSites: ATagSites = {
  type: '技术社区',
  icon: (
    <Icon
      icon="icon-park-solid:communication"
      width={26}
      height={26}
    />
  ),
  sites: [
    {
      name: 'dev.to',
      link: 'https://dev.to/',
      desc: '拥有百万开发者的技术社区，开发者分享交流，获取最新技术资讯，提高专业能力的好地方'
    },
    {
      name: '掘金',
      link: 'https://juejin.cn/',
      desc: '一个面向程序员的技术社区，主要关注前端、后端、移动端、人工智能、区块链等技术领域。用户可以在掘金社区中分享自己的技术经验、学习心得、开源项目等，也可以在社区中获取最新的技术资讯、解决问题、结交同行'
    },
    {
      name: 'segmentfault',
      link: 'https://segmentfault.com/',
      desc: '中国最大的技术社区之一，社区中有丰富的技术分类，包括编程语言、开发框架、前端技术、后端技术、数据库、云计算等，用户可以在其中提问、分享经验、交流技术'
    },
    {
      name: 'v2ex',
      link: 'https://www.v2ex.com/',
      desc: '是一个关于分享和探索的地方'
    },
    {
      name: 'hive.one',
      link: 'https://hive.one/',
      desc: '列出Twitter上某个技术社区里的名人、大佬，可以一键批量关注'
    }
  ]
}
