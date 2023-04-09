import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from 'react'
import { useEffect, useState, useContext } from 'react'
import styled from 'styled-components'

import Header from '@/components/home/Header'
import Sidebar from '@/components/home/Sidebar'
import Footer from '@/components/home/Footer'

import { AppContext } from '@/store/index'

// 网页结构（flex布局）侧边栏（左侧），主体（右侧），侧边栏固定220px。主体有显示和隐藏侧边栏的按钮。改变窗口大小，小于 768px，侧边栏隐藏，主体宽度 100%
const Layout = (props: {
  children:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | ReactFragment
    | ReactPortal
    | null
    | undefined
}) => {
  const { state, dispatch } = useContext(AppContext)

  const isToggleShow = () => {
    dispatch({
      type: 'toggleSideBarShow'
    })
  }

  return (
    <LayoutWrapper>
      <div
        className={`flex flex-row-reverse w-full h-full${
          state.sideBarShow ? '' : ' mini-sidebar'
        }`}>
        {/* 侧边栏 */}
        <Sidebar />
        <div className="main px-2 md:ml-[60px] ml-0 relative">
          {/* 导航 */}
          <Header
            isToggleShow={isToggleShow}
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
`

export default Layout
