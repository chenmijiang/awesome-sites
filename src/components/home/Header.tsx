import Link from 'next/link'
import { useRouter } from 'next/router'

import { FaLaptop } from 'react-icons/fa'
import { ImIndentIncrease, ImGithub } from 'react-icons/im'
import styled from 'styled-components'

type Props = {
  isToggleShow: () => void
}

const Header = (props: Props) => {
  const router = useRouter()
  const pathname = router.pathname

  return (
    <HeaderContainer>
      <div className="head-bg w-full h-[60px] bg-white">
        <div className="py-2 px-4 navbar flex items-center justify-between">
          <div className="container-fluid flex">
            <div className="py-2">
              <span
                className="cursor-pointer"
                onClick={props.isToggleShow}>
                <ImIndentIncrease size={28} />
              </span>
            </div>
            <div className="collapse navbar-collapse order-2 order-md-1" />
            <div className="header-mini-btn"></div>
            <ul className="navbar-nav navbar-top site-menu ml-8">
              <li
                id="menu-item-28"
                className="h-full flex justify-center items-center">
                <Link
                  href="/"
                  className="flex items-center hover:no-underline hover:text-sky-200 transition-colors">
                  <FaLaptop size={28} />
                  <span className="ml-2 text-lg">首页</span>
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
    </HeaderContainer>
  )
}

const HeaderContainer = styled.div.attrs({
  className: 'main-head fixed w-full top-0 left-0 md:pl-[60px] pl-0 z-10'
})`
`

export default Header
