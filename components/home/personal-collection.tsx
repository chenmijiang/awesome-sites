'use client';

import Icon from '@/assets/icons/icon';
import Collection from './collection-sites';
import CollectionSites from './collection-sites';
import { LocalForageProvider } from 'rc-localforage';
import { favoriteDataTable } from '@/constant/database';

const SitesDatas = [
  {
    icon: 'api_doc',
    name: '接口文档',
  },
  {
    icon: 'about_site',
    name: '关于本站',
  },
];

const PersonalCollection = () => {
  return (
    <div className="flex h-[100px] py-[10px]">
      {/* 收藏站点 */}
      <LocalForageProvider config={favoriteDataTable}>
        <CollectionSites />
      </LocalForageProvider>
      {/*   分界线 */}
      <div className="w-[2px] h-full bg-box-active mx-3"></div>
      {/* 本站说明 */}
      <div className="bg-box rounded-box-normal px-4 py-3">
        {SitesDatas.map((item, index) => {
          return (
            <div
              className="flex mb-3 last:mb-0 cursor-pointer"
              key={index}>
              <Icon
                name={item.icon}
                className="icon fill-default"
              />
              <span className="ml-3 text-default">{item.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PersonalCollection;
