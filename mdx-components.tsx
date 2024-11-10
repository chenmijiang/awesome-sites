import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    a: ({ ...props }) => <a target="_blank" {...props}></a>,
    ...components,
  };
}
