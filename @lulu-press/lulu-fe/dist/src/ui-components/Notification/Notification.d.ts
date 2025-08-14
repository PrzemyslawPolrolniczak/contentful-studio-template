import React from "react";
export type NotificationType = "success" | "warning" | "error" | "neutral" | "marketing";
export interface NotificationProps {
    dataTestId?: string;
    type?: NotificationType;
    title?: string;
    marginBottom?: string;
    onClose?: () => void;
    fullWidth?: boolean;
    children?: React.ReactNode;
    transparentBackground?: boolean;
}
export declare const Notification: React.FC<NotificationProps>;
