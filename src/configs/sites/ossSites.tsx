import { Icon } from '@iconify-icon/react'
import { ATagSites } from '@/types'
import {
  oss_bestofjs,
  oss_dict_code,
  oss_js_tutorial,
  oss_publint,
  oss_ts_tutorial
} from '@/configs/sites'

// 热门开源项目的站点
export const ossSites: ATagSites = {
  type: '开源项目站点',
  icon: (
    <Icon
      icon="fluent:communication-16-filled"
      width={26}
      height={26}
    />
  ),
  sites: [oss_bestofjs, oss_publint, oss_dict_code, oss_js_tutorial, oss_ts_tutorial]
}
