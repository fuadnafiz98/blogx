import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { bundleMDX } from "mdx-bundler";

export const POSTS_PATH = path.join(process.cwd(), "data/_posts");

export const getSourceFile = (fileName: string) => {
  return fs.readFileSync(path.join(POSTS_PATH, fileName)).toString();
};

export const getAllPosts = () => {
  return fs
    .readdirSync(POSTS_PATH)
    .filter((path) => /\.mdx?$/.test(path))
    .map((fileName) => {
      const source = getSourceFile(fileName);
      const slug = fileName.replace(/\.mdx?$/, "");
      const data = matter(source);
      return {
        frontmatter: { content: data.content, data: data.data, excerpt: data.excerpt },
        slug: slug,
      };
    });
};

export const getSinglePost = async (slug: string | string[]) => {
  const source = getSourceFile(slug + ".mdx");
  const { code, frontmatter } = await bundleMDX(source, {
    cwd: POSTS_PATH,
  });
  return {
    frontmatter,
    code,
  };
};
