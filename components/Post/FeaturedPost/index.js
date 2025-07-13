import PostGrid from '@/components/Post/PostGrid';
import classes from './styles.module.css';

function FeaturedPost(props) {
  const { posts } = props;

  return (
    <section className={classes.latest}>
      <h2>Featured Post</h2>
      <PostGrid posts={posts} />
    </section>
  );
}

export default FeaturedPost;
