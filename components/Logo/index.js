import classes from './styles.module.css';

function Logo() {
  return (
    <div className={classes.logo}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2l9 7-9 7-9-7 9-7z" />
        <path d="M12 22V12" />
      </svg>
      {" "}
      Blog
    </div>
  );
}

export default Logo;