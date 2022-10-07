import { ReactElement } from "react";
import { Props } from "./Card.types";
import styles from "./card.module.css";

export const Card = ({ children }: Props): ReactElement => {
  return (
    <div className={styles.card}>
      {children}
    </div>
  );
};

export default Card;
