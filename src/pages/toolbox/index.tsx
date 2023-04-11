import { Icon } from '@iconify-icon/react'

import HotSites from '@/components/HotSites'
import MainPanel from '@/components/ui/MainPanel'
import SitesList from '@/components/home/SitesList'
import { toolboxSites } from '@/configs/toolbox.sites'

const ToolboxPage = () => {
  let sites = [
    {
      type: '热门站点',
      icon: (
        <Icon
          icon="solar:fire-bold"
          width={26}
          height={26}
        />
      )
    }
  ]
  sites.push(...toolboxSites.map((site) => ({ type: site.type, icon: site.icon })))

  return (
    <MainPanel sites={sites}>
      {/* 热门站点 */}
      <HotSites></HotSites>
      {/* 站点列表 */}
      <SitesList sites={toolboxSites} />
    </MainPanel>
  )
}

export default ToolboxPage
