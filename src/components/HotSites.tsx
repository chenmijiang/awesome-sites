import Image from 'next/image'
import styled from 'styled-components'
import { Icon } from '@iconify-icon/react'
import { hotSites } from '@/configs/hot.sites'
import { sortSitesByLevel } from '@/util/sites-sort'

const sortHotSites = sortSitesByLevel(hotSites)

const HotSites = () => {
  return (
    <section>
      <div className="flex items-center mb-[10px] text-[#f74311]">
        <Icon
          icon="solar:fire-bold"
          width={26}
          height={26}
        />
        <h2
          className="text-lg font-bold mt-1 ml-1"
          id="热门站点">
          热门站点
        </h2>
      </div>
      <div className="flex flex-wrap my-[20px] gap-4">
        {sortHotSites.map((site, index) => (
          <HotSiteLink
            key={index}
            href={site.link}
            target="_blank"
            className="dark:bg-zinc-300 dark:shadow-none flex items-center overflow-hidden rounded-[50px] cursor-pointer m-1 py-2 px-4 bg-white shadow-sm text-cus-normal hover:text-cus-activated hover:shadow-md hover:-translate-y-1 transition-transform duration-300">
            {site.logo && (
              <Image
                src={site.logo}
                alt=""
                width={20}
                height={20}
                className="md:mr-1"
              />
            )}
            <span className="md:inline-block hidden">{site.name}</span>
          </HotSiteLink>
        ))}
      </div>
    </section>
  )
}

const HotSiteLink = styled.a`
  text-decoration: none;

  /*去除未被访问的a标签的下划线*/
  &:link {
    text-decoration: none;
  }

  /*去除已经被访问过的a标签的下划线*/
  &:visited {
    text-decoration: none;
  }

  /*去除鼠标悬停时的a标签的下划线*/
  &:hover {
    text-decoration: none;
  }

  /*去除正在点击的a标签的下划线（鼠标按下，尚未松开）*/
  &:active {
    text-decoration: none;
  }

  /*去除获得焦点的a标签的下划线（被鼠标点击过）*/
  &:focus {
    text-decoration: none;
  }
`

export default HotSites
