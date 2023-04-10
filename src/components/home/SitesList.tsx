import Link from 'next/link'
import Card from './Card'
import CategoryTitle from './CategoryTitle'
import { allSites } from '@/configs/sites'

type Props = {
  sites: typeof allSites
}

const SitesList = (props: Props) => {
  return (
    <>
      <section className="all-sites">
        {props.sites.map((list, index) => {
          return (
            <div
              className="my-[30px]"
              key={index}>
              <CategoryTitle
                category={list}
                more={false}
              />
              <div className="grid grid-cols-list gap-3">
                {list.sites.map((site, i) => {
                  return (
                    <Card
                      site={site}
                      key={i}
                    />
                  )
                })}
              </div>
            </div>
          )
        })}
      </section>
      <div className="pt-[30px] flex justify-center">
        <Link
          href="/"
          className="hover:top-[2px] hover:bg-[#333] hover:shadow-none hover:transition-all !text-white relative top-0 p-[10px_75px] bg-[#f1404b] font-semibold rounded-[900px] transition-all shadow-[0px_5px_20px_-3px_rgba(249,100,90,0.6)]">
          返回首页
        </Link>
      </div>
    </>
  )
}

export default SitesList
