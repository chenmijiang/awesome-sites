import APIDoc from "@/docs/api.mdx";

export const metadata = {
  title: "api文档 | 前端森林",
};

export default function Page(props: any) {
  return (
    <article className="prose prose-lg">
      <APIDoc />
    </article>
  );
}
