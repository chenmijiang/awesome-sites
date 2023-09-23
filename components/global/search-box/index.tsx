import { useMemo, useRef } from 'react';
import { useKeyPress } from 'ahooks';
import { useLocalForage } from 'rc-localforage';

import SearchEngine from './search-engine';
import SearchInput from './search-input';
import SearchHint from './search-hint';
import { engines } from '@/constant';
import { SearchInputRefProps } from '@/types';
import useSearchFocus from '@/hooks/use-search-focus';

const SearchBox = () => {
  const {
    value: currentEngineIndex,
    set: setCurrentEngineIndex,
    loading,
  } = useLocalForage('currentEngineIndex', {
    defaultValue: 0,
  });

  const searchBoxRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<SearchInputRefProps>(null);
  // 搜索盒子内聚焦，之外失去焦点
  const { isFocused } = useSearchFocus(searchBoxRef, searchInputRef);
  // 搜索历史
  const {
    value: history,
    set: setSearchHistory,
    remove: clearHistory,
  } = useLocalForage<any[]>('searchHistory', {
    defaultValue: [],
  });
  const searchHistory = useMemo(() => {
    return history ?? [];
  }, [history]);
  // 提交搜索
  const submitSearch = (value: string | undefined) => {
    if (isFocused && value && value !== '') {
      const index = searchHistory.indexOf(value) as number;
      const historys = searchHistory.slice() as any[];
      if (index !== -1) {
        historys.splice(index, 1);
      }
      historys.unshift(value);
      setSearchHistory(historys.slice(0, 15));
      // 清除搜索框
      searchInputRef.current?.clear();
      // 跳转搜索
      const baseUrl = engines[currentEngineIndex ?? 0].url;
      let searchURL = baseUrl + value;
      window.open(searchURL, '_blank');
    }
  };
  // 搜索事件
  useKeyPress('enter', () => {
    submitSearch(searchInputRef.current?.value);
  });
  // 引擎切换
  useKeyPress('Tab', (event: any) => {
    event.preventDefault();
    setCurrentEngineIndex(((currentEngineIndex ?? 0) + 1) % engines.length);
  });

  return (
    <div
      className="w-[700px] mt-0 mx-auto relative"
      ref={searchBoxRef}>
      <div className={`search-box ${isFocused ? 'opacity-100' : 'opacity-70'}`}>
        <SearchEngine
          loading={loading}
          value={currentEngineIndex}
        />
        <SearchInput
          ref={searchInputRef}
          focus={isFocused}
        />
      </div>
      {isFocused && (
        <SearchHint
          searchRef={searchInputRef}
          history={searchHistory}
          clearHistory={clearHistory}
          submitSearch={submitSearch}
        />
      )}
    </div>
  );
};

export default SearchBox;
