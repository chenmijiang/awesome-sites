import { Icon } from '@iconify-icon/react'
import { ATagSites } from '@/types'
import { runjs_tool, runoob_tool } from '@/configs/sites'

export const otherUtilSites: ATagSites = {
  type: '工具-其他',
  icon: (
    <Icon
      icon="fluent:more-vertical-28-filled"
      width={26}
      height={26}
    />
  ),
  sites: [runoob_tool, runjs_tool]
}
