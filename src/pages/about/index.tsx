import Head from 'next/head'
import styled from 'styled-components'

const About = () => {
  return (
    <>
      <Head>
        <title>关于</title>
        <meta
          name="description"
          content="About this app"
        />
      </Head>
      <AboutWrapper className='lg:w-[800px]'>
        <h1>关于本站</h1>
        <p className="text-center">前端酷站收录</p>
      </AboutWrapper>
    </>
  )
}

const AboutWrapper = styled.div`

`

export default About
