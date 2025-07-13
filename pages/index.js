import Hero from "@/components/Hero";
import FeaturedPost from "@/components/Post/FeaturedPost";
import { getFeaturedPosts } from "@/lib/posts-util";

function HomePage(props) {
  const { featuredPosts } = props;
  
  return (
    <>
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