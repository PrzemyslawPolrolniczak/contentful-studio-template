import React, { MouseEventHandler } from "react";
import { Colors } from "../../constants";
import { Icons } from "../../icon-types";
export type IconButtonProps = {
    additionalHtmlProps?: Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className" | "style" | "disabled" | "onClick" | "color">;
    dataTestId?: string;
    iconName: Icons;
    variant?: "default" | "outline" | "ghost";
    shift?: "right" | "left";
    size?: "large" | "medium" | "small";
    badge?: number;
    selected?: boolean;
    iconColor?: Colors;
    className?: string;
    style?: React.CSSProperties;
    disabled?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    iconSize?: number;
    tooltip?: string;
    loading?: boolean;
} & ({
    variant?: "default" | "outline";
    ghostAccent?: never;
} | {
    variant: "ghost";
    ghostAccent?: Colors;
});
export declare const IconButton: React.ForwardRefExoticComponent<IconButtonProps & React.RefAttributes<HTMLButtonElement>>;
