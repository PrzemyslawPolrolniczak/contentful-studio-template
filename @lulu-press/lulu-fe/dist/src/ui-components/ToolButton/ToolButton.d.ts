import React from "react";
import { Icons } from "../../icon-types";
export interface ToolButtonProps extends React.HTMLProps<HTMLButtonElement> {
    dataTestId?: string;
    icon?: Icons;
    active?: boolean;
    compact?: boolean;
    addOn?: React.ReactNode;
}
export declare const ToolButton: React.FC<ToolButtonProps>;
