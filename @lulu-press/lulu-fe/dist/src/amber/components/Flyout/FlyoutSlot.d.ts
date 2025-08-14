import React from "react";
import { Icons } from "../../icon-types";
export interface FlyoutSlotProps {
    dataTestId?: string;
    children?: React.ReactNode;
    icon?: Icons;
    title?: string | React.ReactNode;
    action?: {
        label: string;
        onClick: () => void;
    };
}
export declare const FlyoutSlot: React.FC<FlyoutSlotProps>;
