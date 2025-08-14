import React from "react";
export interface CheckboxProps {
    dataTestId?: string;
    checked?: boolean;
    disabled?: boolean;
    lightTheme?: boolean;
    id?: string;
    label?: string | React.ReactNode;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value?: number | string;
    name?: string;
    className?: string;
    resetLabelStyles?: boolean;
}
export declare const Checkbox: React.FC<CheckboxProps>;
