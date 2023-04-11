import Link from 'next/link'

import { Icon } from '@iconify-icon/react'

type Props = {
  isToggleShow: () => void
  show: boolean
}

const Header = (props: Props) => {
  return (
    <div className="main-head fixed w-full top-0 left-0 md:pl-[60px] pl-0 z-10 transition-width">
      <div className="head-bg w-full h-[50px] backdrop-blur transition-colors duration-500 bg-white/70 supports-backdrop-blur:bg-white/60">
        <div className="px-4 h-full navbar flex items-center justify-between">
          <div className="container-fluid flex">
            <div className="py-2 mr-8 md:block hidden">
              <span
                className="cursor-pointer h-full flex items-center"
                onClick={props.isToggleShow}>
                <Icon
                  icon={`material-symbols:left-panel-${props.show ? 'close' : 'open'}-rounded`}
                  width={28}
                  height={28}
                />
              </span>
            </div>
            {/* 移动端侧边栏开关按钮 */}
            <div className="header-mini-btn py-2 mr-8 hidden">
              <span className="cursor-pointer h-full flex items-center">
                {/* <Icon
                  icon="charm:menu-hamburger"
                  width={28}
                  height={28}
                /> */}
              </span>
            </div>
            {/* 跳转链接：首页、tools */}
            <ul className="navbar-nav navbar-top site-menu flex">
              <li
                id="menu-item-28"
                className="h-full flex justify-center items-center mr-4">
                <Link
                  href="/"
                  className="flex items-center hover:no-underline transition-colors">
                  <Icon
                    icon="mdi:laptop"
                    width={24}
                    height={24}
                  />
                  <span className="ml-1 text-lg">首页</span>
                </Link>
              </li>
              <li
                id="menu-item-28"
                className="h-full flex justify-center items-center mr-4">
                <Link
                  href="/toolbox"
                  className="flex items-center hover:no-underline transition-color">
                  <Icon
                    icon="mingcute:tool-line"
                    width={24}
                    height={24}
                  />
                  <span className="ml-1 text-lg">工具</span>
                </Link>
              </li>
            </ul>
          </div>
          <ul className="nav navbar-menu text-xs order-1 order-md-2 position-relative">
            {/* 项目地址 */}
            <li className="nav-login ml-3 ml-md-4">
              <a
                className="w-full h-full flex justify-center items-center"
                href="https://github.com/chenmijiang/awesome-sites"
                target="_blank">
                <Icon
                  icon="logos:github-icon"
                  width={26}
                  height={26}
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header
