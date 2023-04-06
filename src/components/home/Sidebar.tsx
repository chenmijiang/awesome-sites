import Link from 'next/link'
import { Link as JumpLink } from 'react-scroll'

import { allSites } from '@/configs/sites'
import { ImNewspaper, ImFire, ImCompass, ImInfo } from 'react-icons/im'

import SimpleBar from 'simplebar-react'
import 'simplebar-react/dist/simplebar.min.css'

const Sidebar = () => {
  return (
    <div
      id="sidebar"
      className="md:w-[60px] w-0 fixed top-0 left-0 h-full overflow-auto z-20">
      <div className="modal-dialog h-full sidebar-nav-inner flex flex-col">
        {/* sidebar-logo */}
        <div className="sidebar-logo bg-sky-500/10">
          <div className="logo overflow-hidden flex justify-center items-center">
            <Link
              href="/"
              className="flex items-center hover:no-underline h-[60px]">
              <ImCompass size={28} />
              <h1 className="logo-detail lg:block hidden text-2xl leading-[60px] ml-2">前端森林</h1>
            </Link>
          </div>
        </div>
        {/* sidebar-memu */}
        <div className="sidebar-menu flex-1">
          <div className="sidebar-scroll h-full">
            <SimpleBar style={{ height: 'calc(100vh - 120px)',outline:'none' }}>
              <ul>
                <li className="sidebar-item leading-10 ml-3 my-2">
                  <JumpLink
                    to="热门站点"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-120}
                    duration={500}
                    className="flex items-center hover:no-underline h-[30px] cursor-pointer">
                    <ImFire size={26} />
                    <span className="item-name lg:block hidden ml-2">热门站点</span>
                  </JumpLink>
                </li>
                {allSites.map((list, index) => {
                  return (
                    <li
                      className="sidebar-item leading-10 ml-3 my-2"
                      key={index}>
                      <JumpLink
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        to={list.type}
                        className="flex items-center hover:no-underline h-[30px] cursor-pointer">
                        <ImNewspaper size={26} />
                        <span className="item-name lg:block hidden ml-2 w-[140px] whitespace-nowrap text-ellipsis overflow-hidden">
                          {list.type}
                        </span>
                      </JumpLink>
                    </li>
                  )
                })}
              </ul>
            </SimpleBar>
          </div>
        </div>
        {/* sidebar-bottom */}
        <div className="py-3 bg-sky-500/10">
          <ul>
            <li className="flex justify-center items-center">
              <Link
                href="/about"
                className="flex items-center hover:no-underline">
                <ImInfo size={24} />
                <span className="logo-detail lg:block hidden leading-[30px] ml-2">关于本站</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
