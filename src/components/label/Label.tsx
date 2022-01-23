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
}

export const Label = (props: LabelProps) => {
    const {
        allCaps = false,
        color = "primary",
        text = "No Label",
        className = " ",
        size = "normal",
        fontColor
    } = props;

    return (
        <span className={`${className} ${size} text-${color}`} style={{color: fontColor}}>
            {allCaps ? text.toUpperCase() : text}
        </span>
    )
}
