import Hero from "@/components/Hero";
import FeaturedPost from "@/components/Post/FeaturedPost";

const DUMMY_POSTS = [
  {
    slug: "getting-started-with-nextjs",
    title: "Getting Started with Next.js",
    excerpt: "Learn the basics of Next.js in this comprehensive guide.",
    image: "getting-started-nextjs.png",
    date: "2022-02-15"
  },
];

function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedPost posts={DUMMY_POSTS} />
    </>
  );
}

export default HomePage;