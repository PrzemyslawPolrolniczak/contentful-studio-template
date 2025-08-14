import React from "react";
import { Icons } from "../../icon-types";
export interface SelectProps {
    label: string | React.ReactElement;
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    options: OptionField[];
    dataTestId?: string;
    className?: string;
    name?: string;
    value?: number | string;
    icon?: Icons;
    placeholder?: string;
    onBlur?: React.FocusEventHandler<HTMLSelectElement>;
    disabled?: boolean;
    error?: string;
    id?: string;
    ariaLabel?: string;
}
type OptionField = {
    label: string;
    value: number | string;
};
export declare const Select: React.FC<SelectProps>;
export {};
