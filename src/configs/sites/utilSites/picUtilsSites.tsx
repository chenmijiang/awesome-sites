import { Icon } from '@iconify-icon/react'
import { ATagSites } from '@/types'

export const picUtilsSites: ATagSites = {
  type: '工具-图片',
  icon: (
    <Icon
      icon="ic:baseline-image"
      width={26}
      height={26}
    />
  ),
  sites: [
    {
      name: 'Icones',
      link: 'https://icones.js.org/',
      desc: '一个免费的图标资源库，提供了大量的图标和图形，可以用于网站设计、移动应用设计、UI设计等各种设计领域'
    },
    {
      name: '雪碧图/精灵图生成器',
      link: 'https://www.toptal.com/developers/css/sprite-generator',
      desc: '把所有的图片上传，即可获得一张雪碧图，并且带CSS代码'
    },
    {
      name: '代码Demo图生成',
      link: 'https://www.ray.so/',
      desc: '虚心向大佬请教的时候，用这个或许比截图更容易让大佬一眼看见问题，给大佬良好的体验'
    },
    {
      name: 'Carbon',
      link: 'https://carbon.now.sh/',
      desc: '另一个代码块截图工具，和上面那个比较一下，自己喜欢哪个'
    }
  ]
}
