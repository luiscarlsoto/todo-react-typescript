import React from "react";
import { ExclamationCircleIcon } from "@heroicons/react/24/solid";
import { classNames } from "../../helper/styles.helper";
import { ContentToggle, Input, Label } from "../atoms";

type TInputLabel<C extends React.ElementType> = {
    label?: string;
    hint?: string;
    className?: string;
    labelClassName?: string;
    leadingText?: string;
    trailingText?: string;
    disabled?: boolean;
    name?: string;
    errors?: { [key: string]: string };
    hidden?: boolean;
    as?: C;
    inputClassName?: string;
} & React.ComponentPropsWithoutRef<C>;

const InputLabel = <C extends React.ElementType = typeof Input>({
    label,
    hint,
    className = "",
    leadingText,
    trailingText,
    disabled,
    name = "",
    errors = {},
    hidden,
    as,
    inputClassName,
    ...props
}: TInputLabel<C>) => {
    const Component = as || Input;

    if (hidden) return null;
    return (
        <div className={classNames("pb-3", className)}>
            {label && (
                <div className="flex-row justify-between pr-3">
                    <Label
                        className="text-grayBlue-1400 leading-6 font-medium"
                        hidden={!label && !hint}
                    >
                        {label}
                    </Label>
                    <Label hidden={!hint} className="text-grayBlue-1200">
                        {hint}
                    </Label>
                </div>
            )}
            <div
                className={classNames(
                    "relative rounded-md shadow-sm",
                    disabled ? "pointer-events-none opacity-20" : ""
                )}
            >
                {leadingText && (
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                        <span className="text-grayBlue-1300 sm:text-sm">
                            {leadingText}
                        </span>
                    </div>
                )}
                <Component name={name} className={inputClassName} {...props} />
                {trailingText && (
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                        <span className="text-grayBlue-1300 sm:text-sm">
                            {trailingText}
                        </span>
                    </div>
                )}
                <ContentToggle
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    hidden={!errors[name]}
                >
                    <ExclamationCircleIcon
                        className="h-5 w-5 text-red-500"
                        aria-hidden="true"
                    />
                </ContentToggle>
            </div>
            <ContentToggle
                hidden={!errors[name]}
                as="p"
                className="absolute text-sm text-red-600"
                data-testid={name + "-error"}
                id={name + "-error"}
            >
                {errors[name]}
            </ContentToggle>
        </div>
    );
};

export default InputLabel;
