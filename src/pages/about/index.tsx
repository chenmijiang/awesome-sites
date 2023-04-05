import Head from 'next/head'

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
      <div className="text-column">
        <h1>关于本站</h1>
        <p className="text-center">前端酷站收录</p>
      </div>
    </>
  )
}

export default About
