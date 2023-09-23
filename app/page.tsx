import '@/assets/globals.scss';
import PersonalCollection from '@/components/home/personal-collection';

export default function Home() {
  return (
    <div className="home-page">
      <div className="max-w-6xl min-h-full mx-auto flex flex-col">
        {/* 个人收藏 */}
        <PersonalCollection />
        {/* TODO: section card 分类 */}
      </div>
    </div>
  );
}
