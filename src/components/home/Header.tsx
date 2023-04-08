import Link from 'next/link'

import { FaLaptop, FaAirbnb, FaAlignLeft } from 'react-icons/fa'
import { ImGithub } from 'react-icons/im'

type Props = {
  isToggleShow: () => void
}

const Header = (props: Props) => {
  return (
    <div className="main-head fixed w-full top-0 left-0 md:pl-[60px] pl-0 z-10 transition-width">
      <div className="head-bg w-full h-[50px] backdrop-blur transition-colors duration-500 bg-white/70 supports-backdrop-blur:bg-white/60">
        <div className="px-4 h-full navbar flex items-center justify-between">
          <div className="container-fluid flex">
            <div className="py-2">
              <span
                className="cursor-pointer"
                onClick={props.isToggleShow}>
                <FaAlignLeft size={20} />
              </span>
            </div>
            <div className="collapse navbar-collapse order-2 order-md-1" />
            <div className="header-mini-btn"></div>
            <ul className="navbar-nav navbar-top site-menu ml-8 flex">
              <li
                id="menu-item-28"
                className="h-full flex justify-center items-center mr-4">
                <Link
                  href="/"
                  className="flex items-center hover:no-underline transition-colors">
                  <FaLaptop size={24} />
                  <span className="ml-1 text-lg">首页</span>
                </Link>
              </li>
              <li
                id="menu-item-28"
                className="h-full flex justify-center items-center mr-4">
                <Link
                  href="/ai"
                  className="flex items-center hover:no-underline transition-colors">
                  <FaAirbnb size={26} />
                  <span className="ml-1 text-lg">AI</span>
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
                <ImGithub size={26} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header
