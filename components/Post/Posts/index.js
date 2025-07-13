import PostGrid from '../PostGrid';
import classes from './styles.module.css';

function Posts(props) {
  const { posts } = props;
  return (
    <section className={classes.posts}>
      <h1>All Posts</h1>
      <PostGrid posts={posts} />
    </section>
  );
}

export default Posts;