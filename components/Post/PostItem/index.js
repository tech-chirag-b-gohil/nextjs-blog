import Image from 'next/image';
import Link from 'next/link';
import classes from './styles.module.css';

function PostItem(props) {
  const { post } = props;
  const { title, date, excerpt, image, slug } = post;

  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const imagePath = `/images/posts/${slug}/${image}`;

  const linkPath = `/posts/${slug}`;

  return (
    <li className={classes.post}>
      <Link href={linkPath}>
        <div className={classes.image}>
          <Image src={imagePath} alt={title} fill />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <time>{formattedDate}</time>
          <p>{excerpt}</p>
        </div>
      </Link>
    </li>
  );
}

export default PostItem;