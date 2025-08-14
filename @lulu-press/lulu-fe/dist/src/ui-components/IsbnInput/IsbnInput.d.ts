import React from "react";
export interface IsbnInputProps {
    dataTestId?: string;
    onChange: (value: string, isValid: boolean) => void;
    placeholder?: string;
    disabled?: boolean;
    actions?: React.ReactNode;
    forceInitialDirty?: boolean;
    initialValue?: string;
    customError?: string;
    value?: string;
}
export declare const IsbnInput: React.FC<IsbnInputProps>;
