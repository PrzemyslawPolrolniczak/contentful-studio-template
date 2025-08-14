import React from "react";
import { ButtonProps } from "../Button/Button";
export type NotificationType = "positive" | "negative" | "neutral" | "warning";
export type ToastType = "info" | "error";
type BaseProps = {
    dataTestId?: string;
    content: string | React.ReactElement;
    cta?: {
        action: () => void;
        title: string;
        alignBottom?: boolean;
        noWrap?: boolean;
        additionalButtonProps?: Omit<ButtonProps, "dataTestId" | "className" | "variant" | "onClick">;
    };
    noIcon?: boolean;
    className?: string;
    style?: React.CSSProperties;
};
export interface ToastNotificationProps extends BaseProps {
    variant?: "toast";
    type: ToastType;
}
export interface DefaultNotificationProps extends BaseProps {
    variant?: "default";
    type: NotificationType;
    onClose?: () => void;
}
export type NotificationProps = ToastNotificationProps | DefaultNotificationProps;
export declare const Notification: React.FC<NotificationProps>;
export {};
