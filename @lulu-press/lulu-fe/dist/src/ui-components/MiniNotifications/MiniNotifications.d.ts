import React from "react";
import { NotificationType } from "../Notification/Notification";
export type MiniNotificationType = Exclude<NotificationType, "marketing">;
export interface MiniNotificationsProps {
    dataTestId?: string;
    customClassNames?: string;
    noRightBorderRadius?: boolean;
    noBorderRadiusOnNotification?: boolean;
    disableClickAction?: boolean;
    notifications: {
        type: MiniNotificationType;
        message: string | React.ReactNode;
        disableClickAction?: boolean;
    }[];
    children?: React.ReactNode;
}
export declare const MiniNotifications: React.FC<MiniNotificationsProps>;
