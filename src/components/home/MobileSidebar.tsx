import { Icon } from '@iconify-icon/react'

import MixedLink from '@/components/MixedLink'
import ScrollPanel from '@/components/ui/ScrollPanel'
import { SideBarSite } from '@/types'
import { sortSitesByLevel } from '@/util/sites.util'

type Props = {
  sites: SideBarSite[]
}

const MobileSidebar = (props: Props) => {
  let sortSites = sortSitesByLevel(props.sites)

  return (
    <div
      id="m-sidebar"
      className="w-0 fixed top-0 left-0 h-full overflow-auto z-10 transition-width">
      <div className="modal-dialog h-full sidebar-nav-inner flex flex-col bg-white">
        {/* sidebar-logo */}
        <div className="sidebar-logo border-b border-solid border-gray-300 h-[50px]"></div>
        {/* sidebar-memu */}
        <div className="sidebar-menu flex-1">
          <ScrollPanel
            className="sidebar-scroll h-full"
            style={{ height: 'calc(100vh - 150px)', outline: 'none' }}>
            <ul>
              {sortSites.map((list, index) => {
                return (
                  <li
                    className="sidebar-item leading-10 ml-4 my-2"
                    title={list.type}
                    key={index}>
                    <MixedLink
                      anchor={list.anchor !== false}
                      activeClass="active"
                      spy={true}
                      smooth={true}
                      offset={index === 0 ? -500 : -70}
                      duration={500}
                      to={list.anchor !== false ? list.type : list.link || '/'}
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
                      <span className="item-name ml-2 w-[140px] text-cus-unactivated whitespace-nowrap text-ellipsis overflow-hidden">
                        {list.type}
                      </span>
                    </MixedLink>
                  </li>
                )
              })}
            </ul>
          </ScrollPanel>
        </div>
        {/* sidebar-bottom */}
        <div className="py-2">
          <ul>
            <li className="flex justify-center items-center my-2">
              <MixedLink
                to="/doc"
                anchor={false}
                className="flex items-center justify-center hover:no-underline w-full">
                <Icon
                  icon="gg:readme"
                  width={24}
                  height={24}
                />
                <span className="logo-detail leading-7 ml-2 whitespace-nowrap text-ellipsis overflow-hidden">
                  接口文档
                </span>
              </MixedLink>
            </li>
            <li className="flex justify-center items-center my-2">
              <MixedLink
                to="/about"
                anchor={false}
                className="flex items-center justify-center hover:no-underline w-full">
                <Icon
                  icon="mdi:information"
                  width={24}
                  height={24}
                />
                <span className="logo-detail leading-7 ml-2 whitespace-nowrap text-ellipsis overflow-hidden">
                  关于本站
                </span>
              </MixedLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default MobileSidebar
