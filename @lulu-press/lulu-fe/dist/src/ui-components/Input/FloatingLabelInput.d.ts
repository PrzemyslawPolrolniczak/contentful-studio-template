import React, { InputHTMLAttributes } from "react";
export interface FloatingLabelInputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    error?: string;
    onChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (evt: React.ChangeEvent<HTMLInputElement>) => void;
    wrapperClassName?: string;
    alternateDisabledStyle?: boolean;
    hideDisabledLabel?: boolean;
}
export declare const FloatingLabelInput: React.FC<FloatingLabelInputProps>;
