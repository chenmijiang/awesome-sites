import { Icon } from '@iconify-icon/react'
import { ATagSites } from '@/types'

export const regexpUtilsSites: ATagSites = {
  type: '工具-正则',
  icon: (
    <Icon
      icon="bi:regex"
      width={26}
      height={26}
    />
  ),
  sites: [
    {
      name: '正则生成、图解',
      link: 'https://regex-vis.com/',
      desc: '除了常见的图解正则，还可以通过鼠标点点点，对正则进行逻辑的增删改，详见GitHub的README'
    }
  ]
}