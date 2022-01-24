import React, { useMemo } from "react";
import { GetStaticProps } from "next";
import { getMDXComponent } from "mdx-bundler/client";
import { getAllPosts, getSinglePost } from "../../utils/mdx";

export interface Props {
  frontmatter: { [key: string]: any };
  code: string;
}
export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (params?.slug === undefined) return { props: [] };
  console.log(params?.slug);
  const post = await getSinglePost(params?.slug);
  return {
    props: { ...post },
  };
};

export const getStaticPaths = async () => {
  const paths = getAllPosts().map(({ slug }) => ({ params: { slug } }));
  return {
    paths,
    fallback: false,
  };
};

const Post = ({ code, frontmatter }: Props) => {
  const Component = useMemo(() => getMDXComponent(code), [code]);
  return (
    <div className="">
      <h2>{frontmatter.title}</h2>
      <Component />
    </div>
  );
};

export default Post;
