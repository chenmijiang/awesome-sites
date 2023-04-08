import Image from 'next/image'

import { IoSearch } from 'react-icons/io5'

import { useEffect, useRef, useState } from 'react'

import {
  getAllSearchEngines,
  saveAllSearchEngines,
  searchEngines as ses
} from '@/configs/searchEngines'
import { filterSearchWord } from '@/util/filter-search'
import styled from 'styled-components'

type Props = {
  url: string
}

const SearchContent = ({ url }: Props) => {
  const searchRef = useRef<HTMLInputElement>(null)
  const [focusActive, setfocusActive] = useState(false)
  const [searchEngines, setSearchEngines] = useState(ses)
  useEffect(() => {
    setSearchEngines(getAllSearchEngines())
  }, [])
  const searchEvent = () => {
    let word = filterSearchWord(searchRef.current?.value || '')
    if (word) {
      const baseUrl = searchEngines.engines[searchEngines.currentEngine].url
      let searchURL = baseUrl + word
      // 打开新窗口
      window.open(searchURL, '_blank')
    }
  }
  return (
    <div
      className="h-[300px] overflow-hidden rounded-lg bg-center bg-cover mt-[80px] mb-6 relative"
      onMouseLeave={() => {
        setfocusActive((pre) => false)
        searchRef.current?.blur()
      }}
      onClick={() => {
        setfocusActive((pre) => false)
      }}>
      <Image
        src={url}
        alt={''}
        fill={true}
        className={`object-cover transition${focusActive ? ' blur scale-110' : ''}`}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {/* 输入框 */}
        <div
          className={`searchbox${
            focusActive
              ? ' bg-zinc-200 md:w-[670px] text-cus-normal'
              : ' bg-zinc-200/50 md:w-[470px] text-zinc-200/50 md:hover:w-[670px]'
          } w-[80vw] h-[46px] transition-all delay-75 relative px-4 box-border  rounded-3xl`}
          onClick={(e) => e.stopPropagation()}>
          {/* 搜索框 */}
          <SearchInput
            ref={searchRef}
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                searchEvent()
              }
            }}
            onClick={() => {
              setfocusActive(true)
            }}
            maxLength={150}
            type="text"
            placeholder={searchEngines.engines[searchEngines.currentEngine].hint}
          />
          {/* 引擎切换 */}
          <div className="absolute left-[20px] -top-3/4 h-[30px] overflow-y-hidden items-center transition delay-200">
            <div
              className={`flex  transition ${
                focusActive ? 'translate-y-0' : 'translate-y-[110%]'
              }`}>
              <div className="add-engines flex items-center">
                <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                <div className="w-1 h-1 bg-gray-300 rounded-full mx-1"></div>
                <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
              </div>
              {searchEngines.engines.map((item) => (
                <div
                  key={item.id}
                  className={`ml-2 cursor-pointer ${
                    searchEngines.currentEngine === +item.id ? 'text-gray-100' : 'text-gray-400'
                  }`}
                  onClick={() => {
                    searchRef.current?.focus()
                    setSearchEngines((pre) => {
                      let newState = {
                        ...pre,
                        currentEngine: +item.id
                      }
                      saveAllSearchEngines(newState)
                      return newState
                    })
                  }}>
                  {item.name}
                </div>
              ))}
            </div>
          </div>
          {/* 搜索图标 */}
          <div
            className="absolute top-0 right-3 h-full flex items-center cursor-pointer"
            onClick={searchEvent}>
            <IoSearch size={26} />
          </div>
        </div>
      </div>
    </div>
  )
}

const SearchInput = styled.input.attrs({
  className: 'px-10 pl-2 w-full h-full focus:outline-none bg-transparent text-inherit'
})`
  &::placeholder {
    color: inherit;
    opacity: 0.5;
  }
`

export default SearchContent
