import { Icon } from "@iconify-icon/react";
import { ATagSites } from "@/types";
import { ilovepdf } from "@/configs/sites";

export const docUtilsSites: ATagSites = {
  type: "工具-文档",
  icon: <Icon icon="ci:file-pdf" width={26} height={26} />,
  sites: [ilovepdf],
};
