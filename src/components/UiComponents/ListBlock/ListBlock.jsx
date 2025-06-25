import styles from "./ListBlock.module.scss";

export const ListBlock = ({
  data = [],
  layout = "grid",
  renderItem,
}) => {
  const classLayout =
    layout === "row" ? styles.listRow : styles.listGrid;

  return (
    <div className={` ${classLayout}`}>
      {data.map((item, index) => renderItem(item, index))}
    </div>
  );
};
