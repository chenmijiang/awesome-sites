export type Site = {
  name: string
  link: string
  desc: string
}

export type HotSite = {
  /**
   * 站点名称
   */
  name: string
  /**
   * 站点链接
   */
  link: string
  logo: any
}

export type SideBarSite = {
  type: string
  icon: JSX.Element
}

export type searchEngines = {
  engines: {
    id: string
    name: string
    url: string
    hint: string
  }[]
  currentEngine: number
}
