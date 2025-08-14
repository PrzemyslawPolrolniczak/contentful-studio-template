import React from "react";
import { Colors } from "../../amber/constants/colors";
import { Icons } from "../../amber/icon-types";
export type AmberIconButtonProps = {
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
    onClick?: () => void;
} & ({
    variant?: "default" | "outline";
    ghostAccent?: never;
} | {
    variant: "ghost";
    ghostAccent?: Colors;
});
export declare const AmberIconButton: React.ForwardRefExoticComponent<AmberIconButtonProps & React.RefAttributes<HTMLButtonElement>>;
