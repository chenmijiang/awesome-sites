import { Icon } from "@iconify-icon/react";
import { ATagSites } from "@/types";
import { ai_toolkit, aigc, carrot, duomosmart, phind } from "@/configs/sites";

export const aiUtilSites: ATagSites = {
  type: "工具-ai",
  icon: <Icon icon="logos:airbnb-icon" width={24} height={24} />,
  level: 2,
  sites: [carrot, aigc, ai_toolkit, phind, duomosmart],
};
