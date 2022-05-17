import { ReactElement, DOMAttributes } from "react";
import { string } from 'prop-types';
import type { IconProps, DefaultColors, Size } from "../../../common";
import clsx from "../../../utils/clsx";
import Icons from "./Icons";
import styles from "./Icon.module.css";

export type Name = keyof typeof Icons;


export type Props = {
    size?: Size;
    className?: string;
    name?: Name;
    color?: DefaultColors;
} & IconProps & DOMAttributes<HTMLOrSVGElement>;

export const Icon = ({ size = "md", color = "primary", name, className }: Props): ReactElement => {
    const SvgFC = Icons[name as Name];
    return <SvgFC className={clsx(className, styles.icon, styles[size])} stroke={color} />;
}

Icon.prototype = {
    size: string,
    className: string,
};
