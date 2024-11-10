import SitesList from "@/components/home/SitesList";
import HotSites from "@/components/HotSites";
import MainPanel from "@/components/ui/MainPanel";
import { fixedSites } from "@/configs/fixedSites";
import { toolboxSites } from "@/configs/toolbox.sites";

export const metadata = {
  title: "工具箱 | 前端森林",
};

export default function Page() {
  const sites = fixedSites.slice(0, 1);
  sites.push(
    ...toolboxSites.map((site) => ({
      type: site.type,
      icon: site.icon,
      level: site.level,
    })),
  );

  return (
    <MainPanel sites={sites}>
      {/* 热门站点 */}
      <HotSites></HotSites>
      {/* 站点列表 */}
      <SitesList sites={toolboxSites} />
    </MainPanel>
  );
}
