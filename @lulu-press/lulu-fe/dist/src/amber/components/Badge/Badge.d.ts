import React from "react";
import { Icons } from "../../icon-types";
export type BadgeProps = {
    dataTestId?: string;
    className?: string;
    style?: React.CSSProperties;
} & ({
    number?: number;
    bookBadge?: boolean;
    text?: never;
    variant?: never;
    leftIcon?: never;
} | {
    text?: string;
    variant?: "info" | "success" | "error" | "neutral" | "muted" | "outlined" | "dark";
    number?: never;
    bookBadge?: never;
    leftIcon?: Icons;
});
export declare const Badge: React.FC<BadgeProps>;
