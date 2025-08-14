import React from "react";
import { FlyoutSlotProps } from "./FlyoutSlot";
export interface FlyoutProps {
    triggerRef: React.RefObject<HTMLElement>;
    dataTestId?: string;
    children?: React.ReactNode | React.ReactNode[];
    show?: boolean;
    onClose: () => void;
    size?: "medium" | "large" | number;
    title?: string | React.ReactNode;
    action?: {
        label: string;
        onClick: () => void;
    };
    className?: string;
}
export declare const Flyout: React.FC<FlyoutProps> & {
    Slot: React.FC<FlyoutSlotProps>;
};
