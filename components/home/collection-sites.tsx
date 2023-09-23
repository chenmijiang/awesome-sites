import Icon from '@/assets/icons/icon';
import Alink from '../common/alink';
import { useLocalForage } from 'rc-localforage';

type favoriteSiteType = {
  name: string;
  url: string;
};

const CollectionSites = () => {
  const { value, set, loading } = useLocalForage<favoriteSiteType[]>('favoriteSites', {
    defaultValue: [],
  });
  const favoriteSites = value ?? [];
  return (
    <div className="w-full flex-1 rounded-box-normal flex overflow-x-auto">
      <div className="flex justify-center items-center px-6 w-[80px] rounded-box-normal bg-box mr-3 text-default text-base cursor-pointer">
        个人收藏
      </div>
      {/* 个人收藏标签集 */}
      {(favoriteSites ?? []).length > 0 ? (
        <div className="flex flex-1 flex-wrap content-between">
          {favoriteSites.map((item, index) => (
            <Alink
              href={item.url}
              className="flex items-center h-9 mr-1 rounded-box-normal bg-box px-[10px] py-[6px] text-default cursor-pointer"
              key={index}>
              <Icon
                name="favorite"
                className="icon mr-1 fill-default"
              />
              {item.name}
            </Alink>
          ))}
        </div>
      ) : (
        <div className="flex-1 flex justify-center items-center">
          {loading ? (
            <div className="w-full h-full rounded-box-normal bg-box animate-pulse"></div>
          ) : (
            <div className="text-default text-base">快来挑选喜欢的网站吧～</div>
          )}
        </div>
      )}
    </div>
  );
};

export default CollectionSites;
