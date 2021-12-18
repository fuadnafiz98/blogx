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
    <div className="w-full px-5 py-10 mx-auto mb-10 text-gray-800 bg-white">
      <div className="max-w-xl mx-auto text-center">
        <h1 className="mb-5 text-5xl font-bold md:text-6xl">Pricing</h1>
        <h3 className="mb-10 text-xl font-medium">
          Lorem ipsum dolor sit amet consectetur adipisicing elit repellat dignissimos laboriosam odit accusamus porro
        </h3>
      </div>
      <div className="max-w-4xl mx-auto md:flex">
        <div className="w-full px-8 py-8 mx-auto mb-3 bg-white rounded-md shadow-lg md:w-1/3 md:max-w-none md:px-10 md:py-10 md:my-6 shadow-gray-600 md:flex md:flex-col">
          <div className="flex-grow w-full">
            <h2 className="mb-4 font-bold text-center uppercase">PERSONAL</h2>
            <h3 className="mb-5 text-4xl font-bold text-center">
              $5<span className="text-base font-normal text-gray-600">/mo</span>
            </h3>
            <h3>
              <ul className="px-5 mb-8 space-y-4 text-sm">
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#10B981"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="px-2">Lorem ipsum</p>
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#10B981"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="px-2">Lorem ipsum</p>
                </li>
              </ul>
            </h3>
          </div>
          <div className="w-full">
            <button className="w-full px-10 py-2 font-bold text-white transition-colors bg-gray-800 rounded-md hover:bg-gray-900">
              Buy Now
            </button>
          </div>
        </div>
        <div className="w-full px-8 py-8 mx-auto mb-3 bg-white rounded-md shadow-lg md:w-1/3 md:max-w-none md:px-10 md:py-10 md:-mx-3 md:mb-0 shadow-gray-600 md:relative md:z-50 md:flex md:flex-col">
          <div className="flex-grow w-full">
            <h2 className="mb-4 font-bold text-center uppercase">Team</h2>
            <h3 className="mb-5 text-4xl font-bold text-center">
              $25<span className="text-base font-normal text-gray-600">/mo</span>
            </h3>
            <h3>
              <ul className="px-5 mb-8 space-y-4 text-sm ">
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#10B981"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="px-2">Lorem ipsum Lorem ipsum </p>
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#10B981"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="px-2">Lorem ipsum Lorem </p>
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#10B981"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="px-2">Lorem ipsum</p>
                </li>
              </ul>
            </h3>
          </div>
          <div className="w-full">
            <button className="w-full px-10 py-2 font-bold text-white transition-colors bg-gray-800 rounded-md hover:bg-gray-900">
              Buy Now
            </button>
          </div>
        </div>
        <div className="w-full px-8 py-8 mx-auto mb-3 bg-white rounded-md shadow-lg md:w-1/3 md:max-w-none md:px-10 md:py-10 md:my-6 shadow-gray-600 md:flex md:flex-col">
          <div className="flex-grow w-full">
            <h2 className="mb-4 font-bold text-center uppercase">Pro</h2>
            <h3 className="mb-5 text-4xl font-bold text-center">
              $50<span className="text-base font-normal text-gray-600">/mo</span>
            </h3>
            <h3>
              <ul className="px-5 mb-8 space-y-4 text-sm">
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#10B981"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="px-2">Lorem ipsum</p>
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#10B981"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="px-2">Lorem ipsum</p>
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#10B981"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="px-2">Lorem ipsum</p>
                </li>
              </ul>
            </h3>
          </div>
          <div className="w-full">
            <button className="w-full px-10 py-2 font-bold text-white transition-colors bg-gray-800 rounded-md hover:bg-gray-900">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
