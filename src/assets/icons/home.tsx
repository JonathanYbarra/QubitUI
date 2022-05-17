import type { ReactElement } from 'react';
import { IconProps } from '../../common';

export default function Svg({ stroke, className = "" }: IconProps): ReactElement {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M4.63037 9.5399L11.9965 3L19.4397 9.60861"
                stroke={`var(--color-${stroke})`}
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M9.50098 13.75H14.501V21H9.50098V13.75Z"
                stroke={`var(--color-${stroke})`}
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M19.4343 9.60566C19.7847 9.96591 20.0005 10.4578 20.0005 11V19C20.0005 20.1046 19.1051 21 18.0005 21H6.00049C4.89592 21 4.00049 20.1046 4.00049 19V11C4.00049 10.4246 4.24345 9.90601 4.63237 9.54114"
                stroke={`var(--color-${stroke})`}
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}
