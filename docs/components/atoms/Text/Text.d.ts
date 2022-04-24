import { ReactElement, HTMLAttributes } from 'react';
declare const variants: {
    p: string;
    h1: string;
    h2: string;
    h3: string;
    h4: string;
    h5: string;
    h6: string;
    span: string;
};
declare type Variants = keyof typeof variants;
export declare type Props = {
    children: ReactElement | string;
    variant?: Variants;
    className?: string;
    align?: "left" | "center" | "right";
    color?: "primary" | "secondary" | "tertiary";
} & HTMLAttributes<HTMLElement>;
export declare const Text: ({ variant, className, align, color, ...rest }: Props) => ReactElement;
export default Text;
