import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import styled from 'styled-components'

import github from '@/lib/images/github.svg'

type Props = {
  isToggleShow: () => void
}

const Header = (props: Props) => {
  const router = useRouter()
  const pathname = router.pathname

  return (
    <div className="main-head fixed w-full top-0 left-0 md:pl-[100px] pl-0">
      <div className="w-full">
        <div className="px-2 navbar flex items-center justify-between">
          <div className="container-fluid flex">
            <div className="position-absolute w-100 text-center">
              {/* <a
                href="https://www.tboxn.com"
                className="navbar-brand d-md-none m-0"
                title="Tbox导航">
                <img
                  src="https://www.tboxn.com/wp-content/uploads/2022/01/英文字母设计感logo-7.png"
                  className="logo-light"
                  alt="Tbox导航"
                  height="30"
                />
                <img
                  src="https://www.tboxn.com/wp-content/uploads/2022/01/英文字母设计感logo-8.png"
                  className="logo-dark d-none"
                  alt="Tbox导航"
                  height="30"
                />
              </a> */}
            </div>
            <div className="nav-item d-md-none mobile-menu py-2 position-relative">
              <a
                href="javascript:"
                id="sidebar-switch"
                data-toggle="modal"
                data-target="#sidebar">
                <i className="iconfont icon-classification icon-lg"></i>
              </a>
            </div>
            <div className="collapse navbar-collapse order-2 order-md-1" />
            <div className="header-mini-btn">
              <label>
                <input
                  id="mini-button"
                  type="checkbox"
                  checked
                />
                <svg
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    className="line--1"
                    d="M0 40h62c18 0 18-20-17 5L31 55"></path>
                  <path
                    className="line--2"
                    d="M0 50h80"></path>
                  <path
                    className="line--3"
                    d="M0 60h62c18 0 18 20-17-5L31 45"></path>
                </svg>
              </label>
            </div>
            <ul className="navbar-nav navbar-top site-menu mr-4">
              <li
                id="menu-item-28"
                className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-28">
                <Link href="/">
                  <i className="fas fa-laptop icon-fw icon-lg"></i>
                  <span>首页</span>
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
                <Image
                  className="object-contain"
                  src={github}
                  alt="GitHub"
                  width={24}
                  height={24}
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

// const HeaderContainer = styled.div.attrs({
//   className: 'w-full'
// })``

export default Header
