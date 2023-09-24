import '@/assets/globals.scss';
import PersonalCollection from '@/components/home/personal-collection';

export default function Home() {
  return (
    <div className="home-page bg-transparent bg-favorite-shadow">
      <div className="max-w-6xl min-h-full mx-auto flex flex-col justify-end">
        {/* 个人收藏 */}
        <PersonalCollection />
        {/* TODO: section card 分类 */}
      </div>
    </div>
  );
}
