import * as cheerio from "cheerio";
import { writeFileSync } from "fs";
import path from "path";

import axios from "axios";

// 获取网站
export async function fetchSite(url: string): Promise<{
  statusCode: number;
  statusMessage: string;
  content: string | null;
}> {
  return axios
    .get(url, {
      timeout: 30000,
    })
    .then((res) => {
      return {
        statusCode: res.status,
        statusMessage: res.statusText,
        content: res.data,
      };
    })
    .catch((error) => {
      let statusCode, statusMessage;
      if (error.response) {
        // 请求成功发出且服务器也响应了状态码，但状态代码超出了 2xx 的范围
        statusCode = error.response.status;
        statusMessage = error.response.statusText;
      } else if (
        error.code === "ECONNABORTED" ||
        error.message === "Network Error" ||
        error.message.includes("timeout")
      ) {
        // 请求超时
        statusCode = 408;
        statusMessage = "Request Timeout";
      } else {
        // 发送请求时出了点问题
        statusCode = 0;
        statusMessage = error.message || "Request Error";
      }
      return {
        statusCode,
        statusMessage,
        content: null,
      };
    });
}

// 解析网站url, 获取网站信息: title, url, icon, description
export async function intelligentParsingSite(url: string) {
  const { content } = await fetchSite(url);
  if (!content) return null;

  const $ = cheerio.load(content as string);
  const title = $("title").text();
  const icon = $('link[rel="icon"]').attr("href");
  const description = $('meta[name="description"]').attr("content");

  // icon 的 url 统一为绝对路径
  const urlObj = new URL(url);
  const iconUrl = new URL(icon || "", urlObj.origin).href;

  // // 保存 icon 图片
  // const iconPath = await saveIcon(iconUrl)
  // if (!iconPath) return null

  // 返回站点信息
  return {
    title,
    url,
    iconPath: iconUrl,
    description,
  };
}

// 保存 icon 图片, 返回路径: /images/sites/xxx.png
export async function saveIcon(iconUrl: string) {
  const { content } = await fetchSite(iconUrl);
  if (!content) return "";

  const iconPath = path.join("images", "sites", iconUrl.split("/").pop() || "");

  writeFileSync(path.resolve(process.cwd(), iconPath), content);
  return iconPath;
}
