import Card from './Card'
import CategoryTitle from './CategoryTitle'
import { allSites } from '@/configs/sites'
import { sortSitesByLevel } from '@/util/sites.util'

const sortAllSites = sortSitesByLevel(allSites)

type Props = {
  limit?: number
}

const AllSitesList = (props: Props) => {
  let limit = props.limit || 12

  return (
    <section className="all-sites">
      {sortAllSites.map((list, index) => {
        return (
          <div
            className="my-[30px]"
            key={index}>
            <CategoryTitle
              category={list}
              more={list.sites.length > limit}
            />
            <div className="grid grid-cols-list gap-3">
              {sortSitesByLevel(list.sites)
                .slice(0, limit)
                .map((site, i) => {
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
  )
}

export default AllSitesList
