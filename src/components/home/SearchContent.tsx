import Image from 'next/image'
import { Icon } from '@iconify-icon/react'
import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

import {
  getAllSearchEngines,
  saveAllSearchEngines,
  searchEngines as ses
} from '@/configs/searchEngines'
import { filterSearchWord } from '@/util/search.util'

type Props = {
  url: string
}

const SearchContent = ({ url }: Props) => {
  const searchRef = useRef<HTMLInputElement>(null)
  const leaveFoucusRef = useRef<boolean>(true)
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
  const leaveFoucusHandler = () => {
    leaveFoucusRef.current = true
    setfocusActive((pre) => {
      if (pre) {
        searchRef.current?.blur()
        searchRef.current!.value = ''
      }
      return false
    })
  }
  return (
    <div
      className="h-[300px] overflow-hidden rounded-lg bg-center bg-cover mb-6 relative"
      onClick={leaveFoucusHandler}>
      <Image
        src={url}
        alt={''}
        fill={true}
        className={`object-cover transition${focusActive ? ' blur scale-110 brightness-75' : ''}`}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {/* 输入框 */}
        <div
          className={`searchbox${
            focusActive
              ? ' bg-zinc-200 md:w-[670px] text-cus-normal'
              : ' bg-zinc-200/50 md:w-[470px] text-transparent'
          } w-[80vw] h-[46px] transition-all delay-75 relative px-4 box-border  rounded-3xl md:hover:w-[670px]`}
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
              leaveFoucusRef.current = false
            }}
            onBlur={() => {
              if (leaveFoucusRef.current) {
                setfocusActive(false)
              }
            }}
            maxLength={150}
            type="text"
            placeholder={searchEngines.engines[searchEngines.currentEngine].hint}
          />
          {/* 引擎切换 */}
          <div className="absolute left-[20px] -top-3/4 h-[30px] overflow-y-hidden items-center transition delay-200 pointer-events-none">
            <div
              className={`flex  transition pointer-events-auto ${
                focusActive ? 'translate-y-0' : 'translate-y-[120%]'
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
                    searchEngines.currentEngine === +item.id
                      ? 'text-white font-semibold'
                      : 'text-white/50'
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
            <Icon
              icon="ph:magnifying-glass-bold"
              width={26}
              height={26}
            />
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
