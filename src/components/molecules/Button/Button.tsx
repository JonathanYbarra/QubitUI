import { ReactElement } from "react";
import { Props } from "./Button.types";
import clsx from "../../../utils/clsx";
import styles from "./button.module.css";

export const Button = ({
  children,
  type = "button",
  disabled = false,
  appearance = "primary",
  size = "md",
  block = false,
}: Props): ReactElement => {
  const buttonClass = clsx(
    styles.button,
    styles[`btn-${appearance}`],
    styles[`btn-${size}`],
    { [styles["btn-block"]]: block }
  );

  return (
    <button type={type} disabled={disabled} className={buttonClass}>
      {children}
    </button>
  );
};

export default Button;
