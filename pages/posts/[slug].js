import PostContent from "@/components/Post/PostDetails/PostContent";
import { getPostData, getPostFileNames } from "@/lib/posts-util";

function SinglePostPage(props) {
  const { post } = props;
  return (
    <PostContent post={post} />
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;

  const post = getPostData(slug);

  return {
    props: {
      post,
    },
    revalidate: 600
  }
}

export async function getStaticPaths() {
  const postFilenames = getPostFileNames();
  const slugs = postFilenames.map(
    (filename) => filename.replace(/\.md$/, '')
  ); // Remove the .md extension
  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false
  };
}

export default SinglePostPage;
