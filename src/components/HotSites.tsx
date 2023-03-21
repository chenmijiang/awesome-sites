import Image from 'next/image'

import { hotSites } from '@/configs/hotSites'

const HotSites = () => {
  return (
    <section>
      <h2 className="mb-[10px] text-lg font-bold">热门站点</h2>
      <div className="flex flex-wrap my-[20px] gap-4">
        {hotSites!.map((site, index) => (
          <a
            key={index}
            href={site.link}
            target="_blank"
            rel="noreferer"
            id="热门站点"
            className="duration-300 transition flex items-center overflow-hidden rounded-[50px] cursor-pointer m-1 centerLayout py-2 px-5 bg-white text-black hover:shadow-[2px_2px_6px_gray] no-underline">
            {site.logo && (
              <Image
                src={site.logo}
                alt=""
                className="w-[30px] mr-1"
              />
            )}
            <span>{site.name}</span>
          </a>
        ))}
      </div>
    </section>
  )
}

export default HotSites
