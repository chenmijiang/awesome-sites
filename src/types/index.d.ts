type BaseSite = {
  name: string
  link: string
  level?: number
}

export type Site = BaseSite & {
  desc: string
}

export type HotSite = BaseSite & {
  logo: any
}

export type ATagSites = {
  type: string
  icon: JSX.Element
  level?: number
  sites: Site[]
}

export type SideBarSite = {
  type: string
  icon: JSX.Element
  anchor?: boolean
  link?: string
}

export type SearchEngines = {
  engines: {
    id: string
    name: string
    url: string
    hint: string
  }[]
  currentEngine: number
}
