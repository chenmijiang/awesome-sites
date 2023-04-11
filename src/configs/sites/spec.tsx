import { Icon } from '@iconify-icon/react'
import { ATagSites } from '@/types'

export const spec: ATagSites = {
  type: '规范',
  icon: (
    <Icon
      icon="bx:bxs-ruler"
      width={26}
      height={26}
    />
  ),
  sites: [
    {
      name: 'html规范',
      link: 'https://html.spec.whatwg.org/',
      desc: ''
    },
    {
      name: 'WinterCG',
      link: 'https://wintercg.org/work',
      desc: 'WinterCG工作组'
    }
  ]
}
