import React from "react";
import { TooltipProps as ReactTooltipProps } from "react-tooltip";
export interface TooltipProps extends ReactTooltipProps {
    tooltipId: string;
    dataTestId?: string;
    withoutArrow?: boolean;
}
export declare const Tooltip: React.FC<TooltipProps>;
