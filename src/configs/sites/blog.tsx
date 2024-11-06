import { Icon } from "@iconify-icon/react";
import { ATagSites } from "@/types";
import {
  blog_amitmerchant,
  blog_chokcoco,
  blog_csdiy,
  blog_lutaonan,
  blog_robinwieruch,
  blog_shanyue,
  blog_stefanjudis,
  blog_zhangxinxu,
} from "@/configs/sites";

export const blog: ATagSites = {
  type: "高质量个人博客",
  icon: <Icon icon="material-symbols:person-rounded" width={26} height={26} />,
  sites: [
    blog_stefanjudis,
    blog_amitmerchant,
    blog_csdiy,
    blog_shanyue,
    blog_zhangxinxu,
    blog_chokcoco,
    blog_robinwieruch,
    blog_lutaonan,
  ],
};
