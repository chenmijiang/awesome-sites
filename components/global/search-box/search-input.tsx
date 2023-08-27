import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';

import { SearchInputRefProps } from '@/types';
import Icon from '@/assets/icons/icon';
import { useUpdate } from 'ahooks';

interface SearchInputProps {
  focus: boolean;
}

const SearchInput: React.ForwardRefRenderFunction<SearchInputRefProps, SearchInputProps> = (
  { focus: isFocused },
  ref
) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const update = useUpdate();

  const focus = () => {
    inputRef?.current?.focus();
  };
  const blur = () => {
    inputRef?.current?.blur();
  };
  const clear = () => {
    if (inputRef?.current) {
      inputRef.current.value = '';
    }
  };

  useImperativeHandle(ref, () => {
    return {
      focus,
      blur,
      clear,
      value: inputRef?.current?.value,
    };
  });

  return (
    <div className="flex-1 h-full py-1 pr-1 relative">
      <input
        className={`search-input ${
          isFocused ? 'text-active opacity-80 bg-box-active' : 'text-default'
        }`}
        maxLength={1000}
        placeholder="输入关键词搜索 | tab键切换引擎"
        onChange={update}
        onBlur={(e) => e.preventDefault}
        onFocus={(e) => e.preventDefault}
        ref={inputRef}
      />
      <div className="absolute top-0 right-0 w-[40px] h-[40px] flex justify-center items-center">
        <Icon
          name="close"
          className={`icon w-[18px] h-[18px] fill-default cursor-pointer ${
            (inputRef.current?.value.length ?? 0) > 0 ? 'visible' : 'invisible'
          }`}
          onClick={() => {
            clear();
            update();
          }}
        />
      </div>
    </div>
  );
};

export default forwardRef(SearchInput);
