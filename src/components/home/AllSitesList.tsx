import Card from './Card'
import CategoryTitle from './CategoryTitle'
import { allSites } from '@/configs/sites'

const AllSitesList = () => {
  return (
    <section className="all-sites">
      {allSites.map((list, index) => {
        return (
          <div
            className="my-[30px]"
            key={index}>
            <CategoryTitle
              category={list}
              more={list.sites.length > 12}
            />
            <div className="grid grid-cols-list gap-3">
              {list.sites.slice(0, 12).map((site, i) => {
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
