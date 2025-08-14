import React, { CSSProperties } from "react";
import { Colors } from "../../constants";
import { Icons } from "../../icon-types";
export interface IconProps {
    dataTestId?: string;
    iconName: Icons;
    color?: Colors;
    className?: string;
    style?: CSSProperties;
    size?: number;
    onClick?: (event: React.MouseEvent | React.KeyboardEvent) => void;
    ariaLabel?: string;
    ariaRole?: string;
    children?: React.ReactNode;
}
export declare const Icon: React.FunctionComponent<IconProps>;
