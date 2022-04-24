import { ReactElement, DOMAttributes } from "react";
import { IconProps } from "../../../common";
export declare type Size = "xs" | "sm" | "md" | "lg" | "xl";
export declare type Props = {
    size?: Size;
    className?: string;
} & IconProps & DOMAttributes<HTMLOrSVGElement>;
export declare const Icon: ({ size, className }: Props) => ReactElement;
