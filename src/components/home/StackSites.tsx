import Image from 'next/image'
import styled from 'styled-components'
import { Icon } from '@iconify-icon/react'
import { stackSites } from '@/configs/stack.sites'
import { sortSitesByLevel } from '@/util/sites-sort'

import Card from '@/components/Card'

const StackSites = () => {
  return (
    <section>
      <div className="flex items-center mb-[10px] text-[#5497b8]">
        <Icon
          icon="ion:file-tray-stacked"
          width={24}
          height={24}
        />
        <h2
          className="text-lg font-bold mt-1 ml-1"
          id="技术栈">
          技术栈
        </h2>
      </div>
      <div className="grid grid-cols-list gap-3">
        {stackSites.map((card, index) => (
          <Card
            key={index}
            title={card.name}>
            <CardContain className="flex flex-wrap gap-1 max-h-[160px] overflow-auto">
              {card.sites.length !== 0
                ? sortSitesByLevel(card.sites).map((site, i) => (
                    <HotSiteLink
                      key={i}
                      href={site.link}
                      target="_blank"
                      className="dark:shadow-none flex items-center overflow-hidden rounded-[50px] cursor-pointer m-1 py-2 px-4 bg-[#f1f1f1]/80 shadow text-black hover:-translate-y-1 transition-transform duration-300">
                      {site.logo && (
                        <Image
                          src={site.logo}
                          alt=""
                          width={18}
                          height={18}
                          className="md:mr-1"
                        />
                      )}
                      <span className="md:inline-block hidden">{site.name}</span>
                    </HotSiteLink>
                  ))
                : '等待填充'}
            </CardContain>
          </Card>
        ))}
      </div>
    </section>
  )
}

const CardContain = styled.div`
  --sb-track-color: transparent;
  --sb-thumb-color: #a2a3a4;
  --sb-size: 6px;

  scrollbar-color: var(--sb-thumb-color) var(--sb-track-color);

  &::-webkit-scrollbar {
    width: var(--sb-size);
  }

  &::-webkit-scrollbar-track {
    background: var(--sb-track-color);
  }

  &::-webkit-scrollbar-thumb {
    background: var(--sb-thumb-color);
    border-radius: 6px;
    border: 2px solid var(--sb-track-color);
  }
`

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

export default StackSites
