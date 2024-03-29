import { HTMLAttributes } from "react";

type Appearance = "primary" | "secondary" | "danger" | "blue" | "purple";

export type Props = {
  /** React node of type children. */
  children?: string;
  /** Type of appearance */
  appearance?: Appearance;
  /** Indicates if the button is disabled */
  disabled?: boolean;
  /** Type of react mouse event onclick to manage event click and void return. */
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  /** Type of react event to manage blur and void return. */
  onBlur?: (event: React.FocusEvent<HTMLButtonElement>) => void;
  /** The type of button */
  type?: "button" | "submit" | "reset";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  block?: boolean;
} & HTMLAttributes<HTMLElement>;

