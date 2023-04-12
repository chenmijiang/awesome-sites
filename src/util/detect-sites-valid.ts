// 实现 对多个网站链接预检，判定网站链接是否有效

import { get } from 'https'
import { get as getHttp } from 'http'
import { URL } from 'url'

import { allSites } from '@/configs/all.sites'

export const detectSitesValid = async (callback?: Function) => {
  // 遍历 allSites 数组，获取所有网站的链接
  const sites: { name: string; url: string }[] = []
  allSites.forEach((aTagSites) => {
    aTagSites.sites.forEach((site) => {
      sites.push({
        name: site.name,
        url: site.link
      })
    })
  })

  // 存储所有网站的请求
  const fetchRequests: Promise<string>[] = []
  // 存储请求结果
  const fetchResults: string[] = []

  // 遍历所有网站，发起请求
  sites.forEach((site) => {
    const { name, url } = site
    const { protocol } = new URL(url)
    const request = protocol === 'https:' ? get : getHttp
    fetchRequests.push(
      new Promise((resolve, reject) => {
        request(
          {
            hostname: new URL(url).hostname,
            path: new URL(url).pathname,
            method: 'GET',
            timeout: 30000
          },
          (res) => {
            const { statusCode, statusMessage } = res
            fetchResults.push(`${name}, ${url}, ${statusCode || 200}, ${statusMessage || 'OK'}`)
            resolve('ok')
          }
        ).on('error', (err) => {
          const { message } = err
          fetchResults.push(`${name}, ${url}, ${0}, ${message}`)
          resolve('error')
        })
      })
    )
  })

  Promise.allSettled(fetchRequests).then((results) => {
    callback && callback(fetchResults)
  })
}
