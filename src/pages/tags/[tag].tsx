import { GetStaticPaths, InferGetStaticPropsType } from "next";
import ATagSitesList from "@/components/home/ATagSitesList";
import MainPanel from "@/components/ui/MainPanel";

import { allSites } from "@/configs/all.sites";
import Head from "next/head";

const TagPage = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const sites = allSites.filter((site) => site.type === props.type);
  if (sites.length === 0) {
    return (
      <div className="w-screen h-screen text-5xl text-center leading-[90vh]">
        loading...
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{sites[0].type} | 前端森林</title>
      </Head>
      <MainPanel sites={sites}>
        <ATagSitesList sites={sites} />
      </MainPanel>
    </>
  );
};

type Props = {
  params: {
    tag: string;
  };
};

export const getStaticProps = (props: Props) => {
  const tag = props.params.tag;
  const type = Buffer.from(tag, "base64").toString("utf-8");
  // 不存在
  if (allSites.findIndex((site) => site.type === type) === -1) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      type: type,
    },
  };
};

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [{ params: { tag: "5bel5YW3LWNzcw==" } }],
    fallback: true,
  };
};

export default TagPage;
