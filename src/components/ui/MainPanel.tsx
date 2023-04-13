import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal, useState } from 'react'
import { useContext } from 'react'
import styled from 'styled-components'

import Header from '@/components/home/Header'
import Sidebar from '@/components/home/Sidebar'
import Footer from '@/components/home/Footer'

import { AppContext } from '@/store/index'
import { SideBarSite } from '@/types'
import MobileSidebar from '../home/MobileSidebar'

// 网页结构（flex布局）侧边栏（左侧），主体（右侧），侧边栏固定220px。主体有显示和隐藏侧边栏的按钮。改变窗口大小，小于 768px，侧边栏隐藏，主体宽度 100%
const MainPanel = (props: {
  children:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | ReactFragment
    | ReactPortal
    | null
    | undefined
  sites: SideBarSite[]
}) => {
  const { state, dispatch } = useContext(AppContext)
  const [mSidebarShow, setMSidebarShow] = useState(false)

  const isToggleShow = () => {
    dispatch({
      type: 'toggleSideBarShow'
    })
  }

  const isMSidebarShow = () => {
    setMSidebarShow(!mSidebarShow)
  }

  return (
    <LayoutWrapper>
      <div
        className={`sidebar flex flex-row-reverse w-full h-full${state.sideBarShow ? '' : ' mini-sidebar'}${
          mSidebarShow ? ' m-sidebar' : ''
        }`}
        onClick={() => {
          if (mSidebarShow) {
            setMSidebarShow(false)
          }
        }}>
        {/* 侧边栏 */}
        <Sidebar sites={props.sites} />
        {/* 移动侧边栏 */}
        <MobileSidebar sites={props.sites} />
        <div className="main px-2 md:ml-[60px] ml-0 relative">
          {/* 导航 */}
          <Header
            isToggleShow={isToggleShow}
            isToggleMShow={isMSidebarShow}
            show={state.sideBarShow}
          />
          {/* 滚动状态 */}
          <div className="mt-[80px] flex-1">{props.children}</div>
          {/* 脚部 */}
          <Footer />
        </div>
      </div>
    </LayoutWrapper>
  )
}

const LayoutWrapper = styled.div.attrs({
  className: 'min-h-screen'
})`
  @media (min-width: 1024px) {
    #sidebar {
      width: 220px;
      transition: width 0.3s;
    }

    .main {
      width: calc(100% - 220px);
      transition: width 0.3s;
    }

    .main-head {
      padding-left: 220px;
      transition: padding-left 0.3s;
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

  @media (max-width: 768px) {
    .sidebar::before {
      transition: all 0.3s;
    }
    .m-sidebar {
      &::before {
        content: '';
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        z-index: 5;
      }
      #m-sidebar {
        width: 220px;
      }
    }
  }
`

export default MainPanel
