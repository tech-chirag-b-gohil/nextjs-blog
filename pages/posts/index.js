import Posts from "@/components/Post/Posts";
import { getAllPosts } from "@/lib/posts-util";
import Head from "next/head";

function AllPostsPage(props) {
  const { posts } = props;

  return (
    <>
      <Head>
        <title>All Posts</title>
        <meta name="description" content="A list of all posts" />
      </Head>
      <Posts posts={posts} />
    </>
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
