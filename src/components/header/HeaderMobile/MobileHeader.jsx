import { IconPC } from "@components/icons/IconPC";
import { BurgerButton } from "./burgerButton";
import styles from "./MobileHeader.module.scss";
import { IconAccount } from "@components/icons/IconAccount";
import { IconPlus } from "@components/icons/IconPlus";

import { useEffect, useState } from "react";

export const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function Lock() {
      let html = document.querySelector("html");
      html.classList.toggle("is-lock", isOpen);
    }

    Lock();
  }, [isOpen]);

  return (
    <>
      <header className={`${styles.header} `}>
        <BurgerButton onClick={() => setIsOpen(!isOpen)} />
        <div className={styles.headerLogo}>
          <IconPC />
          <span>Homester.pro</span>
        </div>
        <IconAccount />
        <>
          <div
            className={`${styles.headerMenuOverlay} ${
              isOpen ? styles.headerMenuOverlayActive : ""
            } `}
          >
            <nav className={styles.headerNav}>
              <div className={styles.headerNavDescription}>
                <ul className={styles.headerNavDescriptionList}>
                  <li className={styles.headerNavDescriptionListItem}>
                    <span>
                      <h3>Все вакансии</h3>
                    </span>

                    <div className={styles.headerNavDescriptionListItemAction}>
                      <span>Резюме</span>
                      <IconPlus />
                    </div>
                  </li>
                  <li className={styles.headerNavDescriptionListItem}>
                    <span>
                      <h3>Все резюме</h3>
                    </span>

                    <div className={styles.headerNavDescriptionListItemAction}>
                      <span>Вакансия</span>
                      <IconPlus />
                    </div>
                  </li>
                  <li className={styles.headerNavDescriptionListItem}>
                    <span>
                      <h3>Цены и услуги</h3>
                    </span>
                  </li>
                </ul>
                <ul className={styles.headerNavDescriptionList}>
                  <li>
                    <span>Пользовательское соглашение</span>
                  </li>
                  <li>
                    <span>Политика конфидециальности</span>
                  </li>
                  <li>
                    <span>Контактная информация</span>
                  </li>
                </ul>
                <span className={styles.headerNavDescriptionFooter}>
                  © 2014-2021 homester.pro — сервис для подбора удаленных сотрудников
                </span>
              </div>
            </nav>
          </div>
        </>
      </header>
    </>
  );
};
