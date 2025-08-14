import React from "react";
import { ButtonProps } from "../Button/Button";
export interface PillButtonProps extends ButtonProps {
    text: string;
    active: boolean;
}
export declare const PillButton: React.FunctionComponent<PillButtonProps>;
