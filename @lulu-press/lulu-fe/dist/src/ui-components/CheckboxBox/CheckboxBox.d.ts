import React from "react";
export interface CheckboxBoxProps {
    dataTestId?: string;
    title: React.ReactNode;
    description?: string | React.ReactNode;
    disabled?: boolean;
    value: string;
    name: string;
    checked: boolean;
    onChange: () => void;
    titleColor?: "indigo" | "black";
    theme?: "classic" | "modern";
}
export declare const CheckboxBox: React.FC<CheckboxBoxProps>;
