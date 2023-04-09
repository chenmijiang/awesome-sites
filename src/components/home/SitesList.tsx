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
      <div className='text-center my-3'>
        <Link
          href="/"
          className="text-base inline-block w-24 py-1 px-2 bg-red-400 text-white/90 rounded-2xl">
          返回首页
        </Link>
      </div>
    </>
  )
}

export default SitesList
