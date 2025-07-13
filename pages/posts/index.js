import Posts from "@/components/Post/Posts";

const DUMMY_POSTS = [
  {
    slug: "getting-started-with-nextjs",
    title: "Getting Started with Next.js",
    excerpt: "Learn the basics of Next.js in this comprehensive guide.",
    image: "getting-started-nextjs.png",
    date: "2022-02-15"
  },
];

function AllPostsPage() {
  return (
    <Posts posts={DUMMY_POSTS} />
  );
}

export default AllPostsPage;
