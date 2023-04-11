import { Icon } from '@iconify-icon/react'
import { ATagSites } from '@/types'

export const docUtilsSites: ATagSites = {
  type: '工具-文档',
  icon: (
    <Icon
      icon="ci:file-pdf"
      width={26}
      height={26}
    />
  ),
  sites: [
    {
      name: 'i Love PDF',
      link: 'https://www.ilovepdf.com/zh-cn/compress_pdf',
      desc: '在线编辑PDF，合并PDF，拆分PDF，压缩PDF，PDF转换'
    }
  ]
}