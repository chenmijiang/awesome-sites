import { GetStaticPaths, InferGetStaticPropsType } from 'next'
import SitesList from '@/components/home/SitesList'
import MainLayout from '@/components/ui/MainLayout'

import { allSites } from '@/configs/sites'

const TagPage = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const sites = allSites.filter((site) => site.type === props.type)
  if (sites.length === 0) {
    return <div className="w-screen h-screen text-5xl text-center leading-[90vh]">loading...</div>
  }
  return (
    <MainLayout sites={sites.map((site) => ({ type: site.type, icon: site.icon }))}>
      <SitesList sites={sites} />
    </MainLayout>
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
