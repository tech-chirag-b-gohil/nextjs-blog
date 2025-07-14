import Hero from "@/components/Hero";
import FeaturedPost from "@/components/Post/FeaturedPost";
import { getFeaturedPosts } from "@/lib/posts-util";
import Head from "next/head";

function HomePage(props) {
  const { featuredPosts } = props;
  
  return (
    <>
      <Head>
        <title>Next.js Blog</title>
        <meta name="description" content="A simple blog built with Next.js" />
      </Head>
      <Hero />
      <FeaturedPost posts={featuredPosts} />
    </>
  );
}

export async function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      featuredPosts,
    }
  };
}

export default HomePage;