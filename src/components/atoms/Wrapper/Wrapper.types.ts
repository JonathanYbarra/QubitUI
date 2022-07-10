import { HTMLAttributes } from "react";

export type Props = {
    justify?: "center" | "end" | "around" | "between" | "evenly" | "start";
    flex?: boolean;
    className?: string;
    align?: "baseline" | "center" | "end" | "start" | "stretch";
    gap?: "1" | "2" | "3" | "4" | "5" | "6";
    column?: boolean
} & HTMLAttributes<HTMLElement>;