import HotSites from '@/components/HotSites'
// import CustomSites from '@/pages/home/CustomSites'
import SearchContent from '@/components/home/SearchContent'
import Layout from '@/components/ui/layout'

// import Bulletin from '@/components/home/Bulletin'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { fetchBingImg } from '@/util/fetch-bing-image'
import AllSitesList from '@/components/home/AllSitesList'

export default function Home(props: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout>
      {/* 消息通知 */}
      {/* <Bulletin /> */}
      {/* 搜索 */}
      <SearchContent url={props.bingImg} />
      {/* 手动设置 */}
      {/* <CustomSites></CustomSites> */}
      {/* 热门站点 */}
      <HotSites></HotSites>
      {/* 站点列表 */}
      <AllSitesList />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps<{ bingImg: string }> = async () => {
  // 获取 bing 图片
  const bingImg = await fetchBingImg()
  return {
    props: {
      bingImg: bingImg
    },
    revalidate: 60 * 60 * 1 // 1小时更新一次
  }
}
