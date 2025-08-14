import React from "react";
import { Colors } from "../../amber/constants/colors";
import { Icons } from "../../amber/icon-types";
export type AmberButtonProps = {
    additionalHtmlProps?: Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className" | "style" | "disabled" | "onClick" | "color">;
    children?: React.ReactNode;
    dataTestId?: string;
    variant?: "primary" | "secondary" | "outline" | "destructive" | "contrast" | "ghost";
    size?: "small" | "medium" | "large";
    iconLeft?: Icons;
    iconRight?: Icons;
    iconColor?: Colors;
    className?: string;
    style?: React.CSSProperties;
    disabled?: boolean;
    loading?: boolean;
    onClick?: () => void;
};
export declare const AmberButton: React.ForwardRefExoticComponent<AmberButtonProps & React.RefAttributes<HTMLButtonElement>>;
