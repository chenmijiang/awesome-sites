import { NextApiRequest, NextApiResponse } from 'next/types'

import { detectSitesValid } from '@/util/detect-sites-valid'

// 测试所有网站链接是否有效

const resultObj: {
  all: { [key: string]: any }
  error: { [key: string]: any }
  success: { [key: string]: any }
} = { all: {}, error: {}, success: {} }

const test = async (req: NextApiRequest, res: NextApiResponse) => {
  // 测试环境
  if (process.env.NODE_ENV === 'development') {
    detectSitesValid((fetchResults: string[]) => {
      // 将结果返回给前端
      fetchResults.forEach((result) => {
        const [name, url, statusCode, statusMessage] = result.split(', ')
        resultObj['all'][name] = {
          url,
          statusCode,
          statusMessage
        }
        if (statusCode === '200') {
          resultObj['success'][name] = {
            url,
            statusCode,
            statusMessage
          }
        } else {
          resultObj['error'][name] = {
            url,
            statusCode,
            statusMessage
          }
        }
      })
      res.status(200).json(resultObj)
    })
  }
  // 生产环境，禁止访问
  else {
    res.status(403).json({ message: 'Forbidden' })
  }
}

export default test
