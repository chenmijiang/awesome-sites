import { Icon } from "@iconify-icon/react";
import { ATagSites } from "@/types";
import {
  aloc_js,
  astexplorer,
  imageslidermaker,
  jsbench,
  jsv9000,
} from "@/configs/sites";

export const jsUtilSites: ATagSites = {
  type: "工具-js",
  icon: <Icon icon="ri:javascript-fill" width={26} height={26} />,
  sites: [jsv9000, jsbench, aloc_js, imageslidermaker, astexplorer],
};
