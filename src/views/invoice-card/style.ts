import { styled } from 'solid-styled-components';
import { borderRadius } from 'src/styles';
import { A } from 'src/uikit';

export const InvoiceCardStyled = styled.div`
    background-color: ${props => props.theme!.colors.background.content};
    border-radius: ${borderRadius.lg};
    width: 420px;
    padding: 16px 24px;
`;

export const SupportButtonStyled = styled(A)`
    display: block;
    margin: 0 auto 4px;
    width: fit-content;
`;
