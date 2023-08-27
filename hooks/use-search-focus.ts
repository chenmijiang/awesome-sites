import { RefObject, useState } from 'react';

import { SearchInputRefProps } from '@/types';
import { useClickAway, useEventListener } from 'ahooks';

interface OptionsProps {
  containerClick?: (e?: any) => void;
  containerOuterClick?: (e?: any) => void;
}

const useSearchFocus = (
  container: RefObject<HTMLDivElement>,
  input: RefObject<SearchInputRefProps>,
  options?: OptionsProps
) => {
  const { containerClick, containerOuterClick } = options || {};
  const [isFocused, setIsFocused] = useState(false);

  useEventListener(
    'click',
    () => {
      input.current?.focus();
      setIsFocused(true);
      containerClick?.(true);
    },
    { target: container }
  );

  useClickAway(() => {
    input.current?.blur();
    setIsFocused(false);
    containerOuterClick?.(false);
  }, container);

  return {
    isFocused,
  };
};

export default useSearchFocus;
