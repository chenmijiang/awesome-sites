// material-symbols:design-services

import { Icon } from '@iconify-icon/react'
import { ATagSites } from '@/types'

export const designUtilSites: ATagSites = {
  type: '工具-设计',
  icon: (
    <Icon
      icon="material-symbols:design-services"
      width={26}
      height={26}
    />
  ),
  level: 2,
  sites: [
    {
      name: 'figma',
      link: 'https://www.figma.com/',
      desc: '作为一个团队打造更好的产品。设计，原型和收集反馈都在一个地方---Figma。'
    },
    {
      name: 'framer',
      link: 'https://www.framer.com/',
      desc: 'Framer 是一个交互式的设计工具，可以帮助您创建高保真的原型，以及设计和代码的桥梁。'
    },
    {
      name: 'pixso',
      link: 'https://pixso.cn/',
      desc: '作为一个团队构建更好的产品。 使用 Figma 在一个地方进行设计、原型设计和收集反馈。'
    }
  ]
}
