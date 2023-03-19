import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'

const Sidebar = () => {
  return (
    <SidebarNav
      id="sidebar"
      className="sticky fade">
      <div className="modal-dialog h-100 sidebar-nav-inner">
        {/* sidebar-logo */}
        <div className="sidebar-logo border-bottom border-color">
          <div className="logo overflow-hidden">
            <h1 className="text-hide position-absolute">前端森林</h1>
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
        <div className="sidebar-menu flex-fill">
          <div className="sidebar-scroll">
            <div className="sidebar-menu-inner">
              <ul>
                <li className="sidebar-item">
                  <a
                    href="#term-3"
                    className="smooth">
                    <i className="fab fa-hotjar icon-fw icon-lg"></i> <span>热门工具</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    href="#term-15"
                    className="smooth">
                    <i className="fab fa-telegram-plane icon-fw icon-lg"></i> <span>实用工具</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    href="#term-4"
                    className="smooth">
                    <i className="fas fa-music icon-fw icon-lg"></i> <span>影音专区</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    href="#term-6"
                    className="smooth">
                    <i className="fas fa-coffee icon-fw icon-lg"></i> <span>在线办公</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    href="#term-12"
                    className="smooth">
                    <i className="fas fa-images icon-fw icon-lg"></i> <span>图片处理</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    href="#term-11"
                    className="smooth">
                    <i className="fab fa-windows icon-fw icon-lg"></i> <span>必备软件</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    href="#term-80"
                    className="smooth">
                    <i className="fas fa-book-reader icon-fw icon-lg"></i> <span>好好学习</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    href="#term-7"
                    className="smooth"
                    data-change="#term-7">
                    <i className="fas fa-file-archive icon-fw icon-lg"></i> <span>资源站点</span>
                  </a>
                  <i className="iconfont icon-arrow-r-m sidebar-more text-sm"></i>
                  <ul style={{ display: 'none' }}>
                    <li>
                      <a
                        href="#term-7-187"
                        className="smooth">
                        <span>软件下载</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#term-7-360"
                        className="smooth">
                        <span>系统镜像</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#term-7-191"
                        className="smooth">
                        <span>图片资源</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#term-7-188"
                        className="smooth">
                        <span>模板资源</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#term-7-331"
                        className="smooth">
                        <span>音视素材</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#term-7-189"
                        className="smooth">
                        <span>游戏资源</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#term-7-190"
                        className="smooth">
                        <span>综合资源</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="sidebar-item">
                  <a
                    href="#term-5"
                    className="smooth">
                    <i className="fab fa-chrome icon-fw icon-lg"></i> <span>问答搜索</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    href="#term-8"
                    className="smooth">
                    <i className="fas fa-grin-tears icon-fw icon-lg"></i> <span>生活频道</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    href="#term-13"
                    className="smooth">
                    <i className="fas fa-bug icon-fw icon-lg"></i> <span>编程开发</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    href="#term-14"
                    className="smooth">
                    <i className="fas fa-blog icon-fw icon-lg"></i> <span>博客论坛</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    href="#term-9"
                    className="smooth">
                    <i className="fas fa-gamepad icon-fw icon-lg"></i> <span>休闲娱乐</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* sidebar-bottom */}
        <div className="border-top py-2 border-color">
          <div className="flex-bottom">
            <ul>
              <li
                id="menu-item-123"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-123 sidebar-item">
                <Link href="/about">
                  <i className="fas fa-info icon-fw icon-lg"></i> <span>关于我</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </SidebarNav>
  )
}

const SidebarNav = styled.div`
  width: 220px;
  @media screen and (min-width: 768px) {
    
  }
`

export default Sidebar
