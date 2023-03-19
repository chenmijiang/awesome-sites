import HotSites from '@/components/HotSites'
// import CustomSites from '@/pages/home/CustomSites'
import List from '@/components/home/List'
import Sidebar from '@/components/home/Sidebar'
import SearchContent from '@/components/home/SearchContent'

export default function Home() {
  return (
    <div className="home flex min-h-screen">
      {/* 侧边栏 */}
      <Sidebar/>
      <main className='px-2'>
        {/* 导航 */}
        {/* <Header/> */}
        {/* 搜索 */}
        <SearchContent />
        {/* 热门站点 */}
        <HotSites></HotSites>
        {/* 手动设置 */}
        {/* <CustomSites></CustomSites> */}
        {/* 站点列表 */}
        <List></List>
      </main>
    </div>
  )
}
