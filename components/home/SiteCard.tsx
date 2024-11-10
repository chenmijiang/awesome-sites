import { Site } from "@/types";

import Card from "@/components/Card";

type Props = {
  site: Site;
};

const SiteCard = ({ site }: Props) => {
  const name = site.name;
  const link = site.link;
  const desc = site.desc ? site.desc : "虽然没有描述，但是强烈推荐";
  if (site === undefined) {
    console.log("site is undefined");
  }
  return (
    <Card title={name} link={link}>
      <span>{desc}</span>
    </Card>
  );
};

export default SiteCard;
