import { Icon } from "@iconify-icon/react";
import { ATagSites } from "@/types";
import {
  caniuse,
  check_ip,
  component_party,
  long_ng,
  nginx_config,
  node_toolbox,
  reduced,
} from "@/configs/sites";

export const serviceUtilSites: ATagSites = {
  type: "工具-服务",
  icon: <Icon icon="solar:server-2-bold" width={26} height={26} />,
  sites: [
    nginx_config,
    reduced,
    long_ng,
    caniuse,
    component_party,
    node_toolbox,
    check_ip,
  ],
};
