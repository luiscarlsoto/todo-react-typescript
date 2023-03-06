import React from "react";
import { classNames } from "../../helper/styles.helper";

export type TButtonProps<C extends React.ElementType> = {
    className?: string;
    title?: string;
    iconClassName?: string;
    icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    children?: React.ReactNode;
    disabled?: boolean;
    as?: C;
} & React.ComponentPropsWithoutRef<C>;

const Button = <C extends React.ElementType = "button">({
    className = "",
    iconClassName = "",
    title = "",
    icon: Icon,
    disabled,
    children,
    as,
    hidden = false,
    ...props
}: TButtonProps<C>) => {
    if (hidden) return null;
    const Component = as || "button";
    return (
        <Component
            {...props}
            disabled={disabled}
            className={classNames(
                "text-primary flex items-center gap-3 transition-all leading-5 text-base",
                disabled ? "pointer-events-none opacity-20" : "",
                className
            )}
        >
            {Icon && (
                <div className="self-center relative h-5 w-5">
                    <Icon className={classNames("h-5 w-5 ", iconClassName)} />
                </div>
            )}
            {title}
            {children}
        </Component>
    );
};

export default Button;
