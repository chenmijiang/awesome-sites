import Image from 'next/image';

import Alink from './alink';
import logo from '@/assets/image/logo.png';
import setting from '@/assets/image/setting.png';
import github from '@/assets/image/github.png';

export default function NavBanner() {
  return (
    <>
      <div className="h-[160px]"></div>
      <div className="w-full h-[100px] fixed top-0 left-0 z-[5] bg-banner-shadow"></div>
      <div className="w-full h-[50px] fixed top-0 left-0 z-10 px-5 flex items-center justify-between">
        <div className="flex gap-5 text-white">
          <Image
            src={logo}
            alt="logo"
            width={100}
            className="object-contain"
          />
          <Alink href="/">首页</Alink>
          <Alink href="https://www.momoyu.cc">热门</Alink>
        </div>
        <div className="flex gap-5">
          {/* TODO: 设置开关 */}
          <div className="cursor-pointer">
            <Image
              src={setting}
              alt="setting"
              width={24}
              height={24}
            />
          </div>
          <Alink href="https://github.com/chenmijiang/awesome-sites">
            <Image
              src={github}
              alt="github"
              width={24}
              height={24}
            />
          </Alink>
        </div>
      </div>
    </>
  );
}
