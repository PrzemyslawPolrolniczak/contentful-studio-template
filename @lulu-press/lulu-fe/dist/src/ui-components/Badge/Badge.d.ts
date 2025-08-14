import React from "react";
export type BadgeProps = {
    dataTestId?: string;
    className?: string;
    style?: React.CSSProperties;
} & ({
    number?: number;
    bookBadge?: boolean;
    text?: never;
    variant?: never;
} | {
    text?: string;
    variant?: "info" | "success" | "error" | "neutral" | "muted" | "outlined";
    number?: never;
    bookBadge?: never;
});
export declare const Badge: React.FC<BadgeProps>;
