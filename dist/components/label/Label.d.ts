/// <reference types="react" />
import "./label.css";
export interface LabelProps {
    /**
        * Write the content of the label
    */
    text?: string;
    className?: string;
    /**
        * Set the label to be in all caps
    */
    size?: "small" | "normal" | "medium" | "large";
    /**
     * Set the label to be in all caps
     * @default false
     * @example
     * <Label text="My Label" allCaps={true} />
     * <Label text="My Label" allCaps={false} />
     * <Label text="My Label" allCaps />
     * <Label text="My Label" />
     * */
    allCaps?: boolean;
    /**
        * Basic color of the label
    */
    color?: "Primary" | "Secondary" | "Tertiary";
    /**
     * Font Color
     * @default "white"
    **/
    fontColor?: string;
    /**
     * background color
     * @default "black"
     *  */
    backgroundColor?: string;
}
export declare const Label: (props: LabelProps) => JSX.Element;
