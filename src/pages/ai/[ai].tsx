import { GetStaticPaths, InferGetStaticPropsType } from 'next'
import styled from 'styled-components'

import { base64ToUrl } from '@/util/link.util'
import { aiSites } from '@/configs/ai.sites'

import MainPanel from '@/components/ui/MainPanel'
import IframePanel from '@/components/ui/IframePanel'
import Head from 'next/head'

const AIPage = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <title>AI | 前端森林</title>
      </Head>
      <MainPanel
        sites={aiSites}
        footer={false}>
        <AIPageWrapper>
          <IframePanel url={props.url} />
        </AIPageWrapper>
      </MainPanel>
    </>
  )
}

const AIPageWrapper = styled.div`
  margin: -30px -0.5rem 0;
  height: calc(100vh - 50px);
`

type Props = {
  params: {
    ai: string
  }
}

export const getStaticProps = async (props: Props) => {
  return {
    props: {
      url: base64ToUrl(props.params.ai)
    }
  }
}

export const getStaticPaths: GetStaticPaths = () => {
  const paths = aiSites.map((site) => ({ params: { ai: site.link } }))
  return {
    paths: paths,
    fallback: false
  }
}

export default AIPage
