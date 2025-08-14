import React, { CSSProperties } from "react";
import { Colors } from "../../constants";
import { Icons } from "../../icon-types";
export interface AccordionFormProps {
    className?: string;
    collapsed?: boolean;
    dataTestId?: string;
    title: string | React.ReactElement;
    titleAccessory?: string | React.ReactElement;
    value?: string;
    name?: string;
    type?: "checkbox" | "radio" | "noCheck";
    description?: string | React.ReactElement;
    helper?: string;
    helperLink?: string;
    checked: boolean;
    disabled?: boolean;
    rightElement?: React.ReactNode;
    labelStyle?: CSSProperties;
    icon?: {
        color?: Colors;
        name: Icons;
    };
    variant?: "default" | "pricing";
    onChange?: () => void;
    onClick?: () => void;
    logo?: string;
    condensedLogo?: boolean;
    fixedHeight?: number;
    children?: React.ReactNode;
    inputId?: string;
}
export declare const AccordionForm: React.FC<AccordionFormProps>;
