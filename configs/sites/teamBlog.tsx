import { Icon } from "@iconify-icon/react";
import { ATagSites } from "@/types";
import {
  teamblog_builder,
  teamblog_chrome,
  teamblog_web,
} from "@/configs/sites";

export const teamBlog: ATagSites = {
  type: "技术团队博客",
  icon: <Icon icon="fluent:people-team-20-filled" width={26} height={26} />,
  sites: [teamblog_web, teamblog_builder, teamblog_chrome],
};
