import { IconPC } from "@components/icons/IconPC";
import styles from "./DesktopHeader.module.scss";
import { IconPlus } from "@components/icons/IconPlus";

export const DescktopHeader = () => {
  return (
    <>
      <header>
        <div className={`${styles.headerInner} container`}>
          <nav className={styles.headerNav}>
            <ul className={styles.headerNavList}>
              <li className={styles.headerNavListItem}>
                <span>Вакансии</span>
              </li>
              <li className={styles.headerNavListItem}>
                <span>Резюме</span>
              </li>
              <li className={styles.headerNavListItem}>
                <span>Цены и услуги</span>
              </li>
            </ul>
          </nav>
          <div className={styles.headerLogo}>
            <IconPC />
            <span>Homester.pro</span>
          </div>
          <nav className={styles.headerNav}>
            <ul className={styles.headerNavList}>
              <li className={styles.headerNavListItem}>
                <IconPlus />
                <span>Резюме</span>
              </li>
              <li className={styles.headerNavListItem}>
                <IconPlus />
                <span>Вакансия</span>
              </li>
              <li className={styles.headerNavListItem}>
                <button type="button" className={styles.headerSignIn}>
                  Войти
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};
