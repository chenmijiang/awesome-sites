import styled from 'styled-components'

import { allSites } from '@/configs/sites'
import Card from './Card'
import CategoryTitle from './CategoryTitle'

const List = () => {
  return (
    <section className="all-sites">
      {allSites.map((list, index) => {
        return (
          <div
            className="site-block my-30px"
            key={index}>
            <CategoryTitle category={list} />
            <ItemWrapper>
              {list.sites.map((site, i) => {
                return (
                  <Card
                    site={site}
                    key={i}
                  />
                )
              })}
            </ItemWrapper>
          </div>
        )
      })}
    </section>
  )
}

const ItemWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px;
`

export default List
