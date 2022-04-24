import { ReactElement, DOMAttributes } from "react";
import { IconProps } from "../../../common";
import { string } from 'prop-types';
import clsx from "../../../utils/clsx";
import styles from "./Icon.module.css";
import Icons from "./Icons";

export type Size = "xs" | "sm" | "md" | "lg" | "xl";
export type Props = {
    size?: Size;
    className?: string;
} & IconProps & DOMAttributes<HTMLOrSVGElement>;

export const Icon = ({ size = "md", className }: Props): ReactElement => {
    const SvgFC = Icons["add"];
    return <SvgFC className={clsx(className, styles.icon, styles[size])} />;
}

Icon.prototype = {
    size: string,
    className: string,
};
