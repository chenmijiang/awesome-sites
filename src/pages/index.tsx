import HotSites from '@/components/HotSites'
// import CustomSites from '@/pages/home/CustomSites'
import SearchContent from '@/components/home/SearchContent'
import MainPanel from '@/components/ui/MainPanel'

// import Bulletin from '@/components/home/Bulletin'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { fetchBingImg } from '@/util/fetch-bing-image'
import { homeSites } from '@/configs/home.sites'
import { fixedSites } from '@/configs/fixedSites'
import SitesList from '@/components/home/SitesList'

export default function Home(props: InferGetStaticPropsType<typeof getStaticProps>) {
  const sites = [...fixedSites]
  sites.push(...homeSites.map((site) => ({ type: site.type, icon: site.icon, level: site.level })))

  return (
    <MainPanel sites={sites}>
      {/* 消息通知 */}
      {/* <Bulletin /> */}
      {/* 搜索 */}
      <SearchContent url={props.bingImg} />
      {/* 手动设置 */}
      {/* <CustomSites></CustomSites> */}
      {/* 热门站点 */}
      <HotSites></HotSites>
      {/* 站点列表 */}
      <SitesList sites={homeSites} />
    </MainPanel>
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
