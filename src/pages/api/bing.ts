import axios from 'axios'
import { NextApiRequest, NextApiResponse } from 'next/types'

const bingUrl = 'https://cn.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=zh-CN'

const getBingImg = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { data } = await axios.get(bingUrl)
    const url = `https://cn.bing.com${data.images[0].url}`
    res.status(200).json({ url })
  } catch (error) {
    res.status(500).json({ error })
  }
}

export default getBingImg
