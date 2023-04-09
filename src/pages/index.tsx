import HotSites from '@/components/HotSites'
// import CustomSites from '@/pages/home/CustomSites'
import SearchContent from '@/components/home/SearchContent'
import MainLayout from '@/components/ui/MainLayout'

// import Bulletin from '@/components/home/Bulletin'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { fetchBingImg } from '@/util/fetch-bing-image'
import AllSitesList from '@/components/home/AllSitesList'
import { Icon } from '@iconify-icon/react'
import { allSites } from '@/configs/sites'

export default function Home(props: InferGetStaticPropsType<typeof getStaticProps>) {
  let sites = [
    {
      type: '热门站点',
      icon: (
        <Icon
          icon="solar:fire-bold"
          width={26}
          height={26}
        />
      )
    }
  ]
  sites.push(...allSites.map((site) => ({ type: site.type, icon: site.icon })))

  return (
    <MainLayout sites={sites}>
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
    </MainLayout>
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
