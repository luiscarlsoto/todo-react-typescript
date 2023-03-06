import React from "react";
import { classNames } from "../../helper/styles.helper";

interface TLabel {
    children: React.ReactNode;
    className?: string;
    hidden?: boolean;
}

const Label = ({ children, className = "", ...props }: TLabel) => {
    return (
        <div className={classNames("font-primary", className)} {...props}>
            {children}
        </div>
    );
};

export default Label;
