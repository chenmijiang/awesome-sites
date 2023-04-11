import Card from './Card'
import CategoryTitle from './CategoryTitle'
import { ATagSites } from '@/types'
import { sortSitesByLevel } from '@/util/sites.util'

type Props = {
  sites: ATagSites[]
  limit?: number
}

const SitesList = (props: Props) => {
  let sortSites = sortSitesByLevel(props.sites)
  let limit = props.limit || 12

  return (
    <>
      {sortSites.map((list, index) => {
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
    </>
  )
}

export default SitesList
