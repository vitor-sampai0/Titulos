import styles from "./section.module.css";

const Section = ({titulo, children}) => {
  return (
    <section className={styles.featured}>
      <h2>{titulo}</h2>
      <div className={styles.featuredTrophies}>
        {children}
      </div>
    </section>
  );
};

export default Section;
