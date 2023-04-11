import { Icon } from '@iconify-icon/react'
import { ATagSites } from '@/types'

export const blog: ATagSites = {
  type: '高质量个人博客',
  icon: (
    <Icon
      icon="material-symbols:person-rounded"
      width={26}
      height={26}
    />
  ),
  sites: [
    {
      name: 'stefanjudis',
      link: 'https://www.stefanjudis.com/',
      desc: '其中有web weekly。作者自己搞的前端周刊'
    },
    {
      name: 'amitmerchant',
      link: 'https://www.amitmerchant.com/posts/javascript/',
      desc: ''
    },
    {
      name: 'CS自学指南',
      link: 'https://csdiy.wiki/',
      desc: '北大的同学收集的计算机自学课程集合'
    },
    {
      name: '山月行',
      link: 'https://shanyue.tech/',
      desc: '其中有前端工程化，开发者工具箱等内容'
    },
    {
      name: '鑫空间，鑫生活',
      link: 'https://www.zhangxinxu.com/wordpress/',
      desc: '张鑫旭大佬的技术博客'
    },
    {
      name: 'ChokCoco - 博客园',
      link: 'https://www.cnblogs.com/coco1s',
      desc: '国服第一切图仔，万物皆可 CSS'
    },
    {
      name: 'robinwieruch',
      link: 'https://www.robinwieruch.de/blog/',
      desc: '来自柏林/德国的德国软件工程师和自由开发人员, 致力于学习和教授JavaScript'
    },
    {
      name: 'lutaonan',
      link: 'https://lutaonan.com',
      desc: '微软前端工程师'
    }
  ]
}
