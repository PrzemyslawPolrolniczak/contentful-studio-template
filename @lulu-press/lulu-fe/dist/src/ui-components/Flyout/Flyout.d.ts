import React from "react";
export interface FlyoutProps {
    triggerRef: React.RefObject<HTMLElement>;
    dataTestId?: string;
    children?: React.ReactNode | React.ReactNode[];
    show?: boolean;
    onClose?: () => void;
    size?: "small" | "medium" | "large";
    title?: string | React.ReactNode;
    action?: {
        label: string;
        onClick: () => void;
    };
    customPosition?: {
        x: number;
        y: number;
    };
    className?: string;
    noSpacing?: boolean;
}
export declare const Flyout: React.FC<FlyoutProps>;
