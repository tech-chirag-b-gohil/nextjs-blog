import Markdown from "react-markdown";
import PostHeader from "@/components/Post/PostDetails/PostHeader";
import classes from "./styles.module.css";
import { markdownComponents } from "@/lib/markdown-util";

function PostContent(props) {
  const { post } = props;

  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <Markdown components={markdownComponents}>{post.content}</Markdown>
    </article>
  );
}

export default PostContent;