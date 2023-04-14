import { Icon } from '@iconify-icon/react'
import Link from 'next/link'
import Head from 'next/head'
import styled from 'styled-components'

const About = () => {
  return (
    <>
      <Head>
        <title>关于 | 前端森林</title>
      </Head>
      <AboutWrapper className="w-full">
        <div className="md:w-[750px] w-11/12 py-5 mx-auto box-border">
          <h1>关于本站</h1>
          <h2>
            <Icon
              icon="twemoji:palm-tree"
              width={24}
              height={24}
            />{' '}
            这是什么
          </h2>
          <p>
            收录前端各类技术站点。 包括但不限于前端技术站点、技术周刊、<b>高质量</b>
            个人博客、前端公众号、技术规范、开源项目站点等。 仅限中文、英文，英文最好。
          </p>
          <h2>
            {' '}
            <Icon
              icon="twemoji:palm-tree"
              width={24}
              height={24}
            />{' '}
            why
          </h2>
          <p>可能你觉得你有Google/Github就够了，但此仓库的存在主要为了起到下面几个作用：</p>
          <p>1. 解放自己的浏览器书签页，清爽一下。</p>
          <p>2. 尤其对于国外的个人博客，经常会忘记他们叫什么，想搜索都不知道搜什么。</p>
          <p>
            3. 想技术提升的时候，有个统一的地方，找到这个仓库就可以找到大部分<b>新鲜的</b>技术资讯。
          </p>
          <p>4. 最主要的还是收录英文站点，理由同2。</p>
          <p>
            5.
            比如你是一个前端博主，或者你要在团队内技术分享，当你灵感枯竭的时候来这些站点翻一翻。有很大帮助。
          </p>
          <h2>
            {' '}
            <Icon
              icon="twemoji:palm-tree"
              width={24}
              height={24}
            />{' '}
            项目源地址
          </h2>
          <p>
            本站是基于 awesome-fe-sites 的
            <a
              href="https://github.com/chenmijiang/awesome-sites"
              target="_blank"
              rel="noopener noreferrer">
              二次开发（地址）
            </a>
            ，原项目
            <a
              href="https://github.com/cunzaizhuyi/awesome-fe-sites"
              target="_blank"
              rel="noopener noreferrer">
              地址
            </a>
          </p>
        </div>
        <div className="py-[30px] flex justify-center">
          <Link
            href="/"
            className="hover:top-[2px] hover:bg-[#333] hover:shadow-none hover:transition-all !text-white relative top-0 p-[10px_75px] bg-[#f1404b] font-semibold rounded-[900px] transition-all shadow-[0px_5px_20px_-3px_rgba(249,100,90,0.6)]">
            返回首页
          </Link>
        </div>
      </AboutWrapper>
    </>
  )
}

const AboutWrapper = styled.div`
  h1 {
  }

  h2 {
    font-size: 1.2rem;
    font-weight: bold;
    line-height: 2.4rem;
  }

  p {
    font-size: 1.1rem;
    line-height: 2rem;
  }

  a {
    color: #0070f3;
  }
`

export default About
