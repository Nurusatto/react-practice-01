import style from "./BurgerButton.module.scss";

export const BurgerButton = ({ onClick }) => {
  return (
    <button onClick={onClick} aria-label="open menu" type="button" className={style.BurgerButton}>
      <span className={style.BurgerButtonLine}></span>
      <span className={style.BurgerButtonLine}></span>
      <span className={style.BurgerButtonLine}></span>
    </button>
  );
};
