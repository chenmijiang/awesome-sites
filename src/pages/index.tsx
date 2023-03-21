import { InferGetServerSidePropsType } from 'next/types'
import HotSites from '@/components/HotSites'
// import CustomSites from '@/pages/home/CustomSites'
import List from '@/components/home/List'
import Sidebar from '@/components/home/Sidebar'
import SearchContent from '@/components/home/SearchContent'
import axios from 'axios'

export default function Home(props: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div className="home flex min-h-screen">
      {/* 侧边栏 */}
      <Sidebar />
      <main className="px-2 md:ml-[220px] ml-[100px]">
        {/* 导航 */}
        {/* <Header/> */}
        {/* 搜索 */}
        <SearchContent url={props.url} />
        {/* 热门站点 */}
        <HotSites></HotSites>
        {/* 手动设置 */}
        {/* <CustomSites></CustomSites> */}
        {/* 站点列表 */}
        <List></List>
        <footer className="h-10 text-center">
          <p className="leading-10 font-bold text-xl text-center py-3">前端森林</p>
        </footer>
      </main>
    </div>
  )
}

export async function getServerSideProps() {
  // 获取环境
  const baseUrl =
    process.env.NODE_ENV === 'production' ? process.env.PROD_BASEURL : process.env.DEV_BASEURL
  // axios获取bing图片
  const res = await fetch(baseUrl + '/api/bing')
  const { url } = await res.json()
  return {
    props: {
      url
    }
  }
}
