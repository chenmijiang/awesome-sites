// 实现 对多个网站链接预检，判定网站链接是否有效
import { existsSync, mkdirSync, writeFileSync } from "fs";
import path from "path";

import { fetchSite } from "@/util/sites-parse";
import * as allSites from "@/configs/sites";

const logDir = path.resolve(process.cwd(), "logs");

export const detectSitesValid = async (callback?: Function) => {
  // logs文件夹 是否存在，不存在就创建
  if (!existsSync(logDir)) {
    mkdirSync(logDir);
  }

  const logFileName = `${Date.now()}.log`;

  // 遍历 allSites 对象，获取所有网站的链接
  const sites: { name: string; url: string }[] = [];

  Object.values(allSites).forEach((site) => {
    sites.push({
      name: site.name,
      url: site.link,
    });
  });

  // 存储所有网站的请求
  const fetchRequests: Promise<string>[] = [];
  // 存储请求结果
  const fetchResults: string[] = [];

  // 遍历所有网站，发起请求
  sites.forEach(async (site) => {
    const { name, url } = site;
    let responseData: {
      statusCode: number;
      statusMessage: string;
      content: any;
    };

    fetchRequests.push(
      fetchSite(url)
        .then((res) => {
          responseData = res;
          return "success fetch";
        })
        .catch((err) => {
          responseData = err;
          return "fail fetch";
        })
        .finally(() => {
          const { statusCode, statusMessage } = responseData;
          writeFileSync(
            `${logDir}/${logFileName}`,
            `${name}, ${url}, ${statusCode}, ${statusMessage}\n`,
            {
              flag: "a",
            },
          );
          fetchResults.push(`${name}, ${url}, ${statusCode}, ${statusMessage}`);
        }),
    );
  });

  Promise.allSettled(fetchRequests).then(() => {
    callback && callback(fetchResults);
  });
};
