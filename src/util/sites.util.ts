import { ATagSites, HotSite, SideBarSite, Site } from '@/types'

export function sortATagSitesByLevel(aTagSites: ATagSites) {
  aTagSites.sites.sort((a, b) => (b?.level || 0) - (a?.level || 0))

  return aTagSites
}

export function sortSitesByLevel<T extends ATagSites | HotSite | SideBarSite | Site>(
  sites: T[]
): T[] {
  return sites.sort((a, b) => (b?.level || 0) - (a?.level || 0))
}
