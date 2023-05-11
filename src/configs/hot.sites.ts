import type { HotSite } from '@/types'

import { logoPath } from '@/util/link.util'

export const hotSites: HotSite[] = [
  {
    name: 'phind',
    link: 'https://www.phind.com/',
    logo: logoPath('phind.png')
  },
  {
    name: 'ChatGPT-镜像',
    link: 'https://gpt1.moyunav.com',
    logo: logoPath('chatgpt_cn.png')
  },
  {
    name: 'ChatGPT',
    link: 'https://chat.openai.com/chat',
    logo: logoPath('chatgpt.png')
  },
  {
    name: '编程字典',
    link: 'http://dict.code-nav.cn/',
    logo: logoPath('dict_code.png')
  },
  {
    name: 'React',
    link: 'https://react.dev',
    logo: logoPath('react.png')
  },
  {
    name: 'LeetCode',
    link: 'https://leetcode.cn/problemset/all/',
    logo: logoPath('leetcode.ico')
  }
]
