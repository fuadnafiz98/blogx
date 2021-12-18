import { getAllPosts } from "../utils/mdx";

export const getStaticProps = async () => {
  const posts = getAllPosts();
  console.log(posts);
  return {
    props: { posts },
  };
};

interface Props {
  posts: {
    frontmatter: {
      [key: string]: any;
    };
    slug: string;
  }[];
}

export default function Home({ posts }: Props) {
  console.log(posts);
  return (
    <>
      <div>Hello world</div>
      <div>Hello world</div>
    </>
  );
}
