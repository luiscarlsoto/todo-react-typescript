import React from "react";

export interface TContentToggle extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
    as?: React.ElementType;
    errors?: { [key: string]: string };
    name?: string;
    hidden?: boolean;
}

const ContentToggle: React.FC<TContentToggle> = ({
    as: Component = "div",
    hidden,
    ...props
}) => {
    if (hidden) return null;
    return <Component {...props} />;
};

export default ContentToggle;
