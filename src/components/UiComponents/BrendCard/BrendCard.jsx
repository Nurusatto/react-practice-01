import styles from "./BrendCard.module.scss";

export const BreandCard = ({ img, status }) => {
  return (
    <div className={styles.CardBreand}>
      <img src={img} alt="" className={styles.BreandImg} />
      <div className={styles.BreandSpan}>
        <span>{status} вакансий</span>
      </div>
    </div>
  );
};
