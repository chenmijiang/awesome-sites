import Link from 'next/link'
import { Link as AnchorLink } from 'react-scroll'

import { allSites } from '@/configs/sites'
import { Icon } from '@iconify-icon/react'

import SimpleBar from 'simplebar-react'
import 'simplebar-react/dist/simplebar.min.css'

const Sidebar = () => {
  return (
    <div
      id="sidebar"
      className="md:w-[60px] w-0 fixed top-0 left-0 h-full overflow-auto z-20">
      <div className="modal-dialog h-full sidebar-nav-inner flex flex-col bg-white">
        {/* sidebar-logo */}
        <div className="sidebar-logo border-b border-solid border-gray-300">
          <div className="logo overflow-hidden flex justify-center items-center">
            <Link
              href="/"
              className="flex items-center hover:no-underline h-[50px] text-[#52be82]">
              <Icon
                icon="ic:round-forest"
                width={24}
                height={24}
              />
              <h1 className="logo-detail lg:block hidden text-xl leading-[50px] ml-2 font-bold">
                前端森林
              </h1>
            </Link>
          </div>
        </div>
        {/* sidebar-memu */}
        <div className="sidebar-menu flex-1">
          <div className="sidebar-scroll h-full">
            <SimpleBar style={{ height: 'calc(100vh - 120px)', outline: 'none' }}>
              <ul>
                <li className="sidebar-item leading-10 ml-3 my-3">
                  <AnchorLink
                    to="热门站点"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-500}
                    duration={500}
                    className="flex items-center hover:no-underline h-[30px] cursor-pointer">
                    <Icon
                      icon="solar:fire-bold"
                      width={26}
                      height={26}
                    />
                    <span className="item-name lg:block hidden ml-2 text-cus-unactivated text-ellipsis whitespace-nowrap overflow-hidden">
                      热门站点
                    </span>
                  </AnchorLink>
                </li>
                {allSites.map((list, index) => {
                  return (
                    <li
                      className="sidebar-item leading-10 ml-3 my-2"
                      title={list.type}
                      key={index}>
                      <AnchorLink
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        to={list.type}
                        className="flex items-center hover:no-underline h-[30px] cursor-pointer">
                        {list.icon !== null ? (
                          list.icon
                        ) : (
                          <Icon
                            icon="fluent:tree-deciduous-20-filled"
                            width={26}
                            height={26}
                          />
                        )}
                        <span className="item-name lg:block hidden ml-2 w-[140px] text-cus-unactivated whitespace-nowrap text-ellipsis overflow-hidden">
                          {list.type}
                        </span>
                      </AnchorLink>
                    </li>
                  )
                })}
              </ul>
            </SimpleBar>
          </div>
        </div>
        {/* sidebar-bottom */}
        <div className="py-2">
          <ul>
            <li className="flex justify-center items-center">
              <Link
                href="/about"
                className="flex items-center hover:no-underline">
                <Icon
                  icon="mdi:information"
                  width={24}
                  height={24}
                />
                <span className="logo-detail lg:block hidden leading-7 ml-2 whitespace-nowrap text-ellipsis overflow-hidden">
                  关于本站
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
