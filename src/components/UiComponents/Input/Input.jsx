import { IconInput } from "@components/icons/IconInput";
import styles from "./Input.module.scss";
import { forwardRef } from "react";

export const Input = forwardRef(function Input(props, ref) {
  return (
    <div className={styles.InptWrapper}>
      <IconInput className={styles.InptIcon} />
      <input type="text" tabIndex={0} className={styles.InptEnter} ref={ref} {...props} />
    </div>
  );
});
