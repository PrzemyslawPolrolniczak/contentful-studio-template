import React from "react";
export interface ToolbarProps {
    dataTestId?: string;
    leftComponent?: React.ReactNode;
    rightComponent?: React.ReactNode;
    reversedAfterBreak?: boolean;
}
export declare const Toolbar: React.FC<ToolbarProps>;
