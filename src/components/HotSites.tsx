import styled from 'styled-components'

import { hotSites } from '@/configs/hotSites'

const HotSites = () => {
  return (
    <HotSitesContainer className="flex flex-wrap dark:bg-#18181a">
      {hotSites.map((site,index) => (
        <a
          key={index}
          href={site.link}
          target="_blank"
          rel="noreferer"
          className="btn cursor-pointer m-5px centerLayout">
          {site.logo ? (
            <img
              src="{site.logo}"
              alt=""
              className="w-30px mr-5px"
            />
          ) : (
            site.name
          )}
        </a>
      ))}
    </HotSitesContainer>
  )
}

const HotSitesContainer = styled.div`
  margin: 20px 0px;
  //background: #eeeeee;
  .btn {
    padding: 2px 15px;
    background: white;
    border-radius: 20px;
    color: black;
  }
  .btn:hover {
    box-shadow: 4px 4px 8px gray;
  }
`

export default HotSites
