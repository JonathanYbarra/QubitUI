import { ReactElement, DOMAttributes } from "react";
import Icons from "./Icons";
import { IconProps } from "../../../common";

export type Props = {
    size?: string;
} & IconProps & DOMAttributes<HTMLOrSVGElement>;

export const Icon = ({ size = "tiny", className }: Props): ReactElement => {
    const SvgFC = Icons["add"];
    return <SvgFC className="tiny" />;
}
