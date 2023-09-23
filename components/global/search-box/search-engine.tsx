import Icon from '@/assets/icons/icon';

import { engines } from '@/constant';
import { memo } from 'react';

interface SearchEngineProps {
  loading?: boolean;
  value: number | undefined;
}

const SearchEngine = ({ loading, value }: SearchEngineProps) => {
  return (
    <div className="w-[40px]">
      {loading ? (
        <div className="animate-pulse w-8 h-8 mt-0 mx-auto bg-box-active rounded-lg"></div>
      ) : (
        <Icon
          name={engines[value ?? 0].name}
          className="icon fill-default mt-0 mx-auto"
        />
      )}
    </div>
  );
};

export default memo(SearchEngine);
