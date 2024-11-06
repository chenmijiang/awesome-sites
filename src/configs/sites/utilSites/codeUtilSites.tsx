import { Icon } from "@iconify-icon/react";
import { ATagSites } from "@/types";
import { codepen, codesandbox } from "@/configs/sites";

export const codeUtilSites: ATagSites = {
  type: "工具-在线编码",
  icon: (
    <Icon icon="material-symbols:code-blocks-rounded" width={26} height={26} />
  ),
  level: 2,
  sites: [codepen, codesandbox],
};
