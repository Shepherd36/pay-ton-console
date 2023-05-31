import { Component } from 'solid-js';
import { Colors } from 'src/styles';
import { useTheme } from 'solid-styled-components';
import { Property } from 'csstype';

export interface TonIconProps {
    color?: keyof Colors['icon'];
}

export const TonIcon: Component<TonIconProps> = props => {
    const theme = useTheme();
    const color = (): Property.Color => theme.colors.icon[props.color || 'primary'];

    return (
        <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.27549 1.5H12.7248C14.4105 1.5 15.4699 3.31805 14.6389 4.78465L9.30506 14.197C8.73046 15.211 7.26956 15.211 6.69499 14.197L1.36143 4.78461C0.53038 3.31801 1.5898 1.5 3.27549 1.5ZM7.25039 12.15V3H3.92086C3.33858 3 3.04744 3 2.87734 3.12241C2.72893 3.22921 2.63236 3.39358 2.61133 3.57522C2.58721 3.78339 2.72896 4.0377 3.01244 4.54632L7.25039 12.15ZM8.75049 3V12.15L12.9884 4.54632C13.2719 4.0377 13.4137 3.78339 13.3896 3.57522C13.3685 3.39358 13.272 3.22921 13.1235 3.12241C12.9534 3 12.6623 3 12.08 3H8.75049Z"
                fill={color()}
            />
        </svg>
    );
};
