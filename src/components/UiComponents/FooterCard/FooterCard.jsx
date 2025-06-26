import styles from "./FooterCard.module.scss";

export const FooterCard = ({ title, cost, description }) => {
  return (
    <div className={styles.footerWrapper}>
      <h3 className={`h3 ${styles.footerTitle}`}>{title}</h3>
      <div className={styles.footerInfo}>
        <p>{cost} руб.</p>
        <span>{description}</span>
      </div>
    </div>
  );
};
