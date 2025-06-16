import styles from "./ProfessionsDesktop.module.scss";
import { InputDropList } from "@components/UiComponents/InputDropMenu/InputDropList";
import { Button } from "@components/UiComponents/Button";

export const ProfessionsDesktop = () => {
  return (
    <>
      <section>
        <div className={`${styles.professionsPage} container`}>
          <div className={styles.professionsPageInput}>
            <InputDropList />
            <Button className={styles.professionsPageInputBtn}>Все вакансии</Button>
            <Button className={styles.professionsPageInputBtn}>Все резюме</Button>
          </div>
          <div className={styles.professionsServices}>
            <div className={styles.professionsServicesCard}></div>
          </div>
        </div>
      </section>
    </>
  );
};
