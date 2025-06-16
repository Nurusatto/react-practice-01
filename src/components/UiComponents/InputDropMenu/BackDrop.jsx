import styles from "./styles.module.scss";

export const BackDrop = ({ onClick }) => {
  return <div onClick={onClick} className={styles.BackDrop}></div>;
};
