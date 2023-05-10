import Link from 'next/link'
import { useRouter } from 'next/router'
import Card from './Card'
import CategoryTitle from './CategoryTitle'
import { ATagSites } from '@/types'
import { sortATagSitesByLevel } from '@/util/sites-sort'

type Props = {
  sites: ATagSites[]
  sort?: boolean
}

const SitesList = (props: Props) => {
  const router = useRouter()
  let sortATagSites = props.sites
  if (props.sort !== false) {
    for (let i = 0; i < sortATagSites.length; i++) {
      sortATagSites[i] = sortATagSitesByLevel(sortATagSites[i])
    }
  }
  return (
    <>
      <section className="all-sites">
        {sortATagSites.map((list, index) => {
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
        <button
          onClick={() => {
            router.back()
          }}
          className="hover:top-[2px] hover:bg-[#333] hover:shadow-none hover:transition-all !text-white relative top-0 p-[10px_75px] bg-[#f1404b] font-semibold rounded-[900px] transition-all shadow-[0px_5px_20px_-3px_rgba(249,100,90,0.6)]">
          返回
        </button>
      </div>
    </>
  )
}

export default SitesList
