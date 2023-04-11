import { SearchEngines } from '@/types'

export const searchEngines: SearchEngines = {
  engines: [
    {
      id: '0',
      name: '掘金',
      url: 'https://juejin.cn/search?query=',
      hint: '掘金搜索：一个帮助开发者成长的社区~~'
    },
    {
      id: '1',
      name: 'Bing',
      url: 'https://www.bing.com/search?q=',
      hint: 'bing搜搜~~sousuo~~'
    },
    {
      id: '2',
      name: 'Google',
      url: 'https://www.google.com/search?q=',
      hint: 'google搜搜~~sousuo~~'
    },
    {
      id: '3',
      name: 'Baidu',
      url: 'https://www.baidu.com/s?wd=',
      hint: 'baidu搜搜~~sousuo~~'
    }
  ],
  currentEngine: 0
}

export function getAllSearchEngines(): SearchEngines {
  if (typeof localStorage !== 'undefined' && localStorage.getItem('searchEngines') !== null) {
    return JSON.parse(localStorage.getItem('searchEngines')!)
  }
  return searchEngines
}

export function saveAllSearchEngines(engines: SearchEngines) {
  localStorage.setItem('searchEngines', JSON.stringify(engines))
}

export function addSearchEngine(engine: { id: string; name: string; url: string; hint: string }) {
  searchEngines.engines.push(engine)
  saveAllSearchEngines(searchEngines)
}

export function deleteSearchEngine(id: string) {
  searchEngines.engines = searchEngines.engines.filter((e) => e.id !== id)
  saveAllSearchEngines(searchEngines)
}
