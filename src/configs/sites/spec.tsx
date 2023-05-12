import { Icon } from '@iconify-icon/react'
import { ATagSites } from '@/types'
import { spec_html, spec_wintercg } from '@/configs/sites'

export const spec: ATagSites = {
  type: '规范',
  icon: (
    <Icon
      icon="bx:bxs-ruler"
      width={26}
      height={26}
    />
  ),
  sites: [spec_html, spec_wintercg]
}
