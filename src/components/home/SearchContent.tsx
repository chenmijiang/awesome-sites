import Image from 'next/image'

type Props = {
  url: string
}

const SearchContent = ({ url }: Props) => {
  return (
    // overflow: hidden;
    // background-position: center;
    // border-radius: 10px;
    // margin: 30px 0;
    <div className="h-[300px] overflow-hidden bg-center bg-cover rounded-lg my-8">
      <Image
        src={url}
        alt={''}
        width={1920}
        height={1080}
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
