import React from 'react';
import './Typography.css';

export const Typography = ({
    children,
    component,
    variant,
    ...props
}) => React.createElement(
    component,
    {
        className: variant ? `Typography_container--${variant}` : `Typography_container`,
        ...props
    },
    children,
);

Typography.defaultProps = {
    children: '',
    component: 'p',
    variant: ''
};

