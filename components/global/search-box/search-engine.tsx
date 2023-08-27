import Icon from '@/assets/icons/icon';

interface SearchEngineProps {
  currentEngineIndex: number;
  engines: any[];
}

const SearchEngine = ({ currentEngineIndex, engines }: SearchEngineProps) => {
  return (
    <div className="w-[40px]">
      <Icon
        name={engines[currentEngineIndex].name}
        className="icon fill-default mt-0 mx-auto"
      />
    </div>
  );
};

export default SearchEngine;
