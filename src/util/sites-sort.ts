import { ATagSites, HotSite, SideBarSite, Site } from "@/types";

// 根据 level 排序, 适用于 ATagSites
export function sortATagSitesByLevel(aTagSites: ATagSites) {
  aTagSites.sites.sort((a, b) => (b?.level || 0) - (a?.level || 0));

  return aTagSites;
}

// 根据 level 排序, 适用于 ATagSites | HotSite | SideBarSite | Site
export function sortSitesByLevel<
  T extends ATagSites | HotSite | SideBarSite | Site,
>(sites: T[]): T[] {
  return sites.sort((a, b) => (b?.level || 0) - (a?.level || 0));
}
