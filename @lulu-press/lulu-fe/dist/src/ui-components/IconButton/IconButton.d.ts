import React from "react";
import { Colors } from "../../constants";
import { Icons } from "../../icon-types";
import { ButtonProps } from "../Button/Button";
export interface IconButtonProps extends ButtonProps {
    shape?: "square" | "round" | "naked";
    icon: Icons;
    color?: Colors;
}
export declare const IconButton: React.FC<IconButtonProps>;
