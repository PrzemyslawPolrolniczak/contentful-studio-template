import React from "react";
export interface NextStepButtonProps {
    dataTestId?: string;
    to?: string;
    onClick?: any;
    disabled?: boolean;
    nextStepInfo?: string | JSX.Element;
    primary?: boolean;
    loading?: boolean;
    progress?: number;
    buttonStyle?: React.CSSProperties;
    style?: React.CSSProperties;
    children?: React.ReactNode;
}
export declare const NextStepButton: React.FC<NextStepButtonProps>;
