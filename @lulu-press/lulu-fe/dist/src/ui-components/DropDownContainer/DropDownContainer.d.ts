import React from "react";
export interface DropDownContainerProps {
    dataTestId?: string;
    title: string;
    downwardArrow: boolean;
    increasedHorizontalPadding: boolean;
    children?: React.ReactNode;
}
export declare const DropDownContainer: React.FC<DropDownContainerProps>;
