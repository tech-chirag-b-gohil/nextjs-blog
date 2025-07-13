import PostHeader from "@/components/Post/PostDetails/PostHeader";
import classes from "./styles.module.css";

const DUMMY_POST = {
  slug: "getting-started-with-nextjs",
  title: "Getting Started with Next.js",
  content: "# This is a post about getting started with Next.js",
  image: "getting-started-nextjs.png",
  date: "2022-02-15"
}

function PostContent() {
  const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;

  return (
    <article className={classes.content}>
      <PostHeader title={DUMMY_POST.title} image={imagePath} />
      {DUMMY_POST.content}
    </article>
  );
}

export default PostContent;