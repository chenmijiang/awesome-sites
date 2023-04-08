import Layout from '@/components/ui/layout'
import { GetStaticPaths, InferGetStaticPropsType } from 'next'
import SitesList from '@/components/home/SitesList'

import { allSites } from '@/configs/sites'

const TagPage = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const sites = allSites.filter((site) => site.type === props.type)
  if (sites.length === 0) {
    return <div>loading...</div>
  }
  return (
    <Layout>
      <SitesList sites={sites} />
    </Layout>
  )
}

type Props = {
  params: {
    tag: string
  }
}

export const getStaticProps = (props: Props) => {
  const tag = props.params.tag
  const type = Buffer.from(tag, 'base64').toString('utf-8')
  // 不存在
  if (allSites.findIndex((site) => site.type === type) === -1) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      type: type
    }
  }
}

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [{ params: { tag: '5bel5YW3LWNzcw==' } }],
    fallback: true
  }
}

export default TagPage
