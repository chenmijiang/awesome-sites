'use client';

import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useKeyPress, useLocalStorageState } from 'ahooks';

import SearchEngine from './search-engine';
import SearchInput from './search-input';
import SearchHint from './search-hint';

import { SearchSetterProvider, SearchValueProvider } from './context';
import { engines } from '@/constant';
import { SearchInputRefProps } from '@/types';
import useSearchFocus from '@/hooks/use-search-focus';

const SearchBox = () => {
  const [currentEngineIndex, setCurrentEngineIndex] = useState(0);

  const searchBoxRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<SearchInputRefProps>(null);

  // 搜索盒子内聚焦，之外失去焦点
  const { isFocused } = useSearchFocus(searchBoxRef, searchInputRef);

  // 搜索事件
  useKeyPress('enter', () => {
    const value = searchInputRef.current?.value;
    if (isFocused && value && value !== '') {
      const baseUrl = engines[currentEngineIndex ?? 0].url;
      let searchURL = baseUrl + value;
      window.open(searchURL, '_blank');
    }
  });

  // 引擎切换
  useKeyPress('Tab', (event: any) => {
    event.preventDefault();
    setCurrentEngineIndex(((currentEngineIndex ?? 0) + 1) % engines.length);
  });

  return (
    <SearchValueProvider
      value={{
        currentEngineIndex: currentEngineIndex ?? 0,
      }}>
      <SearchSetterProvider
        value={{
          setCurrentEngineIndex,
        }}>
        <div
          className="w-[700px] mt-0 mx-auto relative"
          ref={searchBoxRef}>
          <div className={`search-box ${isFocused ? 'opacity-100' : 'opacity-70'}`}>
            <SearchEngine
              currentEngineIndex={currentEngineIndex ?? 0}
              engines={engines}
            />
            <SearchInput
              ref={searchInputRef}
              focus={isFocused}
            />
          </div>
          {isFocused && <SearchHint />}
        </div>
      </SearchSetterProvider>
    </SearchValueProvider>
  );
};

export default SearchBox;
