import React from "react";
import { Colors } from "../../constants";
export interface SpinnerProps {
    dataTestId?: string;
    size?: number;
    color?: Colors;
    className?: string;
}
export declare const Spinner: React.FC<SpinnerProps>;
