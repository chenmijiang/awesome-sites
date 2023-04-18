import { techSites } from './sites/techSites'
import { weekly } from './sites/weekly'
import { blog } from './sites/blog'
import { teamBlog } from './sites/teamBlog'
import { spec } from './sites/spec'
import { ossSites } from './sites/ossSites'
import {
  cssUtilSites,
  jsUtilSites,
  picUtilsSites,
  regexpUtilsSites,
  serviceUtilSites,
  docUtilsSites,
  aiUtilSites,
  otherUtilSites,
  codeUtilSites
} from './sites/utilSites'

export const allSites = [
  // 技术站点
  techSites,
  // 周刊
  weekly,
  // 高质量个人博客；技术团队/技术组织博客
  blog,
  teamBlog,
  // 技术规范
  spec,
  // 热门开源项目站点
  ossSites,
  // 工具站点
  cssUtilSites,
  jsUtilSites,
  picUtilsSites,
  docUtilsSites,
  regexpUtilsSites,
  serviceUtilSites,
  aiUtilSites,
  otherUtilSites,
  codeUtilSites
]
