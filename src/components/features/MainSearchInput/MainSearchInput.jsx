import styles from "./MainSearchInput.module.scss";
import { InputDropList } from "@components/UiComponents/InputDropMenu/InputDropList";
import { Button } from "@components/UiComponents/Button";

export const MainSearchInput = () => {
  return (
    <div className={styles.ContainerInput}>
      <InputDropList />
      <Button className={styles.ContainerInputBtn}>
        Все вакансии
      </Button>
      <Button className={styles.ContainerInputBtn}>Все резюме</Button>
    </div>
  );
};
