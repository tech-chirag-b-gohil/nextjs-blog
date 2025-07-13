import Image from 'next/image';
import classes from './styles.module.css';

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image 
          src="/images/site/hero-image.png"
          alt="An image showing a person"
          width={200}
          height={200}
          priority
        />
      </div>
      <h1>Welcome to Next.js Blog App</h1>
      <p>Blog about various topics related to web development.</p>
    </section>
  );
}

export default Hero;