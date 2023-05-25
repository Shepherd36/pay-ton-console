export const textStyles = {
    body1: {
        fontSize: '16px',
        fontWeight: '400',
        lineHeight: '22px',
        minHeight: '22px'
    },
    body2: {
        fontSize: '14px',
        fontWeight: '400',
        lineHeight: '20px',
        minHeight: '20px'
    },
    body3: {
        fontSize: '12px',
        fontWeight: '400',
        lineHeight: '18px',
        minHeight: '18px'
    },
    label1: {
        fontSize: '16px',
        fontWeight: '600',
        lineHeight: '22px',
        minHeight: '22px'
    },
    label2: {
        fontSize: '14px',
        fontWeight: '600',
        lineHeight: '20px',
        minHeight: '20px'
    },
    label3: {
        fontSize: '12px',
        fontWeight: '600',
        lineHeight: '18px',
        minHeight: '18px'
    },
    h1: {
        fontSize: '48px',
        fontWeight: '700',
        lineHeight: '56px',
        minHeight: '56px'
    },
    h2: {
        fontSize: '32px',
        fontWeight: '700',
        lineHeight: '40px',
        minHeight: '40px'
    },
    h3: {
        fontSize: '24px',
        fontWeight: '700',
        lineHeight: '32px',
        minHeight: '32px'
    },
    h3Thin: {
        fontSize: '24px',
        fontWeight: '400',
        lineHeight: '32px',
        minHeight: '32px'
    },
    h4: {
        fontSize: '20px',
        fontWeight: '700',
        lineHeight: '28px',
        minHeight: '28px'
    }
};

export type TextStyle = keyof typeof textStyles;
