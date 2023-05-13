// material-symbols:design-services

import { Icon } from '@iconify-icon/react'
import { ATagSites } from '@/types'
import { drawio, figma, framer, pixso } from '@/configs/sites'

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
  sites: [figma, framer, pixso, drawio]
}
