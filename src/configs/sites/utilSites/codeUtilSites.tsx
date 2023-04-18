import { Icon } from '@iconify-icon/react'
import { ATagSites } from '@/types'

export const codeUtilSites: ATagSites = {
  type: '工具-在线编码',
  icon: (
    <Icon
      icon="material-symbols:code-blocks-rounded"
      width={26}
      height={26}
    />
  ),
  level: 2,
  sites: [
    {
      name: 'codepen',
      link: 'https://codepen.io/',
      desc: '一个在线代码编辑器、学习环境和社区，用于使用HTML、CSS和JavaScript代码片段、项目和web应用程序进行前端web开发'
    },
    {
      name: 'codesandbox',
      link: 'https://codesandbox.io/',
      desc: 'CodeSandbox是一个云开发平台，使开发人员能够在创纪录的时间内从任何设备上编写、协作和发布任何规模的项目'
    }
  ]
}
