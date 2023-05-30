import { styled } from 'solid-styled-components';
import { textStyles } from 'src/styles';
import { Property } from 'csstype';

export const H3Styled = styled.h3<{ color: Property.Color }>`
    font-style: normal;
    font-weight: ${textStyles.h3.fontWeight};
    font-size: ${textStyles.h3.fontSize};
    line-height: ${textStyles.h3.lineHeight};

    text-align: center;

    color: ${props => props.color};

    margin-top: 0;
    margin-bottom: 6px;

    cursor: default;
`;
