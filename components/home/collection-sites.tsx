import Icon from '@/assets/icons/icon';
import Alink from '../common/alink';
import { useLocalForage } from 'rc-localforage';
import { useRef, useState } from 'react';

type favoriteSiteType = {
  name: string;
  url: string;
};

const CollectionSites = () => {
  const { value, set, loading } = useLocalForage<favoriteSiteType[]>('favoriteSites', {
    defaultValue: [],
  });
  const favoriteSites = value ?? [];
  const [open, setOpen] = useState(false);
  const siteNameRef = useRef<HTMLInputElement>(null);
  const siteUrlRef = useRef<HTMLInputElement>(null);

  const handleAddSite = () => {
    const name = siteNameRef.current?.value;
    const url = siteUrlRef.current?.value;
    if (!name || !url) return;
    const newSite = { name, url };
    const index = favoriteSites.findIndex((item) => item.name === name);
    if (index > -1) {
      favoriteSites.splice(index, 1);
    }
    favoriteSites.unshift(newSite);
    set(favoriteSites.slice(0, 10));
    // 收尾
    siteNameRef.current!.value = '';
    siteUrlRef.current!.value = '';
    setOpen(false);
  };

  return (
    <>
      <div className="w-full flex-1 rounded-box-normal flex">
        <div
          className="flex justify-center items-center px-6 w-[80px] rounded-box-normal bg-box mr-3 text-section-default text-base cursor-pointer opacity-40"
          onClick={() => setOpen(true)}>
          个人收藏
        </div>
        {/* 个人收藏标签集 */}
        {(favoriteSites ?? []).length > 0 ? (
          <div className="flex flex-1 flex-wrap content-between">
            {favoriteSites.map((item, index) => (
              <Alink
                href={item.url}
                className="group relative flex items-center h-9 mr-1 rounded-box-normal bg-box px-[10px] py-[6px] text-section-default cursor-pointer opacity-40"
                key={index}>
                {/* 删除icon */}
                <Icon
                  name="close"
                  className="invisible group-hover:visible icon fill-default absolute -top-[2px] -right-[2px] cursor-pointer w-[14px] h-[14px]"
                  onClick={(e: any) => {
                    e.preventDefault();
                    e.stopPropagation();
                    favoriteSites.splice(index, 1);
                    set(favoriteSites);
                  }}
                />
                <Icon
                  name="favorite"
                  className="icon mr-1 fill-section-default"
                />
                <span
                  className="inline-block max-w-[80px] text-ellipsis whitespace-nowrap overflow-hidden"
                  title={item.name}>
                  {item.name}
                </span>
              </Alink>
            ))}
          </div>
        ) : (
          <div className="flex-1 flex justify-center items-center">
            {loading ? (
              <div className="w-full h-full rounded-box-normal bg-box animate-pulse"></div>
            ) : (
              <div className="text-default text-base">快来收藏喜欢的网站吧～</div>
            )}
          </div>
        )}
      </div>
      {/* 上传表单 */}
      {open && (
        <div className="absolute top-[32%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] rounded-box-normal bg-box shadow-lg px-3 pt-6 text-section-default opacity-90">
          <Icon
            name="close"
            className="icon fill-default absolute -top-1 -right-1 cursor-pointer"
            onClick={() => setOpen(false)}
          />
          <div className="flex my-4 items-center">
            <label htmlFor="name">网站名称</label>
            <input
              ref={siteNameRef}
              className="flex-1 ml-3 rounded-box-small px-2 py-1 text-default focus:outline-none focus:text-section-default"
              placeholder="请输入网站名称"
              type="text"
              id="name"
            />
          </div>
          <div className="flex my-4 items-center">
            <label htmlFor="url">网站地址</label>
            <input
              ref={siteUrlRef}
              className="flex-1 ml-3 rounded-box-small px-2 py-1 text-default focus:outline-none focus:text-section-default"
              placeholder="请输入网站地址"
              type="text"
              id="url"
            />
          </div>
          <div className="flex my-4 items-center justify-end">
            <button
              className="px-2 py-1 rounded-box-small bg-logo text-white text-sm"
              onClick={handleAddSite}>
              收藏
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default CollectionSites;
