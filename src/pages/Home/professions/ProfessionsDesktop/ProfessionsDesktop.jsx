import { ListBlockMain } from "@components/features/ListBlockMain/ListBlockMain";
import styles from "./ProfessionsDesktop.module.scss";
import { MainSearchInput } from "@components/features/MainSearchInput/MainSearchInput";
import { ListBlockVacansi } from "@components/features/ListBlockVacansi/ListBlockVacansi";

export const ProfessionsDesktop = () => {
  return (
    <>
      <section>
        <div className={`${styles.professionsPage} container`}>
          <MainSearchInput />
          <ListBlockMain />
          <ListBlockVacansi />
          <div className={styles.professionsPageExtra}>
            <div>
              <span>
                Категория, Еще категория, Категория, Категория,
                Категория, Еще категория, Категория, Категория, Еще
                категория, Категория, Категория, Еще категория,
                Категория, Категория, Еще категория, Категория,
                Категория, Категория, Еще категория, Категория,
                Категория, Категория, Еще категория, Категория,
                Категория,
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
