import HotSites from '@/components/HotSites'
// import CustomSites from '@/pages/home/CustomSites'
import Sidebar from '@/components/home/Sidebar'
import SearchContent from '@/components/home/SearchContent'
import Layout from '@/components/ui/layout'
import Header from '@/components/home/Header'
// import Bulletin from '@/components/home/Bulletin'
import SitesList from '@/components/home/SitesList'
import Footer from '@/components/home/Footer'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { fetchBingImg } from '@/util/fetch-bing-image'
import { useState } from 'react'
import styled from 'styled-components'

// 网页结构（flex布局）侧边栏（左侧），主体（右侧），侧边栏固定220px。主体有显示和隐藏侧边栏的按钮。改变窗口大小，小于 768px，侧边栏隐藏，主体宽度 100%

export default function Home(props: InferGetStaticPropsType<typeof getStaticProps>) {
  const [sideBarShow, setSideBarShow] = useState(true)
  const isToggleShow = () => {
    setSideBarShow(!sideBarShow)
  }
  return (
    <HomeWrapper>
      <div className={`flex flex-row-reverse w-full h-full${sideBarShow ? '' : ' mini-sidebar'}`}>
        {/* 侧边栏 */}
        <Sidebar />
        <Layout>
          {/* 导航 */}
          <Header isToggleShow={isToggleShow} />
          {/* 消息通知 */}
          {/* <Bulletin /> */}
          {/* 搜索 */}
          <SearchContent
            url={props.bingImg}
            // url={''}
          />
          {/* 手动设置 */}
          {/* <CustomSites></CustomSites> */}
          {/* 热门站点 */}
          <HotSites></HotSites>
          {/* 站点列表 */}
          <SitesList />
          {/* 脚部 */}
          <Footer />
        </Layout>
      </div>
    </HomeWrapper>
  )
}

const HomeWrapper = styled.div.attrs({
  className: 'min-h-screen'
})`
  @media (min-width: 1024px) {
    #sidebar {
      width: 220px;
    }

    .main {
      width: calc(100% - 220px);
    }

    .main-head {
      padding-left: 220px;
    }

    .mini-sidebar {
      #sidebar {
        width: 60px;
      }

      .main {
        width: calc(100% - 60px);
      }

      .main-head {
        padding-left: 60px;
      }

      .item-name,
      .logo-detail {
        display: none;
      }
    }
  }
`

export const getStaticProps: GetStaticProps<{ bingImg: string }> = async () => {
  // 获取 bing 图片
  const bingImg = await fetchBingImg()
  return {
    props: {
      bingImg: bingImg
    }
  }
}
