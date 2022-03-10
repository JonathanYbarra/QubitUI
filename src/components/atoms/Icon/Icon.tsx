import { ReactElement, DOMAttributes } from "react";
import { IconProps } from "../../../common";
import clsx from "../../../utils/clsx";
import styles from "./Icon.module.css";
import Icons from "./Icons";

export type Props = {
    size?: string;
    className?: string;
} & IconProps & DOMAttributes<HTMLOrSVGElement>;

export const Icon = ({ size = "medium", className }: Props): ReactElement => {
    const SvgFC = Icons["add"];
    return <SvgFC className={clsx(className, styles.icon, styles[size])} />;
}
