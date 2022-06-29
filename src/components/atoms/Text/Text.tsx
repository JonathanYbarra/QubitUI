import { ReactElement, HTMLAttributes } from 'react';
import clsx from "../../../utils/clsx";
import styles from "./text.module.css";
import typography from "../../../styles/typography.module.css";
import colors from "../../../styles/color.module.css";

const variants = {
    p: "p",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6",
    span: "span",
}

type Variants = keyof typeof variants;

export type Props = {
    children: ReactElement | string;
    variant?: Variants;
    className?: string;
    align?: "left" | "center" | "right";
    color?: "primary" | "secondary" | "tertiary" | "light";
} & HTMLAttributes<HTMLElement>;

export const Text = ({ variant = "span", className, align = "left", color, ...rest }: Props): ReactElement => {

    const TextFc = variant;
    const classes = clsx(className, styles[variant], typography[`align-${align}`], { [colors[`color-${color}`]]: color });

    return (
        <TextFc className={classes} {...rest} />
    )
}

export default Text;