import { Icon } from '@iconify-icon/react'
import { ATagSites } from '@/types'

export const serviceUtilSites: ATagSites = {
  type: '工具-服务',
  icon: (
    <Icon
      icon="solar:server-2-bold"
      width={26}
      height={26}
    />
  ),
  sites: [
    {
      name: 'Nginx配置生成',
      link: 'https://www.digitalocean.com/community/tools/nginx?global.app.lang=zhCN',
      desc: ''
    },
    {
      name: 'reduced.to',
      link: 'https://reduced.to/',
      desc: '一个短链服务，前端用qwik，后端用nest'
    },
    {
      name: 'long.ng',
      link: 'https://loooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo.ng/',
      desc: '一个长链服务，前端用Astro，谨慎使用！'
    },
    {
      name: 'caniuse',
      link: 'https://caniuse.com/',
      desc: '浏览器兼容性'
    },
    // {
    //   name: 'component-party',
    //   link: 'https://component-party.lainbo.com/',
    //   desc: '前端框架语法比较'
    // },
    {
      name: 'Node Toolbox',
      link: 'https://nodejstoolbox.com/',
      desc: '查找Node生态下各分类最流行的代码库'
    },
    {
      name: 'IP/IPv6查询',
      link: 'https://ip.tool.chinaz.com/',
      desc: '快速查询用户的IP和浏览器、操作系统。可以批量查询IP地址所在地，可以解析域名的多个IP地址。已完美支持IPv6查询。'
    }
  ]
}
