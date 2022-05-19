import type { ReactElement } from 'react';
import { IconProps } from '../../common';

export default function Svg({ stroke, className = "" }: IconProps): ReactElement {
    return (
        <svg
            className={className}
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            stroke={`var(--color-${stroke})`}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M4.75 9.75C4.75 8.64543 5.64543 7.75 6.75 7.75H17.25C18.3546 7.75 19.25 8.64543 19.25 9.75V17.25C19.25 18.3546 18.3546 19.25 17.25 19.25H6.75C5.64543 19.25 4.75 18.3546 4.75 17.25V9.75Z" />
            <path d="M8.75 7.5V6.75C8.75 5.64543 9.64543 4.75 10.75 4.75H13.25C14.3546 4.75 15.25 5.64543 15.25 6.75V7.5" />
            <path d="M5 13.25H19" />
            <path d="M8.75 11.75V14.25" />
            <path d="M15.25 11.75V14.25" />

        </svg>

    )
}
