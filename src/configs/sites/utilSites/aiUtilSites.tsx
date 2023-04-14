import { Icon } from '@iconify-icon/react'
import { ATagSites } from '@/types'

export const aiUtilSites: ATagSites = {
  type: '工具-ai',
  icon: (
    <Icon
      icon="logos:airbnb-icon"
      width={24}
      height={24}
    />
  ),
  level: 2,
  sites: [
    {
      name: 'carrot',
      link: 'https://github.com/xx025/carrot',
      desc: '这儿为你准备了无数个免费好用的ChatGPT镜像站点'
    },
    {
      name: 'AIGC工具导航',
      link: 'https://aigc.cn/',
      desc: '全球1240+AI工具集合导航'
    },
    {
      name: 'AI工具百宝箱',
      link: 'https://www.explainthis.io/zh-hans/ai-toolkit',
      desc: '最实用、最热门的 AI 工具，帮助你在工作与学习上更轻松有效率'
    },
    {
      name: 'phind',
      link: 'https://www.phind.com/',
      desc: '面向开发者的AI搜索引擎'
    },
    {
      name: '多模智能',
      link: 'https://duomosmart.com/',
      desc: 'AI一键生成文档、流程图、思维导图'
    }
  ]
}
