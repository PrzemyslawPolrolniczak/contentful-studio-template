import React from "react";
import { Icons } from "../../icon-types";
export interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
    name?: string;
    dataTestId?: string;
    downloadHref?: string;
    downloadTitle?: string;
    block?: boolean;
    responsive?: boolean;
    disabled?: boolean;
    loading?: boolean;
    download?: boolean;
    hasDownloadIcon?: boolean;
    isVerticallyStretched?: boolean;
    buttonSize?: "large" | "medium" | "small" | "extra-small";
    hierarchy?: "primary" | "secondary" | "tertiary" | "tertiary-white";
    type?: "button" | "submit" | "reset";
    icon?: Icons;
    progress?: number;
    downloadForceNewTab?: boolean;
    hasModalStyles?: boolean;
}
export declare const Button: React.FunctionComponent<ButtonProps>;
