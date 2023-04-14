import { Icon } from '@iconify-icon/react'
import React from 'react'

import { SideBarSite } from '@/types'

export const fixedSites: SideBarSite[] = [
  {
    type: '热门站点',
    icon: (
      <Icon
        icon="solar:fire-bold"
        width={26}
        height={26}
      />
    ),
    level: 2
  },
  {
    type: '工具箱',
    icon: (
      <Icon
        icon="mingcute:tool-line"
        width={26}
        height={26}
      />
    ),
    level: -1,
    anchor: false,
    link: '/toolbox'
  }
]

export const toolBox: SideBarSite = {
  type: '工具箱',
  icon: (
    <Icon
      icon="mingcute:tool-line"
      width={26}
      height={26}
    />
  ),
  level: -1,
  anchor: false,
  link: '/toolbox'
}
