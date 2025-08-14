import React from "react";
import { Icons } from "../../icon-types";
export type DefaultTagVariant = "neutral-light" | "accent-blue" | "accent-green" | "accent-magenta";
export type TagProps = React.HTMLAttributes<HTMLSpanElement | HTMLButtonElement | HTMLInputElement> & {
    dataTestId?: string;
    children?: React.ReactNode;
    className?: string;
} & ({
    type?: "default";
    icon?: never;
    iconLeft?: never;
    iconRight?: never;
    size?: never;
    selected?: never;
    leftIcon?: Icons;
    variant?: DefaultTagVariant;
} | {
    type: "filter";
    icon?: Icons;
    size?: "medium" | "small";
    selected?: boolean;
    variant?: never;
    iconLeft?: never;
    iconRight?: never;
    leftIcon?: never;
} | {
    type: "choice";
    iconLeft?: Icons;
    iconRight?: Icons;
    size?: "medium" | "small";
    selected?: boolean;
    name: string;
    value: string;
    variant?: never;
    icon?: never;
    leftIcon?: never;
});
export declare const Tag: React.FC<TagProps>;
