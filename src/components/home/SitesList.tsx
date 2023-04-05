import { allSites } from '@/configs/sites'

import Card from './Card'
import CategoryTitle from './CategoryTitle'

const SitesList = () => {
  return (
    <section className="all-sites">
      {allSites.map((list, index) => {
        return (
          <div
            className="site-block my-[30px]"
            key={index}>
            <CategoryTitle category={list} />
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
  )
}

export default SitesList
