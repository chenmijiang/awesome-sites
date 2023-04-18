import { Icon } from '@iconify-icon/react'
import { ATagSites } from '@/types'

export const otherUtilSites: ATagSites = {
  type: '工具-其他',
  icon: (
    <Icon
      icon="fluent:more-vertical-28-filled"
      width={26}
      height={26}
    />
  ),
  sites: [
    {
      name: '菜鸟工具',
      link: 'https://c.runoob.com/',
      desc: '菜鸟工具，为开发设计人员提供在线工具，网址导航，提供在线PHP、Python、 CSS、JS 调试，中文简繁体转换，进制转换等工具。致力于打造国内专业WEB开发工具，集成开发环境，WEB开发教程。..'
    },
    {
      name: '前端工具箱',
      link: 'https://www.runjs.cool',
      desc: '丰富的前端工具，前端工程师开发小帮手!'
    }
  ]
}
