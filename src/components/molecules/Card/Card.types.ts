import { HTMLAttributes, ReactElement } from "react";

export type Props = {
    children: ReactElement;
} & HTMLAttributes<HTMLElement>;