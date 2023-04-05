import Link from 'next/link'

import { allSites } from '@/configs/sites'
import { ImNewspaper } from 'react-icons/im'

const Sidebar = () => {
  return (
    <div
      id="sidebar"
      className="md:w-[100px] w-0 fixed top-0 left-0 h-full overflow-auto">
      <div className="modal-dialog h-full sidebar-nav-inner flex flex-col">
        {/* sidebar-logo */}
        <div className="sidebar-logo bg-sky-500/10">
          <div className="logo overflow-hidden">
            <h1 className="text-hide position-absolute text-2xl leading-[60px]">前端森林</h1>
            <a
              href="#"
              className="logo-expanded">
              {/* <Image
                src="https://www.tboxn.com/wp-content/uploads/2022/01/英文字母设计感logo-7.png"
                height="40"
                className="logo-light"
                alt="前端森林"
              /> */}
            </a>
            <a
              href="https://www.tboxn.com"
              className="logo-collapsed">
              {/* <Image
                src="https://tboxn.com/wp-content/uploads/2022/03/cropped-tboxlogo512.png"
                height="40"
                className="logo-light"
                alt="前端森林"
              /> */}
            </a>
          </div>
        </div>
        {/* sidebar-memu */}
        <div className="sidebar-menu flex-1">
          <div className="sidebar-scroll">
            <div className="sidebar-menu-inner">
              <ul>
                <li className="sidebar-item leading-10 ml-3">
                  <a
                    href="#热门站点"
                    className="smooth flex items-center gap-1">
                    <ImNewspaper size={32} />
                    <span className="item-name lg:block hidden">热门站点</span>
                  </a>
                </li>
                {allSites.map((list, index) => {
                  return (
                    <li
                      className="sidebar-item leading-10 ml-3"
                      key={index}>
                      <a
                        href={`#${list.type}`}
                        className="smooth flex items-center gap-1">
                        <ImNewspaper size={32} />
                        <span className="item-name lg:block hidden">{list.type}</span>
                      </a>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
        {/* sidebar-bottom */}
        <div className="py-3 bg-sky-500/10">
          <ul>
            <li className="text-center">
              <Link href="/about">
                <span>关于我</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
