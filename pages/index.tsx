import type { GetStaticProps, NextPage } from "next";

import { allBlogPosts, BlogPost } from "contentlayer/generated";
import Hero from "@/components/Home/Hero";
import Projects from "@/components/Home/Projects";
import BlogPosts from "@/components/Home/BlogPosts";

import Contact from "@/components/Home/Contact";

interface HomePageProps {
  blogPosts: BlogPost[];
}

const HomePage: NextPage<HomePageProps> = ({ blogPosts }) => {
  return (
    <>
      <Hero />
      <Projects />
      <BlogPosts posts={blogPosts} />
      <Contact />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = allBlogPosts;

  return {
    props: {
      blogPosts: posts,
    },
  };
};

export default HomePage;
