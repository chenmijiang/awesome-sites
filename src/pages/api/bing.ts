import { NextApiRequest, NextApiResponse } from 'next/types'

const bingUrl = 'https://cn.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=zh-CN'

const getBingImg = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {    
    try {
      const response = await fetch(bingUrl)
      const data = await response.json()
      
      const bingImage = `https://cn.bing.com${data.images[0].url}`
      res.status(200).setHeader('Allow-Control-Allow-Origin', '*').json({ bingImage })
    } catch (error) {
      res.status(500).json({ message:' 500 - Error' })
    }
  }
  res.status(405).json({ message:' 405 - Method Not Allowed' })
}

export default getBingImg
