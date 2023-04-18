import { NextApiRequest, NextApiResponse } from 'next/types'

const bingUrl = process.env.BING_IMAGE!

const getBingImg = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    try {
      const response = await fetch(bingUrl)
      const data = await response.json()
      const bingImage = `https://cn.bing.com${data.images[0].url}`
      res.status(200).json({ bingImage })
    } catch (error) {
      res.status(500).json({ message: ' 500 - Error' })
    } finally {
      return
    }
  }
  res.status(405).json({ message: '405 - Method Not Allowed' })
}

export default getBingImg
