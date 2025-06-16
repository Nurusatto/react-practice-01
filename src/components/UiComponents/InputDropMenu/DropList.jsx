import { IconDropMenu } from "@components/icons/IconDropMenu";
import styles from "./styles.module.scss";

export const DropList = () => {
  return (
    <ul className={styles.DropList}>
      <li className={styles.DropListItem}>
        <div>
          <IconDropMenu />
          <span>Служба поддержки</span>
        </div>
      </li>
      <li className={styles.DropListItem}>
        <div>
          <IconDropMenu />
          <span>Личный ассистент</span>
        </div>
      </li>
      <li className={styles.DropListItem}>
        <div>
          <IconDropMenu name="bag" />
          <span>Разработчик мобильных приложений для...</span>
        </div>
        <div>
          <span>Google</span>
        </div>
      </li>
      <li className={styles.DropListItem}>
        <div>
          <IconDropMenu name="bag" />
          <span>Оператор call-центра</span>
        </div>
        <div>
          <span>Рога и Копыта</span>
        </div>
      </li>
      <li className={styles.DropListItem}>
        <div>
          <IconDropMenu name="bag" />
          <span>Разработчик Android</span>
        </div>
        <div>
          <span>Google</span>
        </div>
      </li>
    </ul>
  );
};
