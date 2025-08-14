import React from "react";
import { GroupBase, Props as ReactSelectProps } from "react-select";
export interface FormSelectProps {
    dataTestId?: string;
    error?: boolean | string;
    label?: string;
    variant?: "filled" | "outline";
    tooltip?: string;
}
export declare const Select: <Option, IsMulti extends boolean = false, Group extends GroupBase<Option> = GroupBase<Option>>({ dataTestId, error, label, variant, tooltip, ...selectProps }: FormSelectProps & ReactSelectProps<Option, IsMulti, Group>) => React.JSX.Element;
