import Link from "next/link";

import { Icon } from "@iconify-icon/react";

type Props = {
  isToggleShow: () => void;
  isToggleMShow: () => void;
  show: boolean;
};

const Header = (props: Props) => {
  const handleThemeChange = () => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    } else {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    }
  };

  return (
    <div className="main-head fixed w-full top-0 left-0 md:pl-[60px] pl-0 z-10 transition-width">
      <div className="head-bg w-full h-[50px] backdrop-blur transition-colors duration-500 bg-white/70 supports-backdrop-blur:bg-white/60">
        <div className="px-4 h-full navbar flex items-center justify-between">
          <div className="container-fluid flex">
            <div className="py-2 mr-8 md:block hidden">
              <span
                className="cursor-pointer h-full flex items-center"
                onClick={props.isToggleShow}
              >
                <Icon
                  icon={`material-symbols:left-panel-${props.show ? "close" : "open"}-rounded`}
                  width={28}
                  height={28}
                />
              </span>
            </div>
            {/* 移动端侧边栏开关按钮 */}
            <div className="header-mini-btn py-2 mr-4 md:hidden block">
              <span
                className="cursor-pointer h-full flex items-center"
                onClick={props.isToggleMShow}
              >
                <Icon icon="charm:menu-hamburger" width={28} height={28} />
              </span>
            </div>
            {/* 跳转链接：首页、tools */}
            <ul className="navbar-nav navbar-top site-menu flex">
              <li
                id="menu-item-28"
                className="h-full flex justify-center items-center mr-4"
              >
                <Link
                  href="/"
                  className="flex items-center hover:no-underline transition-colors"
                >
                  <Icon icon="mdi:laptop" width={24} height={24} />
                  <span className="ml-1 text-lg md:inline hidden">首页</span>
                </Link>
              </li>
              <li
                id="menu-item-28"
                className="h-full flex justify-center items-center mr-4"
              >
                <Link
                  href="/toolbox"
                  className="flex items-center hover:no-underline transition-color"
                >
                  <Icon icon="mingcute:tool-line" width={24} height={24} />
                  <span className="ml-1 text-lg md:inline hidden">工具箱</span>
                </Link>
              </li>
            </ul>
          </div>
          <ul className="nav navbar-menu text-xs order-1 order-md-2 position-relative flex">
            {/* 主题切换 */}
            <li className="nav-login ml-3">
              <label
                htmlFor="theme_toggle"
                className="flex relative transition-all cursor-pointer pt-[1px]"
              >
                <input
                  type="checkbox"
                  id="theme_toggle"
                  className="absolute w-0 h-0 opacity-0"
                  onChange={handleThemeChange}
                />
                <Icon
                  icon="fluent:dark-theme-20-filled"
                  width={26}
                  height={26}
                  className="dark:rotate-180 transition-transform duration-300"
                />
              </label>
            </li>
            {/* 项目地址 */}
            <li className="nav-login ml-3">
              <a
                className="w-full h-full flex justify-center items-center"
                href="https://github.com/chenmijiang/awesome-sites"
                target="_blank"
              >
                <Icon icon="logos:github-icon" width={26} height={26} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
