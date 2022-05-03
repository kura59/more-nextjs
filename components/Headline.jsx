import styles from "../styles/Home.module.css";

const Headline = (props) => {
  const { page } = props;
  return (
    <div>
      <h1 className={styles.title}>{page} Page</h1>

      <p className={styles.description}>
        Get started by editing{" "}
        <code className={styles.code}>pages/{page}.js</code>
      </p>
    </div>
  );
};

export default Headline;
