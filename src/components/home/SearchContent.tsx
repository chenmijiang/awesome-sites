import Image from 'next/image'

import { IoSearch } from 'react-icons/io5'

import { useRef } from 'react'

type Props = {
  url: string
}

const SearchContent = ({ url }: Props) => {
  const searchRef = useRef<HTMLInputElement>(null)
  const searchEvent = () => {
    let word = searchRef.current?.value.trim().replace(' ', '+')
    if (word) {
      let baseURL = 'https://cn.bing.com/search?q='
      let searchURL = baseURL + word
      // 打开新窗口
      window.open(searchURL, '_blank')
    }
  }
  return (
    <div className="h-[300px] overflow-hidden rounded-lg bg-center bg-cover mt-[80px] mb-6 relative">
      <Image
        src={url}
        alt={''}
        fill={true}
        className="object-cover"
        onError={(e: any) => {
          // 加载 url 失败，设置鱼骨图
          e.target.classList.add('bg-gray-300')
          e.target.width = 1920
          e.target.height = 400
        }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {/* 输入框 */}
        <div className="searchbox md:w-[670px] w-10/12 h-[46px] flex rounded-3xl transition relative px-4 box-border overflow-hidden bg-zinc-200/90 text-gray-800">
          {/* 搜索框 */}
          <input
            ref={searchRef}
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                searchEvent()
              }
            }}
            className="search_input flex-1 focus:outline-none bg-transparent text-inherit"
            type="text"
            placeholder="bing搜搜~~sousuo~~"
          />
          {/* 搜索图标 */}
          <div
            className="search_btn flex items-center cursor-pointer"
            onClick={searchEvent}>
            <IoSearch size={26} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchContent
