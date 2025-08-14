import React from "react";
export interface StepTitleProps {
    dataTestId?: string;
    order?: number;
    title: string;
    description?: React.ReactNode;
    marginBottom?: boolean;
    fontSize?: "medium" | "large";
    vertical?: boolean;
    wrapperClassName?: string;
}
export declare const StepTitle: React.FunctionComponent<StepTitleProps>;
