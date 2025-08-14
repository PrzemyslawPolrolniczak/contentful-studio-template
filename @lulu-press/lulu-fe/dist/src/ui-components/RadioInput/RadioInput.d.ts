import React from "react";
export interface RadioInputProps extends React.HTMLProps<HTMLInputElement> {
    dataTestId?: string;
    size?: number;
    spacing?: number;
    className?: string;
}
export declare const RadioInput: React.FC<RadioInputProps>;
