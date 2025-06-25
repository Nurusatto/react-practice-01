import { Button } from "../Button";
import styles from "./VacansiCard.module.scss";

export const VacansiCard = ({ title, img, money, responses }) => {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.cardContent}>
        <h3>{title}</h3>
        <div className={styles.cardInfo}>
          <span>Средний доход {money}</span>
          <p>{responses} отклика на вакансию</p>
        </div>
        <div className={styles.cardBtn}>
          <Button>Вакансии</Button>
          <Button>Резюме</Button>
        </div>
      </div>
      <div className={styles.cardImg}>
        <img src={img} alt="" />
      </div>
    </div>
  );
};
