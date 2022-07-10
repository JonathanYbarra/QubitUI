import { ReactElement, HTMLAttributes } from 'react';
import clsx from "../../../utils/clsx";
import flexbox from "../../../styles/flex.module.css";
import styles from "./wrapper.module.css";
import { Props } from './Wrapper.types';

export const Wrapper = ({ children, className, flex, justify, align, gap, column }: Props): ReactElement => {
    const wrapperClass = clsx(
        className,
        { [flexbox.flex]: flex || justify || align || column },
        { [flexbox.column]: column },
        { [flexbox[`justify-${justify}`]]: justify },
        { [flexbox[`align-${align}`]]: align },
        { [flexbox[`gap-${gap}`]]: gap }
    );

    return (
        <div className={wrapperClass}>
            {children}
        </div>
    )
}

export default Wrapper;