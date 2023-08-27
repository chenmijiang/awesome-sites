import Image from 'next/image';

import Alink from '@/components/common/alink';
import logo from '@/assets/image/logo.png';
import Icon from '@/assets/icons/icon';
import SearchBox from './search-box';

export default function NavBanner() {
  return (
    <>
      <div className="h-[160px]"></div>
      <div className="w-full h-[100px] fixed top-0 left-0 z-[5] bg-banner-shadow"></div>
      <div className="w-full h-[64px] fixed top-0 left-0 z-10 px-5 flex items-center justify-between">
        <div className="flex gap-5 text-white">
          <Image
            src={logo}
            alt="logo"
            width={100}
            className="object-contain"
          />
          <Alink href="/">首页</Alink>
          <Alink href="https://www.momoyu.cc">热榜</Alink>
        </div>
        <SearchBox />
        <div className="flex gap-5">
          {/* TODO: 设置开关 */}
          <div className="cursor-pointer">
            <Icon
              name="setting"
              className="icon icon-setting"
            />
          </div>
          <Alink href="https://github.com/chenmijiang/awesome-sites">
            <Icon
              name="github"
              className="icon"
            />
          </Alink>
        </div>
      </div>
    </>
  );
}
