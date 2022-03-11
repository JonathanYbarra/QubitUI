import { ReactElement, DOMAttributes } from "react";
import { IconProps } from "../../../common";
export declare type Props = {
    size?: string;
    className?: string;
} & IconProps & DOMAttributes<HTMLOrSVGElement>;
export declare const Icon: ({ size, className }: Props) => ReactElement;
