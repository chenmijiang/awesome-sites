import { Icon } from '@iconify-icon/react'
import { ATagSites } from '@/types'
import {
  github,
  tech_dev,
  tech_hive,
  tech_juejin,
  tech_segmentfault,
  tech_stackoverflow,
  tech_v2ex
} from '@/configs/sites'

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
    tech_stackoverflow,
    github,
    tech_dev,
    tech_juejin,
    tech_segmentfault,
    tech_v2ex,
    tech_hive
  ]
}
