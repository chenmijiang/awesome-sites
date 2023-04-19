import { GetStaticProps, InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import fs from 'fs/promises'
import path from 'path'

import { Icon } from '@iconify-icon/react'

import MdContentDoc from '@/components/MdContentDoc'
import MainPanel from '@/components/ui/MainPanel'

import { SideBarSite } from '@/types'

const DocPage = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const links: SideBarSite[] = []
  props.titles.forEach((title) => {
    links.push({
      type: title.replace('## ', ''),
      icon: (
        <Icon
          icon="ph:link"
          width={26}
          height={26}
        />
      )
    })
  })
  return (
    <>
      <Head>
        <title>api文档 | 前端森林</title>
      </Head>
      <MainPanel sites={links}>
        <MdContentDoc
          className=" markdown-body bg-transparent xl:w-[1000px] lg:w-[750px]  mx-auto transition-width"
          content={props.content}
        />
      </MainPanel>
    </>
  )
}

export const getStaticProps: GetStaticProps<{
  content: string
  titles: string[]
}> = async () => {
  // 读取 @/docs/api.md 文件
  const content = await fs.readFile(path.join(process.cwd(), 'docs/api.md'), 'utf-8')
  // 获取文件所有## 起始位置的标题
  let titles: string[] = content.split('\n').filter((line) => line.startsWith('## '))

  return {
    props: {
      content,
      titles
    }
  }
}

export default DocPage
