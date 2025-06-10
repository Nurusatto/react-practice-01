import styles from "./HeroTablet.module.scss";
import heroImg from "@assets/img/heroImg.jpeg";
import { Button } from "@components/UiComponents/Button";

export const HeroTablet = () => {
  return (
    <>
      <section
        className={styles.hero}
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0) 35.35%, #F8F8F8 100%),url(${heroImg})`,
        }}
      >
        <div className={`${styles.heroInner} container`}>
          <h1>Удаленная работа для всех</h1>
          <div className={styles.heroInnerDescription}>
            <span>Официально, из любой страны мира {"\n"}Крупнейшая база вакансий и резюме</span>
          </div>
          <Button className={styles.heroInnerButton}>Зарегестироваться</Button>
        </div>
      </section>
    </>
  );
};
