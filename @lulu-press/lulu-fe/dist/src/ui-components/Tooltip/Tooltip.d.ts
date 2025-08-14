import React from "react";
import { TooltipProps as ReactTooltipProps } from "react-tooltip";
type TooltipTheme = "discount" | "success" | "warning" | "error" | "neutral" | "default";
export interface TooltipProps extends ReactTooltipProps {
    tooltipId: string;
    closeOnOutsideClick?: boolean;
    tooltipStyle?: TooltipTheme;
    dataTestId?: string;
}
export declare const Tooltip: React.FC<TooltipProps>;
export {};
