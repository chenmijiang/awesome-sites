import { SideBarSite } from '@/types'
import { Icon } from '@iconify-icon/react'

import { urlToBase64 } from '@/util/link.util'
import { toolBox } from '@/configs/fixedSites'

export const aiSites: SideBarSite[] = [
  toolBox,
  {
    type: 'phind',
    icon: (
      <Icon
        icon="logos:producthunt"
        width={26}
        height={26}
      />
    ),
    anchor: false,
    link: urlToBase64('https://www.phind.com/')
  },
  {
    type: 'ChatGPT镜像-1',
    icon: (
      <Icon
        icon="mdi:robot-outline"
        width={26}
        height={26}
      />
    ),
    anchor: false,
    link: urlToBase64('https://chat.wuguokai.cn')
  },
  {
    type: 'ChatGPT镜像-2',
    icon: (
      <Icon
        icon="mdi:robot-outline"
        width={26}
        height={26}
      />
    ),
    anchor: false,
    link: urlToBase64('https://gpt1.moyunav.com')
  }
]
