import React from "react";
import { Icons } from "../../icon-types";
type StatusType = "neutral" | "success" | "warning" | "error" | "retired";
export interface StatusInfoProps {
    dataTestId?: string;
    icon: Icons;
    productLink?: string;
    statusLabel: string;
    statusLevel?: StatusType;
    hasNoMargin?: boolean;
    asExternalLink?: boolean;
}
export declare const StatusInfo: React.FC<StatusInfoProps>;
export {};
