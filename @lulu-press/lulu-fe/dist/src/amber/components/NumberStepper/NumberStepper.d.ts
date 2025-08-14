import React from "react";
export interface NumberStepperProps {
    dataTestId?: string;
    min?: number;
    max?: number;
    step?: number;
    editable?: boolean;
    defaultValue?: number;
    value?: number | null;
    onChange?: (value: number | null) => void;
    debounce?: number;
    suppressWarnings?: boolean;
    suppressErrors?: boolean;
    ariaLabel?: string;
}
export declare const NumberStepper: React.FC<NumberStepperProps>;
