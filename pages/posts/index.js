import Posts from "@/components/Post/Posts";
import { getAllPosts } from "@/lib/posts-util";

function AllPostsPage(props) {
  const { posts } = props;

  return (
    <Posts posts={posts} />
  );
}

export async function getStaticProps() {
  const posts = getAllPosts();

  return {
    props: {
      posts,
    }
  };
}

export default AllPostsPage;
