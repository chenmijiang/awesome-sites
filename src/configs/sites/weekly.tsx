import { Icon } from '@iconify-icon/react'
import { ATagSites } from '@/types'
import {
  weekly_75team,
  weekly_frontend,
  weekly_js,
  weekly_mdh,
  weekly_node,
  weekly_ruanyf,
  weekly_zaotalk
} from '@/configs/sites'

// 各类技术周刊
export const weekly: ATagSites = {
  type: '技术周刊',
  icon: (
    <Icon
      icon="material-symbols:book"
      width={26}
      height={26}
    />
  ),
  sites: [
    weekly_node,
    weekly_js,
    weekly_frontend,
    weekly_75team,
    weekly_ruanyf,
    weekly_zaotalk,
    weekly_mdh
  ]
}
