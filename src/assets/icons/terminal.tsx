import type { ReactElement } from 'react';
import { IconProps } from '../../common';

export default function Svg({ stroke, className = "" }: IconProps): ReactElement {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                d="M5.0333 14.8284L6.44751 16.2426L10.6902 12L6.44751 7.75733L5.0333 9.17155L7.86172 12L5.0333 14.8284Z"
                stroke={`var(--color-${stroke})`}
            />
            <path d="M15 14H11V16H15V14Z" stroke={`var(--color-${stroke})`} />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                stroke={`var(--color-${stroke})`}
                d="M2 2C0.895431 2 0 2.89543 0 4V20C0 21.1046 0.89543 22 2 22H22C23.1046 22 24 21.1046 24 20V4C24 2.89543 23.1046 2 22 2H2ZM22 4H2L2 20H22V4Z"
            />
        </svg>
    )
}
