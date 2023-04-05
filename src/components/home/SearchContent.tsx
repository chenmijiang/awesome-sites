import Image from 'next/image'

type Props = {
  url: string
}

const SearchContent = ({ url }: Props) => {
  return (
    <div className="h-[300px] overflow-hidden bg-center bg-cover rounded-lg my-8 mt-16">
      <Image
        src={url}
        alt={''}
        width={1920}
        height={300}
        onError={(e: any) => {
          // 加载 url 失败，设置鱼骨图
          e.target.classList.add('bg-gray-300')
          e.target.width = 1920
          e.target.height = 400
        }}
      />
      {/* 背景图片和搜索框 */}
      <div className="header">
        <div className="header-detail"></div>
      </div>
      {/* 输入框 */}
      <div className="content">
        <div className="input">
          <input
            type="text"
            placeholder="请输入搜索内容"
            id="input-content"
          />
          <div className="sugBox">
            <ul className="sugs"></ul>
          </div>
        </div>
        <button id="search">搜索</button>
      </div>
    </div>
  )
}

export default SearchContent
