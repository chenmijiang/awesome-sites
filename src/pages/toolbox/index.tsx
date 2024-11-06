import Head from "next/head";
import HotSites from "@/components/HotSites";
import MainPanel from "@/components/ui/MainPanel";
import SitesList from "@/components/home/SitesList";
import { fixedSites } from "@/configs/fixedSites";
import { toolboxSites } from "@/configs/toolbox.sites";

const ToolboxPage = () => {
  const sites = fixedSites.slice(0, 1);
  sites.push(
    ...toolboxSites.map((site) => ({
      type: site.type,
      icon: site.icon,
      level: site.level,
    })),
  );

  return (
    <>
      <Head>
        <title>工具箱 | 前端森林</title>
      </Head>
      <MainPanel sites={sites}>
        {/* 热门站点 */}
        <HotSites></HotSites>
        {/* 站点列表 */}
        <SitesList sites={toolboxSites} />
      </MainPanel>
    </>
  );
};

export default ToolboxPage;
