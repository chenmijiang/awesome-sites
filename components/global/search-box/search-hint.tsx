import Icon from '@/assets/icons/icon';
import { SearchInputRefProps } from '@/types';
import { RefObject, memo } from 'react';

interface SearchHintProps {
  searchRef: RefObject<SearchInputRefProps>;
  history: any[];
  clearHistory: any;
  loading?: boolean;
  submitSearch: (value: string | undefined) => void;
}

const SearchHint = ({ history, clearHistory, searchRef, submitSearch }: SearchHintProps) => {
  return (
    <div
      className="absolute bg-white w-full shadow-xl py-3 px-2 -translate-y-4 rounded-box-normal
  -z-[1]">
      {/* 搜索历史 */}
      <section className={`${history.length > 0 ? 'block' : 'hidden'}`}>
        <div className="flex justify-between">
          <div className="text-section-default text-sm py-[6px]">搜索历史</div>
          <Icon
            name="clash"
            className="pointer-events-auto w-5 h-7 cursor-pointer fill-default hover:fill-active"
            onClick={clearHistory}
          />
        </div>
        <div className="flex justify-start flex-wrap">
          {history.map((text) => (
            <div
              key={text}
              className="text-xs text-default bg-box px-[6px] py-[2px] mr-[6px] mb-1 rounded cursor-pointer"
              onClick={() => submitSearch(text)}>
              {text}
            </div>
          ))}
        </div>
      </section>
      {/* 站内热搜 */}
      <section>
        <div className="text-section-default text-sm py-[6px]">站内热搜</div>
        {/* 结果 */}
        <div className="flex justify-center">
          <div className="text-default text-xs">暂无站内热搜</div>
        </div>
      </section>
    </div>
  );
};

export default SearchHint;
