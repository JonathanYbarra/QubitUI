import { ReactElement } from "react";
import { Props } from "./Button.types";
import clsx from "../../../utils/clsx";
import styles from "./button.module.css";
import Text from "../../atoms/Text/index";

export const Button = ({
  children,
  type = "button",
  disabled = false,
  appearance = "primary",
}: Props): ReactElement => {
  const buttonClass = clsx(styles.button, styles[`btn-${appearance}`]);

  return (
    <button type={type} disabled={disabled} className={buttonClass}>
      <Text color="light">{children as string | ReactElement}</Text>
    </button>
  );
};

export default Button;
