import React from "react";
import { classNames } from "../../helper/styles.helper";

export type TInputProps<C extends React.ElementType> = {
    className?: string;
    as?: C;
    errors?: { [key: string]: string };
    name?: string;
} & React.ComponentPropsWithoutRef<C>;

const Input = <C extends React.ElementType = "input">({
    as,
    className = "",
    errors = {},
    name = "",
    disabled,
    ...props
}: TInputProps<C>) => {
    const Component = as || "input";
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
