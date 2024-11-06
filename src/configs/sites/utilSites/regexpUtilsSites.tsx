import { Icon } from "@iconify-icon/react";
import { ATagSites } from "@/types";
import { regex_vis } from "@/configs/sites";

export const regexpUtilsSites: ATagSites = {
  type: "工具-正则",
  icon: <Icon icon="bi:regex" width={26} height={26} />,
  sites: [regex_vis],
};
