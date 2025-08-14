import React from "react";
import { NumericFormatProps } from "react-number-format";
export interface NumericInputProps extends NumericFormatProps {
    dataTestId?: string;
    label: string;
    isMoney?: boolean;
    currency?: string;
    error?: string;
    wrapperClassName?: string;
    alternateDisabledStyle?: boolean;
    hideDisabledLabel?: boolean;
    helperText?: React.ReactNode;
}
export declare const NumericInput: React.FC<NumericInputProps>;
