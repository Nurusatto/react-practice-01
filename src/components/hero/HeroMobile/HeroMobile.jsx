import styles from "./HeroMobile.module.scss";
import heroImg from "@assets/img/heroImg.jpeg";
import { Button } from "@components/UiComponents/Button";

export const HeroMobile = () => {
  return (
    <>
      <section
        className={styles.hero}
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0) 35.35%, #F8F8F8 65.29%),url(${heroImg})`,
        }}
      >
        <div className={`${styles.heroInner} container`}>
          <h1 className={styles.heroInnerTitle}>Удаленная работа{"\n"} для всех</h1>
          <div className={styles.heroInnerDescription}>
            <span>Оффициально, из любой страны мира {"\n"}Крупнейшая база вакансий и резюме</span>
          </div>
          <Button className={styles.heroInnerButton}>Зарегестироваться</Button>
        </div>
      </section>
    </>
  );
};
