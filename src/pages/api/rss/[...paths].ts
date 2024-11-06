import { NextApiRequest, NextApiResponse } from "next/types";

const RSSHUB_BASEURL = process.env.RSSHUB_BASEURL;

const getRSSResource = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    let { paths } = req.query;
    paths =
      paths === undefined ? [] : typeof paths === "string" ? [paths] : paths;
    try {
      const response = await fetch(RSSHUB_BASEURL + paths.join("/"), {
        method: "GET",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
      });
      const data = await response.text();

      res.setHeader("Content-Type", "application/xml; charset=utf-8");

      res.status(200).send(data);
      return;
    } catch (e) {
      res.status(500).json("500 - Internal Server Error");
    }
  }
  res.status(405).json({ message: "405 - Method Not Allowed" });
};

export default getRSSResource;
