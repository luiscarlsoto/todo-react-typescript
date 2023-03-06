import React from "react";
import { classNames } from "../../helper/styles.helper";

export interface TInputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    as?: React.ElementType;
    errors?: { [key: string]: string };
    name?: string;
}

const Input: React.FC<TInputProps> = ({
    as: Component = "input",
    className = "",
    errors = {},
    name = "",
    disabled,
    ...props
}) => {
    return (
        <Component
            name={name}
            className={classNames(
                errors[name]
                    ? "border-secondary-error-900 text--error-1100 placeholder-red-300 focus:ring-secondary-error-1000 focus:border-secondary-error-1000"
                    : "border-gray-300 placeholder-gray-400  focus:ring-grayBrown-1000 focus:border-grayBrown-1000",
                disabled ? "pointer-events-none opacity-20" : "",
                "border py-2 px-3 block w-full sm:text-sm rounded-md focus:outline-none appearance-none",
                className
            )}
            {...props}
        />
    );
};

export default Input;
