import Meta from "../components/Meta";
import Link from "next/link";
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
  return (
    <Meta
      title="Next.js Starter"
      description="Next.js starter template combined with typescript, tailwind.css, prettier, eslint and much more!"
      date="01-08-2021"
      image="/images/banner.jpg"
      keywords="next.js, starter, tailwindcss, typescript"
    >
      <div className="grid h-screen font-sans place-content-center bg-gray-50">
        <div className="text-4xl font-black text-gray-900"> 🧀 Happy coding</div>
        <div>
          <h2 className="my-8 font-mono text-center text-blue-600">
            To use this template go to
            <a
              className="mx-2 text-blue-600 underline hover:text-blue-700"
              href="https://github.com/fuadnafiz98/nextjs-starter"
            >
              this repo
            </a>
          </h2>
        </div>
        {posts.map((post, index) => (
          <Link key={index} href={`/blogs/${post.slug}`}>
            hello
          </Link>
        ))}
      </div>
    </Meta>
  );
}
