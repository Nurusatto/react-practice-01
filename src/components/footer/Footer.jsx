import { ListBlockFooter } from "@components/features/ListBlockFooter/ListBlockFooter";
import styles from "./FooterExtra.module.scss";

export const Footer = ({ List = true, extra = true }) => {
  return (
    <footer>
      <div className={`container`}>
        {List && <ListBlockFooter />}
        {extra && (
          <>
            <div className={styles.footerExtra}>
              <div className={styles.footerExtraSpan}>
                <span>© 2014-2021 homester.pro — </span>
                <span>cервис для подбора удаленных сотрудников</span>
              </div>

              <ul className={styles.footerExtraList}>
                <li>Контактная информация</li>
                <li>Политика конфидециальности</li>
                <li>Пользовательское соглашение</li>
              </ul>
            </div>
          </>
        )}
      </div>
    </footer>
  );
};
